// NIRVO AI — Groq proxy (hardened)
// Key stays server-side (env GROQ_KEY). Only the fields and limits below are accepted.

const ALLOWED_MODELS = ['openai/gpt-oss-120b'];
const ALLOWED_ORIGINS = ['https://nirvo-nir-academy-ai.vercel.app'];
const ALLOWED_EFFORT = ['low', 'medium', 'high'];
const MAX_TOKENS_CAP = 2500;
const MAX_MESSAGES = 14;
const MAX_TOTAL_CHARS = 20000;
const RATE_LIMIT = 30;          // requests per IP per window
const RATE_WINDOW_MS = 60000;   // 1 minute

// Best-effort per-instance limiter (resets on cold start; fine as a basic guard)
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (now - v.start > RATE_WINDOW_MS) hits.delete(k);
    }
    return false;
  }
  rec.count++;
  return rec.count > RATE_LIMIT;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Only accept requests coming from the NIRVO site itself
  const origin = req.headers.origin || '';
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const GROQ_KEY = process.env.GROQ_KEY;
  if (!GROQ_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
             (req.socket && req.socket.remoteAddress) || 'unknown';
  if (limited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  }

  // Validate and whitelist the body
  const b = req.body;
  if (!b || typeof b !== 'object') {
    return res.status(400).json({ error: 'Invalid request' });
  }
  if (!ALLOWED_MODELS.includes(b.model)) {
    return res.status(400).json({ error: 'Model not allowed' });
  }
  if (!Array.isArray(b.messages) || b.messages.length === 0 || b.messages.length > MAX_MESSAGES) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  let total = 0;
  for (const m of b.messages) {
    if (!m || !['system', 'user', 'assistant'].includes(m.role) || typeof m.content !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }
    total += m.content.length;
  }
  if (total > MAX_TOTAL_CHARS) {
    return res.status(413).json({ error: 'Input too long' });
  }

  const payload = {
    model: b.model,
    messages: b.messages.map(m => ({ role: m.role, content: m.content })),
    max_tokens: Math.min(Number(b.max_tokens) || 800, MAX_TOKENS_CAP)
  };
  if (typeof b.temperature === 'number' && b.temperature >= 0 && b.temperature <= 1.5) {
    payload.temperature = b.temperature;
  }
  if (ALLOWED_EFFORT.includes(b.reasoning_effort)) {
    payload.reasoning_effort = b.reasoning_effort;
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_KEY
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(response.status).json(data);

  } catch (error) {
    return res.status(500).json({ error: 'Upstream request failed' });
  }
};
