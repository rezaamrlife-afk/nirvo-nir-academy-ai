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
    'Min. 8 characters': { fa: 'حداقل 8 کاراکتر', tr: 'En az 8 karakter' },
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
    'Password must be at least 8 characters': { fa: 'رمز عبور باید حداقل 8 کاراکتر باشد', tr: 'Şifre en az 8 karakter olmalıdır' },
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
    // ── index.html (Phase 2) ──
    'Pedagogy First  ·  AI Enhanced  ·  Future Ready': { fa: 'آموزش‌محور  ·  مجهز به هوش مصنوعی  ·  آماده برای آینده', tr: 'Önce Pedagoji  ·  Yapay Zekâ Destekli  ·  Geleceğe Hazır' },
    'NIRVO AI — Speaking AI by NIR Academy': { fa: 'NIRVO AI — هوش گفتاری از آکادمی NIR', tr: 'NIRVO AI — NIR Academy’den Konuşma Yapay Zekâsı' },
    'Speaking Coach': { fa: 'مربی گفتار', tr: 'Konuşma Koçu' },
    'by NIR Academy': { fa: 'از آکادمی NIR', tr: 'NIR Academy’den' },
    'Speaking Intelligence': { fa: 'هوش گفتاری', tr: 'Konuşma Zekâsı' },
    'NIRVO home': { fa: 'صفحه اصلی NIRVO', tr: 'NIRVO ana sayfa' },
    'Features': { fa: 'ویژگی‌ها', tr: 'Özellikler' },
    'Practice': { fa: 'تمرین', tr: 'Pratik' },
    'Learning Path': { fa: 'مسیر یادگیری', tr: 'Öğrenme Yolu' },
    'Chat with NIRVO': { fa: 'گفتگو با NIRVO', tr: 'NIRVO ile Sohbet' },
    'Pricing': { fa: 'تعرفه‌ها', tr: 'Fiyatlandırma' },
    '☀ Light': { fa: '☀ روشن', tr: '☀ Açık' },
    '☾ Dark': { fa: '☾ تیره', tr: '☾ Koyu' },
    'Log in': { fa: 'ورود', tr: 'Giriş Yap' },
    'Dashboard →': { fa: 'داشبورد ←', tr: 'Panel →' },
    'Dashboard': { fa: 'داشبورد', tr: 'Panel' },
    'Profile': { fa: 'پروفایل', tr: 'Profil' },
    'Get Started Free': { fa: 'شروع رایگان', tr: 'Ücretsiz Başla' },
    'Menu': { fa: 'منو', tr: 'Menü' },
    'Close menu': { fa: 'بستن منو', tr: 'Menüyü kapat' },
    'Account': { fa: 'حساب کاربری', tr: 'Hesap' },
    'Log in / Sign up': { fa: 'ورود / ثبت‌نام', tr: 'Giriş Yap / Kayıt Ol' },
    'My Profile': { fa: 'پروفایل من', tr: 'Profilim' },
    'Explore': { fa: 'کاوش', tr: 'Keşfet' },
    'About NIR Academy': { fa: 'درباره آکادمی NIR', tr: 'NIR Academy Hakkında' },
    'Settings': { fa: 'تنظیمات', tr: 'Ayarlar' },
    'Light Mode': { fa: 'حالت روشن', tr: 'Açık Mod' },
    'Sign Out': { fa: 'خروج از حساب', tr: 'Çıkış Yap' },
    'Dr. Niki Majidi · Speaking Intelligence': { fa: 'Dr. Niki Majidi · هوش گفتاری', tr: 'Dr. Niki Majidi · Konuşma Zekâsı' },
    'AI Speaking Coach · Next Generation': { fa: 'مربی گفتار هوشمند · نسل جدید', tr: 'Yapay Zekâ Konuşma Koçu · Yeni Nesil' },
    'Next Generation': { fa: 'نسل جدید', tr: 'Yeni Nesil' },
    'Intelligence': { fa: 'هوش', tr: 'Zekâ' },
    'for Verbal Expression': { fa: 'برای بیان کلامی', tr: 'Sözlü İfade için' },
    'Practice speaking English naturally with your personal AI coach. Get precise pronunciation feedback and build real fluency — session by session.': {
      fa: 'با مربی هوش مصنوعی شخصی خود، انگلیسی را طبیعی صحبت کنید. درباره تلفظ‌تان بازخورد دقیق بگیرید و روانی واقعی را جلسه به جلسه بسازید.',
      tr: 'Kişisel yapay zekâ koçunuzla İngilizceyi doğal bir şekilde konuşma pratiği yapın. Telaffuzunuz hakkında net geri bildirim alın ve gerçek akıcılığı oturum oturum geliştirin.' },
    'Founded by': { fa: 'بنیان‌گذار', tr: 'Kurucu' },
    '· NIR Academy · TESOL & ELT Training': { fa: '· NIR Academy · آموزش TESOL و ELT', tr: '· NIR Academy · TESOL ve ELT Eğitimi' },
    'NIR Academy — TESOL & ELT Training': { fa: 'NIR Academy — آموزش TESOL و ELT', tr: 'NIR Academy — TESOL ve ELT Eğitimi' },
    'Start Speaking Free': { fa: 'مکالمه را رایگان شروع کنید', tr: 'Ücretsiz Konuşmaya Başla' },
    'Chat with NIRVO →': { fa: 'گفتگو با NIRVO ←', tr: 'NIRVO ile Sohbet →' },
    'Pronunciation 92%': { fa: 'تلفظ 92%', tr: 'Telaffuz 92%' },
    'Fluency 88%': { fa: 'روانی 88%', tr: 'Akıcılık 88%' },
    'Live Score Preview': { fa: 'پیش‌نمایش امتیاز زنده', tr: 'Canlı Puan Önizlemesi' },
    'Pronunciation': { fa: 'تلفظ', tr: 'Telaffuz' },
    'Fluency': { fa: 'روانی', tr: 'Akıcılık' },
    'Grammar': { fa: 'گرامر', tr: 'Dilbilgisi' },
    'Speaking Goal': { fa: 'هدف گفتاری', tr: 'Konuşma Hedefi' },
    '20 / 30 min today': { fa: 'امروز 20 از 30 دقیقه', tr: 'Bugün 20 / 30 dk' },
    'Practice Topics': { fa: 'موضوعات تمرین', tr: 'Pratik Konuları' },
    'Daily Life': { fa: 'زندگی روزمره', tr: 'Günlük Yaşam' },
    'Business': { fa: 'کسب‌وکار', tr: 'İş Dünyası' },
    'Education': { fa: 'آموزش', tr: 'Eğitim' },
    'Travel': { fa: 'سفر', tr: 'Seyahat' },
    'Interviews': { fa: 'مصاحبه‌ها', tr: 'Mülakatlar' },
    'AI Speaking Coach': { fa: 'مربی گفتار هوشمند', tr: 'Yapay Zekâ Konuşma Koçu' },
    'Listen': { fa: 'گوش دادن', tr: 'Dinle' },
    'Analyze': { fa: 'تحلیل', tr: 'Analiz' },
    'Feedback': { fa: 'بازخورد', tr: 'Geri Bildirim' },
    'Improve': { fa: 'بهبود', tr: 'Geliştir' },
    'Core Features': { fa: 'ویژگی‌های اصلی', tr: 'Temel Özellikler' },
    'Everything You Need to': { fa: 'همه چیز برای', tr: 'Güçlü Konuşmak İçin' },
    'Speak Powerfully': { fa: 'قدرتمند صحبت کردن', tr: 'İhtiyacınız Olan Her Şey' },
    'NIRVO AI combines cutting-edge voice technology with intelligent feedback to transform your English speaking skills.': {
      fa: 'NIRVO AI فناوری پیشرفته صدا را با بازخورد هوشمند ترکیب می‌کند تا مهارت صحبت کردن شما به انگلیسی را متحول کند.',
      tr: 'NIRVO AI, son teknoloji ses teknolojisini akıllı geri bildirimle birleştirerek İngilizce konuşma becerilerinizi dönüştürür.' },
    'Speaking Practice': { fa: 'تمرین مکالمه', tr: 'Konuşma Pratiği' },
    'Practice naturally with AI conversations on any topic. Build confidence through repetition and real dialogue.': {
      fa: 'در هر موضوعی با گفتگوهای هوش مصنوعی، طبیعی تمرین کنید. با تکرار و گفتگوی واقعی اعتمادبه‌نفس بسازید.',
      tr: 'Her konuda yapay zekâ sohbetleriyle doğal bir şekilde pratik yapın. Tekrar ve gerçek diyalogla özgüven kazanın.' },
    'Unlimited practice sessions': { fa: 'جلسات تمرین نامحدود', tr: 'Sınırsız pratik oturumu' },
    '5 topic categories': { fa: '5 دسته موضوعی', tr: '5 konu kategorisi' },
    'Natural conversation flow': { fa: 'جریان طبیعی گفتگو', tr: 'Doğal konuşma akışı' },
    'Pronunciation Analysis': { fa: 'تحلیل تلفظ', tr: 'Telaffuz Analizi' },
    'Get precise, sound-by-sound feedback. Know exactly which phonemes to improve.': {
      fa: 'بازخورد دقیق و صدا به صدا بگیرید. دقیقاً بدانید کدام واج‌ها را باید بهتر کنید.',
      tr: 'Ses ses net geri bildirim alın. Hangi fonemleri geliştirmeniz gerektiğini tam olarak bilin.' },
    'Your pronunciation score': { fa: 'امتیاز تلفظ شما', tr: 'Telaffuz puanınız' },
    'Great pronunciation! Keep it up.': { fa: 'تلفظ عالی! ادامه بدهید.', tr: 'Harika telaffuz! Böyle devam edin.' },
    'Fluency Development': { fa: 'تقویت روانی', tr: 'Akıcılık Gelişimi' },
    'Speak smoothly and think in English. Track your fluency growth week by week.': {
      fa: 'روان صحبت کنید و به انگلیسی فکر کنید. پیشرفت روانی خود را هفته به هفته دنبال کنید.',
      tr: 'Akıcı konuşun ve İngilizce düşünün. Akıcılık gelişiminizi hafta hafta takip edin.' },
    'Week 1': { fa: 'هفته 1', tr: '1. Hafta' },
    'Week 7 · 88%': { fa: 'هفته 7 · 88%', tr: '7. Hafta · 88%' },
    'Real-Time Feedback': { fa: 'بازخورد لحظه‌ای', tr: 'Anlık Geri Bildirim' },
    'Instant insights as you speak. No waiting — improve in the moment.': {
      fa: 'همزمان با صحبت کردن، بازخورد فوری بگیرید. بدون انتظار — همان لحظه بهتر شوید.',
      tr: 'Konuşurken anında geri bildirim. Beklemek yok — o anda gelişin.' },
    'Clear tone': { fa: 'لحن واضح', tr: 'Net ton' },
    'Speed: good': { fa: 'سرعت: خوب', tr: 'Hız: iyi' },
    '↑ Stress: improve': { fa: '↑ تکیه: نیاز به بهبود', tr: '↑ Vurgu: geliştirilmeli' },
    'Public Speaking': { fa: 'سخنرانی', tr: 'Topluluk Önünde Konuşma' },
    'Build presence. Lead with words. Practice presentations, job interviews, and public speeches with AI coaching.': {
      fa: 'حضور خود را بسازید. با کلمات رهبری کنید. ارائه، مصاحبه شغلی و سخنرانی را با مربی هوش مصنوعی تمرین کنید.',
      tr: 'Etkileyici bir duruş kazanın. Sözlerinizle liderlik edin. Sunum, iş mülakatı ve topluluk önünde konuşmayı yapay zekâ koçluğuyla çalışın.' },
    'Try a Practice Session': { fa: 'یک جلسه تمرین را امتحان کنید', tr: 'Bir Pratik Oturumu Deneyin' },
    'Job Interview': { fa: 'مصاحبه شغلی', tr: 'İş Mülakatı' },
    'Popular': { fa: 'محبوب', tr: 'Popüler' },
    'Presentation': { fa: 'ارائه', tr: 'Sunum' },
    'Negotiation': { fa: 'مذاکره', tr: 'Müzakere' },
    'Public Talk': { fa: 'سخنرانی عمومی', tr: 'Halka Açık Konuşma' },
    'How It Works': { fa: 'چگونه کار می‌کند', tr: 'Nasıl Çalışır' },
    '4 Simple Steps': { fa: '4 مرحله ساده', tr: '4 Basit Adım' },
    'Choose a Topic': { fa: 'موضوع را انتخاب کنید', tr: 'Bir Konu Seçin' },
    'Pick from Daily Life, Business, Travel, and more': { fa: 'از میان زندگی روزمره، کسب‌وکار، سفر و موارد دیگر انتخاب کنید', tr: 'Günlük Yaşam, İş Dünyası, Seyahat ve daha fazlası arasından seçin' },
    'Start Speaking': { fa: 'شروع صحبت', tr: 'Konuşmaya Başlayın' },
    'Talk naturally — NIRVO listens and understands you': { fa: 'طبیعی صحبت کنید — NIRVO گوش می‌دهد و شما را می‌فهمد', tr: 'Doğal konuşun — NIRVO sizi dinler ve anlar' },
    'AI Analyzes': { fa: 'هوش مصنوعی تحلیل می‌کند', tr: 'Yapay Zekâ Analiz Eder' },
    'Pronunciation, fluency, grammar — all checked instantly': { fa: 'تلفظ، روانی، گرامر — همه فوراً بررسی می‌شوند', tr: 'Telaffuz, akıcılık, dilbilgisi — hepsi anında kontrol edilir' },
    'Get Feedback': { fa: 'بازخورد بگیرید', tr: 'Geri Bildirim Alın' },
    'See your scores and exactly what to improve next': { fa: 'امتیازهای خود را ببینید و بدانید دقیقاً چه چیزی را باید بهتر کنید', tr: 'Puanlarınızı ve sırada neyi geliştirmeniz gerektiğini görün' },
    'Start Your First Session Free': { fa: 'اولین جلسه خود را رایگان شروع کنید', tr: 'İlk Oturumunuza Ücretsiz Başlayın' },
    'No credit card required · Instant access': { fa: 'بدون نیاز به کارت اعتباری · دسترسی فوری', tr: 'Kredi kartı gerekmez · Anında erişim' },
    'Next Generation Intelligence for Verbal Expression. Speak clearly, speak confidently, speak powerfully.': {
      fa: 'هوش نسل جدید برای بیان کلامی. شفاف صحبت کنید، با اعتمادبه‌نفس صحبت کنید، قدرتمند صحبت کنید.',
      tr: 'Sözlü ifade için yeni nesil zekâ. Net konuşun, özgüvenle konuşun, güçlü konuşun.' },
    'Product': { fa: 'محصول', tr: 'Ürün' },
    'Pronunciation AI': { fa: 'هوش مصنوعی تلفظ', tr: 'Telaffuz Yapay Zekâsı' },
    'Fluency Tracker': { fa: 'پیگیری روانی', tr: 'Akıcılık Takibi' },
    'Progress Dashboard': { fa: 'داشبورد پیشرفت', tr: 'İlerleme Paneli' },
    'Learn': { fa: 'یادگیری', tr: 'Öğren' },
    'IELTS Prep': { fa: 'آمادگی آیلتس', tr: 'IELTS Hazırlık' },
    'TESOL Resources': { fa: 'منابع TESOL', tr: 'TESOL Kaynakları' },
    'Blog': { fa: 'وبلاگ', tr: 'Blog' },
    'Support': { fa: 'پشتیبانی', tr: 'Destek' },
    'Help Center': { fa: 'مرکز راهنما', tr: 'Yardım Merkezi' },
    'Privacy Policy': { fa: 'سیاست حریم خصوصی', tr: 'Gizlilik Politikası' },
    'Terms of Service': { fa: 'شرایط استفاده', tr: 'Hizmet Şartları' },
    'Contact Us': { fa: 'تماس با ما', tr: 'Bize Ulaşın' },
    'Get speaking tips weekly': { fa: 'هر هفته نکات مکالمه دریافت کنید', tr: 'Haftalık konuşma ipuçları alın' },
    '→': { fa: '←', tr: '→' },
    '· NIR Academy · Dr. Niki Majidi · Speaking Intelligence': { fa: '· NIR Academy · Dr. Niki Majidi · هوش گفتاری', tr: '· NIR Academy · Dr. Niki Majidi · Konuşma Zekâsı' },
    '© 2026 NIRVO AI · NIR Academy. All rights reserved.': { fa: '© 2026 NIRVO AI · NIR Academy. تمامی حقوق محفوظ است.', tr: '© 2026 NIRVO AI · NIR Academy. Tüm hakları saklıdır.' },
    'Better Speaking · Better Confidence · Better You': { fa: 'گفتار بهتر · اعتمادبه‌نفس بیشتر · شما بهتر', tr: 'Daha İyi Konuşma · Daha Fazla Özgüven · Daha İyi Siz' },
    'Home': { fa: 'خانه', tr: 'Ana Sayfa' },
    'Chat': { fa: 'گفتگو', tr: 'Sohbet' },
    'Main': { fa: 'ناوبری اصلی', tr: 'Ana gezinme' },
    'Thank you! Speaking tips are on the way.': { fa: 'متشکریم! نکات مکالمه به‌زودی برایتان ارسال می‌شود.', tr: 'Teşekkürler! Konuşma ipuçları yolda.' },
    // markup fragments that contain links (used with data-i18n-html)
    'auth.terms.signin': {
      fa: 'با ورود به حساب، <a href="#">شرایط</a> و <a href="#">سیاست حریم خصوصی</a> ما را می‌پذیرید',
      tr: 'Giriş yaparak <a href="#">Şartlarımızı</a> ve <a href="#">Gizlilik Politikamızı</a> kabul etmiş olursunuz'
    },
    'auth.terms.signup': {
      fa: 'با ثبت‌نام، <a href="#">شرایط استفاده</a> و <a href="#">سیاست حریم خصوصی</a> ما را می‌پذیرید',
      tr: 'Kayıt olarak <a href="#">Kullanım Şartlarımızı</a> ve <a href="#">Gizlilik Politikamızı</a> kabul etmiş olursunuz'
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
