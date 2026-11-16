/* NIRVO shared i18n (EN / FA / TR) — additive layer.
 * English is the source language: the page's own English markup and JS are never edited.
 * For FA/TR the text is translated at runtime by exact match against the English strings below,
 * so any text the page's own JS writes later (alerts, button labels, tab titles) is translated too.
 * Learning content (practice prompts, chat, feedback, vocabulary) is NOT in this dictionary and stays English.
 * Language is saved in localStorage ('nirvo_lang'). EN/TR = LTR, FA = RTL (Vazirmatn font).
 * If this file fails to load, pages simply stay in English.
 */
(function () {
  'use strict';
  var KEY = 'nirvo_lang', LANGS = ['en', 'fa', 'tr'];

  // ── Dictionary: English text -> { fa, tr } ──
  var D = {
    // auth.html
    '← Back to Home': { fa: '→ بازگشت به صفحه اصلی', tr: '← Ana Sayfaya Dön' },
    'Welcome to NIRVO AI': { fa: 'به NIRVO AI خوش آمدید', tr: "NIRVO AI'ya Hoş Geldiniz" },
    'Create Your Account': { fa: 'حساب کاربری خود را بسازید', tr: 'Hesabınızı Oluşturun' },
    'Speaking Intelligence by NIR Academy': { fa: 'هوش گفتاری از آکادمی NIR', tr: 'NIR Academy’den Konuşma Zekâsı' },
    'NIRVO AI — Sign In': { fa: 'NIRVO AI — ورود', tr: 'NIRVO AI — Giriş Yap' },
    'Sign In': { fa: 'ورود', tr: 'Giriş Yap' },
    'Sign Up': { fa: 'ثبت‌نام', tr: 'Kayıt Ol' },
    'Email Address': { fa: 'آدرس ایمیل', tr: 'E-posta Adresi' },
    'Password': { fa: 'رمز عبور', tr: 'Şifre' },
    'First Name': { fa: 'نام', tr: 'Ad' },
    'Last Name': { fa: 'نام خانوادگی', tr: 'Soyad' },
    'Min. 8 characters': { fa: 'حداقل ۸ کاراکتر', tr: 'En az 8 karakter' },
    'Forgot password?': { fa: 'رمز عبور را فراموش کرده‌اید؟', tr: 'Şifrenizi mi unuttunuz?' },
    'Create Account': { fa: 'ایجاد حساب', tr: 'Hesap Oluştur' },
    'Please wait...': { fa: 'لطفاً صبر کنید...', tr: 'Lütfen bekleyin...' },
    "Don't have an account?": { fa: 'حساب کاربری ندارید؟', tr: 'Hesabınız yok mu?' },
    'Sign Up Free': { fa: 'ثبت‌نام رایگان', tr: 'Ücretsiz Kayıt Ol' },
    'Already have an account?': { fa: 'قبلاً ثبت‌نام کرده‌اید؟', tr: 'Zaten hesabınız var mı?' },
    'Weak': { fa: 'ضعیف', tr: 'Zayıf' },
    'Fair': { fa: 'متوسط', tr: 'Orta' },
    'Good': { fa: 'خوب', tr: 'İyi' },
    'Strong': { fa: 'قوی', tr: 'Güçlü' },
    'Please fill in all fields': { fa: 'لطفاً همه فیلدها را پر کنید', tr: 'Lütfen tüm alanları doldurun' },
    'Password must be at least 8 characters': { fa: 'رمز عبور باید حداقل ۸ کاراکتر باشد', tr: 'Şifre en az 8 karakter olmalıdır' },
    'Enter your email first': { fa: 'ابتدا ایمیل خود را وارد کنید', tr: 'Önce e-posta adresinizi girin' },
    'Signed in! Redirecting...': { fa: 'وارد شدید! در حال انتقال...', tr: 'Giriş yapıldı! Yönlendiriliyorsunuz...' },
    'Account created! Please check your email to confirm.': { fa: 'حساب ساخته شد! لطفاً برای تأیید، ایمیل خود را بررسی کنید.', tr: 'Hesap oluşturuldu! Onaylamak için lütfen e-postanızı kontrol edin.' },
    'Password reset email sent!': { fa: 'ایمیل بازیابی رمز عبور ارسال شد!', tr: 'Şifre sıfırlama e-postası gönderildi!' },
    'Invalid login credentials': { fa: 'ایمیل یا رمز عبور نادرست است', tr: 'E-posta veya şifre hatalı' },
    'Email not confirmed': { fa: 'ایمیل هنوز تأیید نشده است', tr: 'E-posta henüz onaylanmadı' },
    'User already registered': { fa: 'این ایمیل قبلاً ثبت شده است', tr: 'Bu e-posta zaten kayıtlı' },
    'Switch to light mode': { fa: 'تغییر به حالت روشن', tr: 'Açık moda geç' },
    'Switch to dark mode': { fa: 'تغییر به حالت تیره', tr: 'Koyu moda geç' },
    'Language': { fa: 'زبان', tr: 'Dil' },
    // markup fragments that contain links (used with data-i18n-html)
    'auth.terms.signin': {
      fa: 'با ورود، با <a href="#">شرایط</a> و <a href="#">سیاست حریم خصوصی</a> ما موافقت می‌کنید',
      tr: 'Giriş yaparak <a href="#">Şartlar</a> ve <a href="#">Gizlilik Politikası</a>’nı kabul etmiş olursunuz'
    },
    'auth.terms.signup': {
      fa: 'با ثبت‌نام، با <a href="#">شرایط استفاده</a> و <a href="#">سیاست حریم خصوصی</a> ما موافقت می‌کنید',
      tr: 'Kayıt olarak <a href="#">Hizmet Şartları</a> ve <a href="#">Gizlilik Politikası</a>’nı kabul etmiş olursunuz'
    }
  };

  // ── Language state ──
  var lang = 'en';
  try { var s = localStorage.getItem(KEY); if (LANGS.indexOf(s) >= 0) lang = s; } catch (e) {}

  function applyDoc(l) {
    var h = document.documentElement;
    h.setAttribute('lang', l);
    h.setAttribute('dir', l === 'fa' ? 'rtl' : 'ltr');
  }
  applyDoc(lang);

  // ── Shared CSS (RTL + Persian font + Arabic-script safety) ──
  var css = document.createElement('style');
  css.id = 'nv-i18n-css';
  css.textContent =
    'html[lang="fa"] *,html[lang="fa"] *::before,html[lang="fa"] *::after{font-family:"Vazirmatn","Outfit",system-ui,sans-serif!important;letter-spacing:0!important;text-transform:none!important}' +
    'html[dir="rtl"] input[type="email"],html[dir="rtl"] input[type="password"],html[dir="rtl"] input[type="url"]{direction:ltr;text-align:left}' +
    'html[dir="rtl"] input[type="email"]::placeholder,html[dir="rtl"] input[type="password"]::placeholder{text-align:left}';
  (document.head || document.documentElement).appendChild(css);

  var fontLoaded = false;
  function ensureFont() {
    if (fontLoaded || lang !== 'fa') return;
    fontLoaded = true;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap';
    (document.head || document.documentElement).appendChild(l);
  }

  // ── Translation helpers ──
  function tr(en, l) { var e = D[en]; return e && e[l] ? e[l] : null; }

  // Text nodes: remember the English original per node so language can be switched back and forth.
  var nodes = [];            // [{n:TextNode, en:String, out:String}]
  var byNode = new WeakMap();
  var PREFIXES = ['⚠ ', '✓ '];

  function splitText(v) {
    var lead = v.match(/^\s*/)[0], trail = v.match(/\s*$/)[0];
    var core = v.slice(lead.length, v.length - trail.length), pre = '';
    for (var i = 0; i < PREFIXES.length; i++) if (core.indexOf(PREFIXES[i]) === 0) { pre = PREFIXES[i]; core = core.slice(pre.length); break; }
    return { lead: lead, core: core, pre: pre, trail: trail };
  }
  function renderNode(rec) {
    var p = splitText(rec.en), out = lang === 'en' ? null : tr(p.core, lang);
    var v = out ? p.lead + p.pre + out + p.trail : rec.en;
    if (rec.n.data !== v) { rec.out = v; rec.n.data = v; } else rec.out = v;
  }
  function visitText(n) {
    var rec = byNode.get(n);
    if (rec) {
      if (n.data === rec.out) return;          // our own write
      rec.en = n.data;                          // page wrote new English text
      renderNode(rec); return;
    }
    var p = splitText(n.data);
    if (!p.core || !D[p.core]) return;
    rec = { n: n, en: n.data, out: n.data };
    byNode.set(n, rec); nodes.push(rec);
    if (lang !== 'en') renderNode(rec);
  }

  // Attributes
  var ATTRS = ['placeholder', 'aria-label', 'title'];
  var attrs = [];            // [{el, name, en, out}]
  function visitAttr(el, name) {
    var v = el.getAttribute(name); if (v == null) return;
    var rec = null;
    for (var i = 0; i < attrs.length; i++) if (attrs[i].el === el && attrs[i].name === name) { rec = attrs[i]; break; }
    if (rec) {
      if (v === rec.out) return;
      rec.en = v;
    } else {
      if (!D[v]) return;
      rec = { el: el, name: name, en: v, out: v }; attrs.push(rec);
    }
    var out = lang === 'en' ? null : tr(rec.en, lang);
    rec.out = out || rec.en;
    if (el.getAttribute(name) !== rec.out) el.setAttribute(name, rec.out);
  }

  // Elements with HTML fragments (links inside sentences): <el data-i18n-html="key">English html</el>
  function renderHtmlEls(root) {
    var list = (root || document).querySelectorAll('[data-i18n-html]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i], key = el.getAttribute('data-i18n-html');
      if (el._nvEn === undefined) el._nvEn = el.innerHTML;
      var out = lang === 'en' ? null : tr(key, lang);
      var v = out || el._nvEn;
      if (el.innerHTML !== v) el.innerHTML = v;
    }
  }

  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    var skip = { SCRIPT: 1, STYLE: 1 };
    while ((n = w.nextNode())) { if (n.parentNode && skip[n.parentNode.nodeName]) continue; visitText(n); }
    var els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[aria-label],[title]') : [];
    for (var i = 0; i < els.length; i++) ATTRS.forEach(function (a) { visitAttr(els[i], a); });
  }

  var titleRec = null;
  function renderTitle() {
    var t = document.title;
    if (!titleRec) { if (!D[t]) return; titleRec = { en: t, out: t }; }
    else if (t !== titleRec.out) titleRec.en = t;
    var out = lang === 'en' ? null : tr(titleRec.en, lang);
    titleRec.out = out || titleRec.en;
    if (document.title !== titleRec.out) document.title = titleRec.out;
  }

  var obs = null, busy = false;
  function refreshAll() {
    busy = true;
    nodes = nodes.filter(function (r) { return r.n.isConnected; });
    nodes.forEach(renderNode);
    attrs = attrs.filter(function (r) { return r.el.isConnected; });
    attrs.forEach(function (r) {
      var out = lang === 'en' ? null : tr(r.en, lang);
      r.out = out || r.en; r.el.setAttribute(r.name, r.out);
    });
    renderHtmlEls(); renderTitle();
    if (document.body) walk(document.body);
    syncSwitcher();
    busy = false;
  }

  function startObserver() {
    if (obs || !document.body) return;
    obs = new MutationObserver(function (muts) {
      if (busy) return;
      busy = true;
      try {
        muts.forEach(function (m) {
          if (m.type === 'characterData') visitText(m.target);
          else if (m.type === 'attributes') visitAttr(m.target, m.attributeName);
          else if (m.type === 'childList') m.addedNodes.forEach(function (a) {
            if (a.nodeType === 3) visitText(a); else if (a.nodeType === 1) walk(a);
          });
        });
        renderTitle();
      } catch (e) {}
      busy = false;
    });
    obs.observe(document.body, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ATTRS });
    var t = document.querySelector('title');
    if (t) new MutationObserver(function () { if (!busy) { busy = true; renderTitle(); busy = false; } }).observe(t, { childList: true, characterData: true, subtree: true });
  }

  // ── Language switcher buttons: <button data-lang-btn="fa"> ──
  function syncSwitcher() {
    var bs = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < bs.length; i++) {
      var on = bs[i].getAttribute('data-lang-btn') === lang;
      bs[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      bs[i].classList.toggle('active', on);
    }
  }
  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    applyDoc(l); ensureFont(); refreshAll();
    try { document.dispatchEvent(new CustomEvent('nvlangchange', { detail: { lang: l } })); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-btn]');
    if (b) setLang(b.getAttribute('data-lang-btn'));
  });

  function init() { ensureFont(); startObserver(); refreshAll(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  window.nvI18n = {
    get lang() { return lang; },
    set: setLang,
    add: function (more) { for (var k in more) D[k] = more[k]; refreshAll(); },
    t: function (en) { return lang === 'en' ? en : (tr(en, lang) || en); }
  };
})();
