// ============================================
// Nova IA - Scripts (Theme + i18n)
// ============================================

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.features": "Funciones",
    "nav.tools": "Herramientas",
    "nav.download": "Descargar",
    "nav.downloadBtn": "Descargar APK",
    "hero.badge": "Nueva generación de IA",
    "hero.title1": "Inteligencia Artificial",
    "hero.title2": "elegante y poderosa",
    "hero.subtitle": "Nova IA es tu compañera inteligente. Diseñada para ser rápida, intuitiva y visualmente impecable. Todo el poder de la IA en una experiencia premium.",
    "hero.download": "Descargar APK",
    "hero.explore": "Explorar",
    "hero.stat1": "Herramientas",
    "hero.stat2num": "Rápida",
    "hero.stat2": "Respuesta",
    "hero.stat3num": "Premium",
    "hero.stat3": "Diseño",
    "features.tag": "Funciones",
    "features.title": "Diseñada para destacar",
    "features.desc": "Una experiencia cuidada hasta el último detalle. Minimalista, rápida y elegante.",
    "features.card1.title": "Conversaciones fluidas",
    "features.card1.desc": "Chatea de forma natural con una interfaz limpia y respuestas rápidas.",
    "features.card2.title": "Herramientas de IA",
    "features.card2.desc": "Accede a un conjunto de herramientas útiles pensadas para el día a día.",
    "features.card3.title": "Diseño premium",
    "features.card3.desc": "Tema oscuro elegante, animaciones suaves y una experiencia visual cuidada.",
    "features.card4.title": "Optimizada para móvil",
    "features.card4.desc": "Funciona de forma fluida en cualquier dispositivo Android.",
    "features.card5.title": "Privacidad primero",
    "features.card5.desc": "Tu información se trata con cuidado. Diseño centrado en la experiencia del usuario.",
    "features.card6.title": "Rendimiento ágil",
    "features.card6.desc": "Interfaz ligera y respuestas rápidas para que no pierdas el ritmo.",
    "tools.tag": "Herramientas",
    "tools.title": "Potencia tu productividad",
    "tools.desc": "Un conjunto de herramientas de IA listas para usar desde la aplicación.",
    "tools.t1.title": "Asistente de chat",
    "tools.t1.desc": "Conversaciones inteligentes y contextuales.",
    "tools.t2.title": "Escritura y resúmenes",
    "tools.t2.desc": "Ayuda a redactar, resumir y mejorar textos.",
    "tools.t3.title": "Ideas creativas",
    "tools.t3.desc": "Genera ideas, títulos y conceptos creativos.",
    "tools.t4.title": "Ayuda con código",
    "tools.t4.desc": "Explicaciones y sugerencias para programadores.",
    "tools.t5.title": "Traducción",
    "tools.t5.desc": "Traduce textos de forma rápida y natural.",
    "tools.t6.title": "Brainstorming",
    "tools.t6.desc": "Explora ideas y resuelve problemas creativamente.",
    "download.badge": "Disponible para Android",
    "download.title": "Lleva Nova IA contigo",
    "download.desc": "Descarga la APK e instálala en tu dispositivo. Experiencia completa, sin complicaciones.",
    "download.btn": "Descargar APK",
    "download.note": "Versión actual • MediaFire",
    "download.chat1": "Hola Nova 👋",
    "download.chat2": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "download.chat3": "Muéstrame tus herramientas",
    "download.chat4": "Claro, aquí tienes todo lo que puedo hacer…",
    "footer.tagline": "Inteligencia Artificial moderna y elegante.",
    "footer.nav": "Navegación",
    "footer.download": "Descarga",
    "footer.rights": "Todos los derechos reservados.",
    "footer.made": "Hecho con atención al detalle.",
    "toast.download": "Redirigiendo a la descarga…"
  },
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.tools": "Tools",
    "nav.download": "Download",
    "nav.downloadBtn": "Download APK",
    "hero.badge": "Next-gen AI",
    "hero.title1": "Artificial Intelligence",
    "hero.title2": "elegant & powerful",
    "hero.subtitle": "Nova IA is your intelligent companion. Designed to be fast, intuitive and visually flawless. All the power of AI in a premium experience.",
    "hero.download": "Download APK",
    "hero.explore": "Explore",
    "hero.stat1": "Tools",
    "hero.stat2num": "Fast",
    "hero.stat2": "Response",
    "hero.stat3num": "Premium",
    "hero.stat3": "Design",
    "features.tag": "Features",
    "features.title": "Designed to stand out",
    "features.desc": "An experience crafted down to the last detail. Minimalist, fast and elegant.",
    "features.card1.title": "Fluid conversations",
    "features.card1.desc": "Chat naturally with a clean interface and fast responses.",
    "features.card2.title": "AI Tools",
    "features.card2.desc": "Access a set of useful tools designed for everyday life.",
    "features.card3.title": "Premium design",
    "features.card3.desc": "Elegant dark theme, smooth animations and a polished visual experience.",
    "features.card4.title": "Mobile optimized",
    "features.card4.desc": "Runs smoothly on any Android device.",
    "features.card5.title": "Privacy first",
    "features.card5.desc": "Your information is treated carefully. User-centered design.",
    "features.card6.title": "Agile performance",
    "features.card6.desc": "Lightweight interface and fast responses so you never lose momentum.",
    "tools.tag": "Tools",
    "tools.title": "Boost your productivity",
    "tools.desc": "A set of AI tools ready to use from the app.",
    "tools.t1.title": "Chat assistant",
    "tools.t1.desc": "Intelligent and contextual conversations.",
    "tools.t2.title": "Writing & summaries",
    "tools.t2.desc": "Help drafting, summarizing and improving texts.",
    "tools.t3.title": "Creative ideas",
    "tools.t3.desc": "Generate ideas, titles and creative concepts.",
    "tools.t4.title": "Code help",
    "tools.t4.desc": "Explanations and suggestions for developers.",
    "tools.t5.title": "Translation",
    "tools.t5.desc": "Translate texts quickly and naturally.",
    "tools.t6.title": "Brainstorming",
    "tools.t6.desc": "Explore ideas and solve problems creatively.",
    "download.badge": "Available for Android",
    "download.title": "Take Nova IA with you",
    "download.desc": "Download the APK and install it on your device. Full experience, no complications.",
    "download.btn": "Download APK",
    "download.note": "Current version • MediaFire",
    "download.chat1": "Hi Nova 👋",
    "download.chat2": "Hello! How can I help you today?",
    "download.chat3": "Show me your tools",
    "download.chat4": "Sure, here's everything I can do…",
    "footer.tagline": "Modern and elegant Artificial Intelligence.",
    "footer.nav": "Navigation",
    "footer.download": "Download",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made with attention to detail.",
    "toast.download": "Redirecting to download…"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;

  // ========== THEME ==========
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('nova-theme', theme);

    // Cambiar icono de forma fiable
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }

  // Cargar tema guardado
  const savedTheme = localStorage.getItem('nova-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  // ========== LANGUAGE ==========
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    html.setAttribute('lang', lang);
    localStorage.setItem('nova-lang', lang);
    if (langLabel) langLabel.textContent = lang.toUpperCase();
  }

  // Cargar idioma guardado
  const savedLang = localStorage.getItem('nova-lang') || 'es';
  setLanguage(savedLang);

  langToggle?.addEventListener('click', () => {
    const current = localStorage.getItem('nova-lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    setLanguage(next);
  });

  // ========== Año ==========
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========== Mobile Menu ==========
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function closeMobileMenu() {
    hamburger?.classList.remove('active');
    mobileMenu?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      hamburger.classList.add('active');
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMobileMenu();
  });

  // ========== Navbar scroll ==========
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ========== Active link ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ========== Toast ==========
  const toast = document.getElementById('toast');
  let toastTimeout;

  function showToast(message, duration = 2800) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
  }

  // ========== Download feedback ==========
  document.querySelectorAll('#downloadBtn, #mainDownload, a[href*="mediafire"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = localStorage.getItem('nova-lang') || 'es';
      showToast(translations[lang]["toast.download"]);
    });
  });

  // ========== Reveal on scroll ==========
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.feature-card, .tool-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    .feature-card.visible,
    .tool-card.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Inicializar iconos
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});