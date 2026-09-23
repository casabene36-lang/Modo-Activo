// ===== MODO ACTIVO: PULIDO FINAL DE LA WEB =====
(() => {
  if (!document.getElementById('maPolishStyles')) {
    const style = document.createElement('style');
    style.id = 'maPolishStyles';
    style.textContent = `
      html{scroll-behavior:smooth;}
      .ma-hero-planner-link{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 18px;border:2px solid #75ff2d;border-radius:999px;color:#75ff2d;text-decoration:none;font:900 13px/1 Montserrat,sans-serif;transition:transform .18s ease,background .18s ease,color .18s ease;}
      .ma-hero-planner-link:hover{transform:translateY(-2px);background:#75ff2d;color:#0b0d0c;}
      .ma-difference-strip{padding:18px 0;background:#75ff2d;color:#0b0d0c;border-top:2px solid #0b0d0c;border-bottom:2px solid #0b0d0c;}
      .ma-difference-inner{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;}
      .ma-difference-icon{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#0b0d0c;color:#75ff2d;font-size:24px;}
      .ma-difference-copy strong{display:block;font:900 16px/1.25 Montserrat,sans-serif;}
      .ma-difference-copy span{display:block;margin-top:4px;font:700 13px/1.5 Montserrat,sans-serif;}
      .ma-difference-link{color:#0b0d0c;text-decoration:none;font:900 13px/1 Montserrat,sans-serif;border-bottom:2px solid #0b0d0c;padding-bottom:3px;white-space:nowrap;}
      .ma-process-section{padding:56px 0;background:#fff;}
      .ma-process-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:24px;}
      .ma-process-head h3{margin:8px 0 0;font:900 clamp(30px,4vw,46px)/1 Anton,Montserrat,sans-serif;text-transform:uppercase;}
      .ma-process-head p{margin:0;max-width:430px;color:#666;font:600 14px/1.6 Montserrat,sans-serif;}
      .ma-process-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;}
      .ma-process-step{position:relative;border:2px solid #0b0d0c;border-radius:18px;padding:18px;background:#f7f7f2;}
      .ma-process-step b{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:#0b0d0c;color:#75ff2d;font:900 13px/1 Montserrat,sans-serif;}
      .ma-process-step span{display:block;margin:12px 0 7px;font-size:24px;}
      .ma-process-step strong{display:block;font:900 14px/1.25 Montserrat,sans-serif;}
      .ma-process-step small{display:block;margin-top:6px;color:#666;font:600 12px/1.45 Montserrat,sans-serif;}
      .ma-availability-badge{display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:9px 12px;border:1px solid rgba(255,255,255,.3);border-radius:999px;background:rgba(255,255,255,.08);color:#fff;font:800 12px/1 Montserrat,sans-serif;}
      .ma-availability-dot{width:8px;height:8px;border-radius:50%;background:#75ff2d;box-shadow:0 0 0 4px rgba(117,255,45,.13);}
      .ma-faq-toggle{width:100%;margin-top:14px;min-height:46px;border:2px solid #0b0d0c;border-radius:999px;background:#75ff2d;color:#0b0d0c;font:900 13px/1 Montserrat,sans-serif;cursor:pointer;}
      .ma-faq-hidden{display:none !important;}
      .ma-quick-new{border-color:#75ff2d !important;}
      .ma-nav-focus{color:#75ff2d !important;}
      .ma-mobile-menu-strip{display:none;}
      @media(max-width:900px){.ma-process-head{display:grid;align-items:start;}.ma-process-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
      @media(max-width:700px){
        .section,.experience,.booking,.review-section,.action-gallery{scroll-margin-top:84px;}
        .ma-difference-inner{grid-template-columns:auto 1fr;align-items:start;}.ma-difference-link{grid-column:1/-1;margin-left:64px;width:max-content;}
        .ma-process-section{padding:46px 0;}.ma-process-grid{grid-template-columns:1fr 1fr;}
        .action-gallery-grid{display:grid !important;grid-auto-flow:column !important;grid-template-columns:none !important;grid-auto-columns:84% !important;gap:14px !important;overflow-x:auto !important;overscroll-behavior-inline:contain;scroll-snap-type:x mandatory;padding:0 2px 12px;scrollbar-width:none;}
        .action-gallery-grid::-webkit-scrollbar{display:none;}.action-gallery-grid .action-shot{scroll-snap-align:start;min-height:310px !important;}.action-gallery-grid .action-shot:first-child{grid-column:auto !important;min-height:310px !important;}
        .gallery{display:grid !important;grid-auto-flow:column !important;grid-template-columns:none !important;grid-auto-columns:84% !important;gap:14px !important;overflow-x:auto !important;scroll-snap-type:x mandatory;padding-bottom:10px;scrollbar-width:none;}.gallery::-webkit-scrollbar{display:none;}.gallery .gallery-card{scroll-snap-align:start;min-height:300px;}
        .ma-mobile-menu-strip{position:sticky;top:0;z-index:900;display:flex;gap:8px;overflow-x:auto;padding:8px 12px;background:rgba(11,13,12,.96);border-bottom:1px solid rgba(117,255,45,.25);scrollbar-width:none;}.ma-mobile-menu-strip::-webkit-scrollbar{display:none;}.ma-mobile-menu-strip a{flex:0 0 auto;color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.2);border-radius:999px;padding:9px 12px;font:800 11px/1 Montserrat,sans-serif;}.ma-mobile-menu-strip a.ma-mobile-highlight{background:#75ff2d;color:#0b0d0c;border-color:#75ff2d;}
        .ma-mobile-wa{font-size:0 !important;}.ma-mobile-wa::before{content:'💬 Consultar mi fecha';font:900 13px/1 Montserrat,sans-serif;}.ma-mobile-wa span{display:none !important;}.ma-mobile-wa::after{content:'→';display:grid;place-items:center;min-width:40px;height:40px;border-radius:999px;background:#75ff2d;color:#0b0d0c;font:900 18px/1 Montserrat,sans-serif;}
        #nosotros,#cobertura{padding-top:34px !important;padding-bottom:34px !important;}.ma-ages-space,.ma-experience-hub,.ma-planner-section{padding-top:52px !important;padding-bottom:52px !important;}
      }
      @media(max-width:460px){.ma-process-grid{grid-template-columns:1fr;}.action-gallery-grid,.gallery{grid-auto-columns:90% !important;}}
    `;
    document.head.appendChild(style);
  }

  const nav = document.getElementById('navMenu');
  if (nav && !nav.dataset.maPolished) {
    nav.dataset.maPolished = 'true';
    nav.innerHTML = `
      <a href="#propuesta">Qué hacemos</a>
      <a href="#maExperienceHub">Cumpleaños y eventos</a>
      <a href="#maPlanner" class="ma-nav-focus">Armá tu festejo</a>
      <a href="#faq">Preguntas</a>
      <a href="#maPlanner" class="nav-cta">Consultar</a>
    `;
  }

  const heroActions = document.querySelector('.hero-actions');
  if (heroActions && !document.getElementById('maHeroPlannerLink')) {
    const plannerLink = document.createElement('a');
    plannerLink.id = 'maHeroPlannerLink';
    plannerLink.className = 'ma-hero-planner-link';
    plannerLink.href = '#maPlanner';
    plannerLink.textContent = '⚡ Armá tu festejo';
    heroActions.appendChild(plannerLink);
  }

  const parentMessage = document.querySelector('.parent-message');
  if (parentMessage && !document.getElementById('maDifferenceStrip')) {
    parentMessage.insertAdjacentHTML('afterend', `
      <section class="ma-difference-strip" id="maDifferenceStrip">
        <div class="container ma-difference-inner">
          <div class="ma-difference-icon">⚡</div>
          <div class="ma-difference-copy">
            <strong>No hacemos una animación estándar.</strong>
            <span>Adaptamos juegos, desafíos y deportes a la edad, el grupo, el espacio y el tipo de festejo.</span>
          </div>
          <a class="ma-difference-link" href="#maPlanner">Contanos tu idea →</a>
        </div>
      </section>
    `);
  }

  const plannerHead = document.querySelector('#maPlanner .ma-planner-head > div');
  if (plannerHead && !document.getElementById('maAvailabilityBadge')) {
    plannerHead.insertAdjacentHTML('beforeend', `
      <div class="ma-availability-badge" id="maAvailabilityBadge">
        <span class="ma-availability-dot"></span>
        📅 Consultá disponibilidad para tu fecha
      </div>
    `);
  }

  const planner = document.getElementById('maPlanner');
  if (planner && !document.getElementById('maProcessSection')) {
    planner.insertAdjacentHTML('afterend', `
      <section class="ma-process-section" id="maProcessSection">
        <div class="container">
          <div class="ma-process-head">
            <div><span class="eyebrow">DESPUÉS DE ENVIAR TU IDEA</span><h3>Así seguimos.</h3></div>
            <p>La consulta no te obliga a reservar. Primero vemos disponibilidad y terminamos de armar la propuesta juntos.</p>
          </div>
          <div class="ma-process-grid">
            <article class="ma-process-step"><b>1</b><span>📝</span><strong>Completás tu idea</strong><small>Edad, cantidad, fecha, lugar y preferencias.</small></article>
            <article class="ma-process-step"><b>2</b><span>💬</span><strong>Se abre WhatsApp</strong><small>El mensaje queda armado con todos los datos.</small></article>
            <article class="ma-process-step"><b>3</b><span>📅</span><strong>Confirmamos disponibilidad</strong><small>Revisamos la fecha, zona y características del evento.</small></article>
            <article class="ma-process-step"><b>4</b><span>⚡</span><strong>Armamos la propuesta</strong><small>Definimos la experiencia final de Modo Activo.</small></article>
          </div>
        </div>
      </section>
    `);
  }

  const faqList = document.querySelector('.faq-list');
  if (faqList && !document.getElementById('maFaqToggle')) {
    const items = [...faqList.querySelectorAll('details')];
    items.slice(6).forEach(item => item.classList.add('ma-faq-hidden'));
    if (items.length > 6) {
      const button = document.createElement('button');
      button.id = 'maFaqToggle';
      button.type = 'button';
      button.className = 'ma-faq-toggle';
      button.textContent = `Ver ${items.length - 6} preguntas más ↓`;
      button.dataset.open = 'false';
      button.addEventListener('click', () => {
        const open = button.dataset.open === 'true';
        items.slice(6).forEach(item => item.classList.toggle('ma-faq-hidden', open));
        button.dataset.open = String(!open);
        button.textContent = open ? `Ver ${items.length - 6} preguntas más ↓` : 'Ver menos preguntas ↑';
      });
      faqList.appendChild(button);
    }
  }

  const quickGrid = document.querySelector('.quick-info-grid');
  if (quickGrid && !document.getElementById('maQuickPlanner')) {
    quickGrid.insertAdjacentHTML('beforeend', `
      <a href="#maPlanner" class="quick-info-item ma-quick-new" id="maQuickPlanner"><span>⚡</span><div><strong>Armá tu festejo</strong><small>Completá la idea y enviá la consulta lista por WhatsApp.</small></div></a>
      <a href="#faq" class="quick-info-item ma-quick-new" id="maQuickFaq"><span>❓</span><div><strong>Preguntas frecuentes</strong><small>Edades, duración, lluvia, reserva y otras dudas comunes.</small></div></a>
    `);
  }

  const header = document.querySelector('.header');
  if (header && !document.getElementById('maMobileMenuStrip')) {
    header.insertAdjacentHTML('afterend', `
      <nav class="ma-mobile-menu-strip" id="maMobileMenuStrip" aria-label="Accesos rápidos">
        <a href="#inicio">Inicio</a>
        <a href="#propuesta">Qué hacemos</a>
        <a href="#maPlanner" class="ma-mobile-highlight">Armá tu festejo</a>
        <a href="#faq">Preguntas</a>
      </nav>
    `);
  }

  [...document.querySelectorAll('img')].forEach((img, index) => {
    const isHeroMain = img.closest('.main-photo');
    if (isHeroMain) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
    } else if (index > 1) {
      img.loading = 'lazy';
    }
    img.decoding = 'async';
  });

  const mobileWa = document.getElementById('maMobileWa');
  if (mobileWa) {
    mobileWa.setAttribute('aria-label', 'Consultar disponibilidad para mi fecha');
    mobileWa.href = '#maPlanner';
  }
})();
