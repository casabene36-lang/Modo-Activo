// ===== MODO ACTIVO =====
// Navegación / año / animaciones
document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));

const revealTargets = document.querySelectorAll(
  '.service, .gallery-card, .check-list > div, .steps article, details, .parent-card'
);

revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('visible'));
}


// ===== CONSULTAS DESDE LA WEB → WHATSAPP BUSINESS =====
(() => {
  const WHATSAPP = '5491167859172';

  // Crea el asistente directamente desde JavaScript.
  // Así no hace falta modificar index.html.
  if (!document.getElementById('chatLauncher')) {
    document.body.insertAdjacentHTML('beforeend', `
      <button type="button" class="chat-launcher" id="chatLauncher" aria-label="Hacer una consulta">
        <span>💬</span>
        <strong>Consultar</strong>
      </button>

      <div class="chat-overlay" id="chatOverlay" hidden></div>

      <section class="chat-box" id="chatBox" aria-hidden="true" aria-label="Consultas Modo Activo">
        <div class="chat-head">
          <div class="chat-brand">
            <img src="assets/logo-modo-activo.jpg" alt="Modo Activo">
            <div>
              <small>SOMOS MODO ACTIVO</small>
              <strong>¿Qué querés consultar?</strong>
            </div>
          </div>
          <button type="button" class="chat-close" id="chatClose" aria-label="Cerrar">×</button>
        </div>

        <div class="chat-content">
          <div id="queryMenu">
            <div class="bubble bot">
              <p>👋⚡ ¡Hola! Gracias por comunicarte con Somos Modo Activo. ¿Qué te gustaría consultar?</p>
            </div>

            <div class="chat-choices">
              <button type="button" data-wa-message="Hola! 👋 Quiero conocer la propuesta de Somos Modo Activo ⚡">
                ⚡ Conocer la propuesta
              </button>

              <button type="button" data-wa-message="Hola! 🎂 Quiero consultar información para un cumple con Modo Activo ⚡">
                🎂 Información para un cumple
              </button>

              <button type="button" data-wa-message="Hola! 🎯 Quiero saber qué juegos y actividades realizan en los cumpleaños de Modo Activo ⚡">
                🎯 Juegos y actividades
              </button>

              <button type="button" data-wa-message="Hola! ⏱️ Quiero consultar cuánto duran las animaciones de Modo Activo ⚡">
                ⏱️ Duración de la animación
              </button>

              <button type="button" data-wa-message="Hola! 📍 Quiero consultar en qué zonas trabajan con Modo Activo ⚡">
                📍 Zonas donde trabajan
              </button>

              <button type="button" data-wa-message="Hola! 💰 Quiero pedir un presupuesto para un cumple con Modo Activo ⚡">
                💰 Pedir presupuesto
              </button>

              <button type="button" data-wa-message="Hola! 📅 Quiero consultar disponibilidad para un cumple con Modo Activo ⚡">
                📅 Consultar disponibilidad
              </button>

              <button type="button" data-wa-message="Hola! 🎉 Quiero reservar una fecha para un cumple con Modo Activo ⚡">
                🎉 Reservar una fecha
              </button>

              <button type="button" id="otherQueryBtn">
                💬 Otra consulta
              </button>
            </div>
          </div>

          <form class="chat-step-form" id="otherQueryForm" hidden>
            <div class="bubble bot">
              <p>💬 Escribí tu consulta y la pasamos a WhatsApp.</p>
            </div>

            <div id="answerField">
              <label>
                Tu consulta
                <textarea id="otherQueryText" rows="4" placeholder="Escribí acá..." required></textarea>
              </label>
            </div>

            <button type="submit" class="chat-next">Abrir en WhatsApp →</button>
            <button type="button" class="chat-back" id="otherQueryBack">← Volver a las opciones</button>
          </form>
        </div>
      </section>
    `);
  }

  const launcher = document.getElementById('chatLauncher');
  const overlay = document.getElementById('chatOverlay');
  const box = document.getElementById('chatBox');
  const close = document.getElementById('chatClose');
  const queryMenu = document.getElementById('queryMenu');
  const otherQueryBtn = document.getElementById('otherQueryBtn');
  const otherQueryForm = document.getElementById('otherQueryForm');
  const otherQueryText = document.getElementById('otherQueryText');
  const otherQueryBack = document.getElementById('otherQueryBack');

  function openChat() {
    box?.classList.add('open');
    box?.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.hidden = false;
  }

  function closeChat() {
    box?.classList.remove('open');
    box?.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.hidden = true;
  }

  function goToWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  function showMenu() {
    if (queryMenu) queryMenu.hidden = false;
    if (otherQueryForm) otherQueryForm.hidden = true;
  }

  launcher?.addEventListener('click', openChat);
  close?.addEventListener('click', closeChat);
  overlay?.addEventListener('click', closeChat);

  document.querySelectorAll('[data-wa-message]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToWhatsApp(btn.dataset.waMessage);
    });
  });

  otherQueryBtn?.addEventListener('click', () => {
    if (queryMenu) queryMenu.hidden = true;
    if (otherQueryForm) otherQueryForm.hidden = false;
    setTimeout(() => otherQueryText?.focus(), 100);
  });

  otherQueryBack?.addEventListener('click', showMenu);

  otherQueryForm?.addEventListener('submit', e => {
    e.preventDefault();
    const text = otherQueryText?.value.trim();
    if (!text) return;
    goToWhatsApp(`Hola! 👋 Tengo otra consulta sobre Modo Activo ⚡\n\n${text}`);
  });

  // Cualquier botón del sitio que apunte al asistente puede abrirlo.
  document.querySelectorAll('[data-open-consult]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openChat();
    });
  });


  // ===== PANEL INFO RÁPIDA =====
  const infoBtn = document.getElementById('menuBtn');
  const panel = document.getElementById('quickInfoPanel');
  const closeInfoBtn = document.getElementById('quickInfoClose');
  const consultBtn = document.getElementById('quickInfoConsult');

  if (infoBtn && panel) {
    function openPanel() {
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add('show'));
      infoBtn.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      panel.classList.remove('show');
      infoBtn.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        panel.hidden = true;
      }, 180);
    }

    infoBtn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      if (panel.hidden || !panel.classList.contains('show')) {
        openPanel();
      } else {
        closePanel();
      }
    });

    closeInfoBtn?.addEventListener('click', closePanel);

    panel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closePanel);
    });

    consultBtn?.addEventListener('click', () => {
      closePanel();
      openChat();
    });

    document.addEventListener('click', e => {
      if (
        !panel.hidden &&
        !panel.contains(e.target) &&
        !infoBtn.contains(e.target)
      ) {
        closePanel();
      }
    });
  }
})();

// ===== DATOS RÁPIDOS + PREGUNTAS FRECUENTES =====
(() => {
  // Agrega información útil al panel INFO ⚡
  const quickGrid = document.querySelector('.quick-info-grid');
  if (quickGrid && !document.getElementById('quickAgeInfo')) {
    quickGrid.insertAdjacentHTML('beforeend', `
      <a href="#faq" class="quick-info-item" id="quickAgeInfo">
        <span>👧👦</span>
        <div>
          <strong>Edades: 6 a 15 años</strong>
          <small>Adaptamos juegos y desafíos según la edad y las características del grupo.</small>
        </div>
      </a>

      <a href="#faq" class="quick-info-item" id="quickBudgetInfo">
        <span>💰</span>
        <div>
          <strong>Presupuesto personalizado</strong>
          <small>Se define según la cantidad de chicos y la duración de la animación.</small>
        </div>
      </a>
    `);
  }

  // Agrega una aclaración breve en la sección de reserva.
  const bookingHead = document.querySelector('.booking-head');
  if (bookingHead && !document.getElementById('bookingCustomNote')) {
    bookingHead.insertAdjacentHTML('beforeend', `
      <p id="bookingCustomNote" style="margin:14px auto 0;max-width:680px;line-height:1.6;font-weight:700;">
        Cada cumple es distinto. Contanos la edad, cantidad de chicos, duración y lugar,
        y armamos una propuesta a medida.
      </p>
    `);
  }

  // Agrega nuevas preguntas frecuentes.
  const faqList = document.querySelector('.faq-list');
  if (faqList && !document.getElementById('faqAges')) {
    faqList.insertAdjacentHTML('beforeend', `
      <details id="faqAges">
        <summary>¿Qué edades pueden participar?</summary>
        <p>Trabajamos con chicos de 6 a 15 años. Adaptamos los juegos, desafíos y la dinámica según la edad y las características de cada grupo.</p>
      </details>

      <details id="faqRain">
        <summary>¿Qué pasa si llueve?</summary>
        <p>Si el festejo es al aire libre y no cuenta con un espacio cubierto, la actividad puede suspenderse o reprogramarse. Esto se coordina previamente con la familia según el lugar y las condiciones del día.</p>
      </details>

      <details id="faqBudget">
        <summary>¿Cómo se calcula el presupuesto?</summary>
        <p>El presupuesto es personalizado y se define principalmente según la cantidad de chicos y la duración de la animación.</p>
      </details>
    `);
  }
})();

