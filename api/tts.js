// NIRVO AI — Gemini TTS proxy. Key stays server-side (env GEMINI_KEY).
// Optional env: GEMINI_TTS_MODEL, GEMINI_VOICE_US, GEMINI_VOICE_GB
const ALLOWED_ORIGINS = ['https://nirvo-nir-academy-ai.vercel.app'];
const MODEL = process.env.GEMINI_TTS_MODEL || 'gemini-3.8-flash-tts';
const VOICES = {
  American: process.env.GEMINI_VOICE_US || 'Sulafat', // warm
  British: process.env.GEMINI_VOICE_GB || 'Sulafat'
};
const STYLE = {
  American: 'warm, friendly and encouraging, like a professional female English tutor, natural American English accent',
  British: 'warm, friendly and encouraging, like a professional female English tutor, natural British English accent'
};
const MAX_CHARS = 600;
const RATE_LIMIT = 30, RATE_WINDOW_MS = 60000;
const hits = new Map();
function limited(ip) {
  const now = Date.now(), rec = hits.get(ip);
  if (!rec || now - rec.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    if (hits.size > 5000) for (const [k, v] of hits) if (now - v.start > RATE_WINDOW_MS) hits.delete(k);
    return false;
  }
  return ++rec.count > RATE_LIMIT;
}
// Finds the first base64 audio payload anywhere in the response
function findAudio(o) {
  if (!o || typeof o !== 'object') return null;
  if (typeof o.data === 'string' && o.data.length > 100) return { data: o.data, mime: o.mime_type || o.mimeType || '' };
  for (const k of Object.keys(o)) { const r = findAudio(o[k]); if (r) return r; }
  return null;
}
// Wraps raw 16-bit mono PCM in a WAV header (used only if the API returns headerless PCM)
function pcmToWav(pcm, rate) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length, 4); h.write('WAVEfmt ', 8);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24); h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34);
  h.write('data', 36); h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!ALLOWED_ORIGINS.includes(req.headers.origin || '')) return res.status(403).json({ error: 'Forbidden' });
  const KEY = process.env.GEMINI_KEY;
  if (!KEY) return res.status(500).json({ error: 'TTS not configured' });
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || (req.socket && req.socket.remoteAddress) || 'unknown';
  if (limited(ip)) return res.status(429).json({ error: 'Too many requests' });

  const b = req.body;
  const text = b && typeof b.text === 'string' ? b.text.trim() : '';
  if (!text || text.length > MAX_CHARS) return res.status(400).json({ error: 'Invalid text' });
  const accent = b.accent === 'British' ? 'British' : 'American';

  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify({
        model: MODEL,
        input: [{ type: 'user_input', content: [{ type: 'text', text, annotations: [{ type: 'speech_metadata', style: STYLE[accent] }] }] }],
        response_format: { type: 'audio' },
        generation_config: { speech_config: [{ voice: VOICES[accent] }] }
      })
    });
    if (!r.ok) return res.status(502).json({ error: 'TTS upstream error' });
    const audio = findAudio(await r.json());
    if (!audio) return res.status(502).json({ error: 'No audio returned' });
    let buf = Buffer.from(audio.data, 'base64');
    if (buf.length < 4 || buf.toString('ascii', 0, 4) !== 'RIFF') buf = pcmToWav(buf, 24000);
    res.setHeader('Content-Type', 'audio/wav');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(buf);
  } catch (e) {
    return res.status(502).json({ error: 'TTS request failed' });
  }
};
