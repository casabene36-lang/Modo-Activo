// ===== MODO ACTIVO: CUMPLEAÑOS + EVENTOS / EXPERIENCIA AMPLIADA =====
(() => {
  const WHATSAPP = '5491167859172';
  const waLink = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  // Enfoca toda la comunicación en cumpleaños y eventos.
  const heroKicker = document.querySelector('.hero .kicker');
  if (heroKicker) heroKicker.innerHTML = '<span>⚡</span> CUMPLEAÑOS Y EVENTOS EN MOVIMIENTO';

  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.innerHTML = 'UN FESTEJO<br>DONDE NADIE<br><span>SE QUEDA MIRANDO.</span>';
  }

  const heroLead = document.querySelector('.hero-lead');
  if (heroLead) {
    heroLead.textContent = 'Juegos, desafíos y deporte para que los chicos se muevan, se rían y vivan el cumpleaños o evento de principio a fin.';
  }

  const parentEyebrow = document.querySelector('.parent-message .eyebrow');
  if (parentEyebrow) parentEyebrow.textContent = 'PARA QUIEN ORGANIZA EL FESTEJO';

  const parentText = document.querySelector('.parent-message p');
  if (parentText) {
    parentText.textContent = 'Armamos una propuesta pensada para la edad, el grupo, el espacio y el tipo de festejo, con actividades que mantienen a los chicos participando y pasándola bien.';
  }

  const aboutText = document.querySelector('#nosotros .parent-card p');
  if (aboutText) {
    aboutText.textContent = 'Somos Modo Activo, una propuesta de animación deportiva y recreativa para cumpleaños y eventos con chicos de 6 a 15 años.';
  }

  const proposalHeading = document.querySelector('#propuesta h2');
  if (proposalHeading) {
    proposalHeading.innerHTML = 'Todo lo que necesita un festejo para entrar en <span>MODO ACTIVO.</span>';
  }

  const experienceText = document.querySelector('#experiencia .experience-top p');
  if (experienceText) experienceText.textContent = 'La idea es simple: que el festejo se sienta vivo desde que empieza.';

  const bookingNote = document.getElementById('bookingCustomNote');
  if (bookingNote) {
    bookingNote.textContent = 'Cada cumpleaños o evento es distinto. Contanos la edad, cantidad de chicos, duración y lugar, y armamos una propuesta a medida.';
  }

  const stepOne = document.querySelector('#reservar .steps article:first-child p');
  if (stepOne) stepOne.textContent = 'Nos contás cuándo y dónde es el festejo.';

  const faqTitle = document.querySelector('#faq .faq-intro h2');
  if (faqTitle) faqTitle.textContent = 'Antes de poner tu festejo en movimiento.';

  const footerTagline = document.querySelector('.footer-brand small');
  if (footerTagline) footerTagline.textContent = 'Cumpleaños & eventos en movimiento';

  // Hace la galería más protagonista sin necesitar videos.
  const actionGallery = document.querySelector('.action-gallery');
  if (actionGallery) {
    actionGallery.classList.add('ma-gallery-featured');
    const galleryHeadCopy = actionGallery.querySelector('.action-gallery-head > div');
    if (galleryHeadCopy && !document.getElementById('maGalleryIntro')) {
      galleryHeadCopy.insertAdjacentHTML('beforeend', `
        <p id="maGalleryIntro" class="ma-gallery-intro">
          Momentos reales, movimiento, equipo y diversión. Así se siente Modo Activo cuando el grupo entra en juego.
        </p>
      `);
    }
  }

  // Amplía la sección existente de "Qué incluye".
  const checkList = document.querySelector('#incluye .check-list');
  if (checkList && !document.getElementById('maMaterialsInclude')) {
    checkList.insertAdjacentHTML('beforeend', `
      <div id="maMaterialsInclude"><span>✓</span><p><strong>Materiales para las actividades</strong><br>Llevamos los elementos necesarios para desarrollar la propuesta acordada.</p></div>
      <div id="maCoordinationInclude"><span>✓</span><p><strong>Coordinación de principio a fin</strong><br>Organizamos los momentos de juego para que la experiencia tenga ritmo y continuidad.</p></div>
    `);
  }

  // Estilos de las nuevas secciones.
  if (!document.getElementById('maExperienceStyles')) {
    const style = document.createElement('style');
    style.id = 'maExperienceStyles';
    style.textContent = `
      .ma-experience-hub{
        position:relative;
        overflow:hidden;
        padding:88px 0;
        background:#f4f5ef;
        color:#0b0d0c;
      }
      .ma-experience-hub::before{
        content:"";
        position:absolute;
        width:420px;
        height:420px;
        border-radius:50%;
        background:rgba(117,255,45,.18);
        filter:blur(8px);
        right:-160px;
        top:80px;
        pointer-events:none;
      }
      .ma-hub-head{
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        gap:32px;
        margin-bottom:34px;
        position:relative;
        z-index:1;
      }
      .ma-hub-head h2{
        margin:8px 0 0;
        max-width:760px;
      }
      .ma-hub-head h2 span{color:#56d900;}
      .ma-hub-head p{
        max-width:430px;
        margin:0;
        line-height:1.7;
        font-weight:650;
        color:#666;
      }
      .ma-experience-cards{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:22px;
        margin-bottom:62px;
        position:relative;
        z-index:1;
      }
      .ma-exp-card{
        position:relative;
        overflow:hidden;
        min-height:300px;
        border:3px solid #0b0d0c;
        border-radius:28px;
        padding:30px;
        box-shadow:8px 8px 0 #0b0d0c;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
      }
      .ma-exp-card.green{background:#75ff2d;}
      .ma-exp-card.dark{background:#0b0d0c;color:#fff;box-shadow:8px 8px 0 #75ff2d;}
      .ma-exp-card .ma-exp-icon{font-size:44px;line-height:1;}
      .ma-exp-card h3{font:900 clamp(28px,4vw,46px)/.98 Anton,Montserrat,sans-serif;margin:18px 0 12px;text-transform:uppercase;letter-spacing:.3px;}
      .ma-exp-card p{font-weight:650;line-height:1.65;max-width:520px;margin:0;}
      .ma-exp-card .ma-exp-tag{
        align-self:flex-start;
        margin-top:24px;
        padding:9px 13px;
        border:2px solid currentColor;
        border-radius:999px;
        font:900 12px/1 Montserrat,sans-serif;
        text-transform:uppercase;
        letter-spacing:.4px;
      }
      .ma-block-title{
        display:flex;
        align-items:flex-end;
        justify-content:space-between;
        gap:24px;
        margin:0 0 24px;
      }
      .ma-block-title h3{margin:0;font:900 clamp(29px,4vw,48px)/1 Anton,Montserrat,sans-serif;text-transform:uppercase;}
      .ma-block-title p{margin:0;max-width:420px;color:#666;font-weight:650;line-height:1.6;}
      .ma-timeline{
        display:grid;
        grid-template-columns:repeat(5,minmax(0,1fr));
        gap:14px;
        margin-bottom:62px;
      }
      .ma-step{
        position:relative;
        min-height:190px;
        background:#fff;
        border:2px solid #0b0d0c;
        border-radius:22px;
        padding:22px 18px;
        box-shadow:5px 5px 0 #75ff2d;
      }
      .ma-step b{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:38px;
        height:38px;
        border-radius:50%;
        background:#0b0d0c;
        color:#75ff2d;
        font:900 16px/1 Montserrat,sans-serif;
      }
      .ma-step .ma-step-icon{display:block;font-size:30px;margin:16px 0 12px;}
      .ma-step strong{display:block;font:900 16px/1.25 Montserrat,sans-serif;}
      .ma-step small{display:block;margin-top:8px;line-height:1.45;color:#666;font-weight:650;}
      .ma-activity-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:16px;
        margin-bottom:58px;
      }
      .ma-activity{
        background:#fff;
        border:2px solid #0b0d0c;
        border-radius:20px;
        padding:22px;
        min-height:145px;
        transition:transform .18s ease, box-shadow .18s ease;
      }
      .ma-activity:hover{transform:translateY(-4px);box-shadow:5px 5px 0 #75ff2d;}
      .ma-activity span{font-size:30px;}
      .ma-activity h4{margin:14px 0 8px;font:900 18px/1.15 Montserrat,sans-serif;}
      .ma-activity p{margin:0;color:#666;font-size:14px;line-height:1.5;font-weight:600;}
      .ma-event-spotlight{
        position:relative;
        overflow:hidden;
        display:grid;
        grid-template-columns:minmax(0,1.25fr) minmax(220px,.75fr);
        align-items:center;
        gap:28px;
        padding:34px;
        border-radius:28px;
        background:#0b0d0c;
        color:#fff;
        border:3px solid #0b0d0c;
        box-shadow:8px 8px 0 #75ff2d;
      }
      .ma-event-spotlight::after{
        content:"⚡";
        position:absolute;
        right:20px;
        top:-32px;
        font-size:170px;
        opacity:.08;
        transform:rotate(10deg);
      }
      .ma-event-spotlight small{color:#75ff2d;font:900 12px/1 Montserrat,sans-serif;letter-spacing:1px;}
      .ma-event-spotlight h3{margin:10px 0 12px;font:900 clamp(30px,4vw,50px)/1 Anton,Montserrat,sans-serif;text-transform:uppercase;}
      .ma-event-spotlight p{margin:0;line-height:1.65;color:#d8d8d8;font-weight:600;max-width:650px;}
      .ma-event-button{
        position:relative;
        z-index:1;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        min-height:54px;
        padding:0 22px;
        border-radius:999px;
        background:#75ff2d;
        color:#0b0d0c;
        text-decoration:none;
        border:2px solid #75ff2d;
        font:900 14px/1 Montserrat,sans-serif;
        text-align:center;
      }
      .ma-gallery-intro{
        margin:12px 0 0;
        max-width:650px;
        color:#d6d6d6;
        font-weight:600;
        line-height:1.6;
      }
      .ma-gallery-featured .action-gallery-grid .action-shot:first-child{
        grid-column:span 2;
        min-height:420px;
      }
      #incluye .check-list > div:nth-last-child(-n+2){
        border-color:#75ff2d;
      }
      .final-card .ma-final-copy small{display:block;margin-bottom:8px;}
      .final-card .ma-final-copy h2{margin:0 0 10px;}
      .final-card .ma-final-copy p{margin:0;}
      .ma-final-actions{
        display:flex;
        flex-wrap:wrap;
        justify-content:flex-end;
        gap:10px;
      }
      .ma-final-actions a{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        min-height:48px;
        padding:0 17px;
        border-radius:999px;
        text-decoration:none;
        font:900 12px/1.15 Montserrat,sans-serif;
        text-align:center;
        border:2px solid #0b0d0c;
      }
      .ma-final-actions .ma-final-primary{background:#0b0d0c;color:#fff;}
      .ma-final-actions .ma-final-secondary{background:#fff;color:#0b0d0c;}
      @media(max-width:900px){
        .ma-hub-head,.ma-block-title{display:grid;align-items:start;}
        .ma-timeline{grid-template-columns:repeat(2,minmax(0,1fr));}
        .ma-activity-grid{grid-template-columns:repeat(2,minmax(0,1fr));}
        .ma-event-spotlight{grid-template-columns:1fr;}
        .ma-final-actions{justify-content:flex-start;}
      }
      @media(max-width:700px){
        .ma-experience-hub{padding:58px 0;}
        .ma-experience-cards{grid-template-columns:1fr;gap:16px;margin-bottom:48px;}
        .ma-exp-card{min-height:260px;padding:24px;box-shadow:6px 6px 0 #0b0d0c;}
        .ma-exp-card.dark{box-shadow:6px 6px 0 #75ff2d;}
        .ma-timeline{grid-template-columns:1fr;gap:12px;margin-bottom:48px;}
        .ma-step{min-height:auto;}
        .ma-activity-grid{grid-template-columns:1fr;gap:12px;margin-bottom:46px;}
        .ma-event-spotlight{padding:26px 22px;box-shadow:6px 6px 0 #75ff2d;}
        .ma-gallery-featured .action-gallery-grid .action-shot:first-child{grid-column:auto;min-height:300px;}
        .ma-final-actions{width:100%;}
        .ma-final-actions a{width:100%;box-sizing:border-box;}
      }
    `;
    document.head.appendChild(style);
  }

  // Nueva sección principal: experiencias, recorrido, actividades y eventos.
  const booking = document.getElementById('reservar');
  if (booking && !document.getElementById('maExperienceHub')) {
    booking.insertAdjacentHTML('beforebegin', `
      <section class="ma-experience-hub" id="maExperienceHub">
        <div class="container">
          <div class="ma-hub-head">
            <div>
              <span class="eyebrow">CUMPLEAÑOS + EVENTOS</span>
              <h2>Elegí la experiencia y nosotros la ponemos en <span>movimiento.</span></h2>
            </div>
            <p>No trabajamos con una fórmula cerrada: adaptamos la propuesta a la edad, el grupo, el espacio, la duración y el tipo de festejo.</p>
          </div>

          <div class="ma-experience-cards">
            <article class="ma-exp-card green">
              <div>
                <div class="ma-exp-icon">🎂</div>
                <h3>Cumpleaños Modo Activo</h3>
                <p>Juegos, desafíos, deporte y recreación para que el cumple tenga ritmo de principio a fin y todos puedan participar.</p>
              </div>
              <span class="ma-exp-tag">6 a 15 años · Propuesta a medida</span>
            </article>

            <article class="ma-exp-card dark">
              <div>
                <div class="ma-exp-icon">🎉</div>
                <h3>Eventos Modo Activo</h3>
                <p>Una propuesta deportiva y recreativa para sumar movimiento a eventos y festejos con grupos de chicos y adolescentes.</p>
              </div>
              <span class="ma-exp-tag">Dinámica adaptada al evento</span>
            </article>
          </div>

          <div class="ma-block-title">
            <h3>Así se vive Modo Activo ⚡</h3>
            <p>Una experiencia que va creciendo desde la llegada hasta el último juego.</p>
          </div>

          <div class="ma-timeline">
            <article class="ma-step"><b>1</b><span class="ma-step-icon">🧰</span><strong>Llegamos y preparamos</strong><small>Organizamos el espacio y dejamos todo listo para empezar.</small></article>
            <article class="ma-step"><b>2</b><span class="ma-step-icon">⚡</span><strong>Activamos al grupo</strong><small>Arrancamos con propuestas simples para que todos entren en clima.</small></article>
            <article class="ma-step"><b>3</b><span class="ma-step-icon">🎯</span><strong>Juegos y desafíos</strong><small>Combinamos movimiento, consignas y actividades por equipos.</small></article>
            <article class="ma-step"><b>4</b><span class="ma-step-icon">⚽</span><strong>Momento deportivo</strong><small>Sumamos propuestas con pelota, circuitos o mini competencias.</small></article>
            <article class="ma-step"><b>5</b><span class="ma-step-icon">🎉</span><strong>Cierre bien arriba</strong><small>Terminamos con una actividad final para cerrar todos juntos.</small></article>
          </div>

          <div class="ma-block-title">
            <h3>Podemos armar tu festejo con...</h3>
            <p>Elegimos y combinamos actividades según el grupo. No son paquetes cerrados.</p>
          </div>

          <div class="ma-activity-grid">
            <article class="ma-activity"><span>⚽</span><h4>Deportes</h4><p>Propuestas con pelota, mini partidos y juegos adaptados.</p></article>
            <article class="ma-activity"><span>🎯</span><h4>Desafíos</h4><p>Puntería, precisión, velocidad y consignas para superarse.</p></article>
            <article class="ma-activity"><span>🏃</span><h4>Juegos de movimiento</h4><p>Actividades dinámicas para mantener al grupo siempre activo.</p></article>
            <article class="ma-activity"><span>🤝</span><h4>Juegos por equipos</h4><p>Cooperación, estrategia y participación compartida.</p></article>
            <article class="ma-activity"><span>🏆</span><h4>Mini competencias</h4><p>Formatos breves y divertidos con desafíos entre equipos.</p></article>
            <article class="ma-activity"><span>🎉</span><h4>Recreación</h4><p>Juegos para reírse, mezclarse y disfrutar el festejo.</p></article>
          </div>

          <div class="ma-event-spotlight">
            <div>
              <small>EVENTOS MODO ACTIVO</small>
              <h3>¿Tenés un evento especial?</h3>
              <p>Contanos qué estás organizando, cuántos participantes habrá, sus edades, el lugar y cuánto querés que dure la animación. Armamos una propuesta deportiva y recreativa para ese encuentro.</p>
            </div>
            <a class="ma-event-button" target="_blank" rel="noopener" href="${waLink('Hola! 🎉 Quiero consultar una propuesta de Modo Activo para un evento. ⚡')}">🎉 Consultar por un evento</a>
          </div>
        </div>
      </section>
    `);
  }

  // Suma una consulta específica por eventos al asistente de WhatsApp.
  const chatChoices = document.querySelector('.chat-choices');
  if (chatChoices && !document.getElementById('eventQueryBtn')) {
    const eventBtn = document.createElement('button');
    eventBtn.type = 'button';
    eventBtn.id = 'eventQueryBtn';
    eventBtn.innerHTML = '🎉 Información para un evento';
    eventBtn.addEventListener('click', () => {
      window.location.href = waLink('Hola! 🎉 Quiero consultar información para un evento con Modo Activo ⚡');
    });

    const otherBtn = document.getElementById('otherQueryBtn');
    if (otherBtn) chatChoices.insertBefore(eventBtn, otherBtn);
    else chatChoices.appendChild(eventBtn);
  }

  const quickFirstTitle = document.querySelector('.quick-info-grid .quick-info-item strong');
  const quickFirstText = document.querySelector('.quick-info-grid .quick-info-item small');
  if (quickFirstTitle) quickFirstTitle.textContent = 'Cumpleaños y eventos';
  if (quickFirstText) quickFirstText.textContent = 'Juegos, deporte y desafíos para que el festejo se viva en movimiento.';

  // Cierre más fuerte con dos caminos claros.
  const finalCard = document.querySelector('.final-cta .final-card');
  if (finalCard) {
    finalCard.innerHTML = `
      <div class="final-logo">
        <img src="assets/logo-modo-activo.jpg" alt="Logo Modo Activo">
      </div>
      <div class="ma-final-copy">
        <small>CONTANOS TU IDEA ⚡</small>
        <h2>La ponemos en movimiento.</h2>
        <p>Cumpleaños o evento: contanos fecha, edades, cantidad aproximada y lugar.</p>
      </div>
      <div class="ma-final-actions">
        <a class="ma-final-primary" target="_blank" rel="noopener" href="${waLink('Hola! 🎂 Quiero organizar un cumpleaños con Modo Activo ⚡')}">🎂 Quiero organizar un cumpleaños</a>
        <a class="ma-final-secondary" target="_blank" rel="noopener" href="${waLink('Hola! 🎉 Quiero organizar un evento con Modo Activo ⚡')}">🎉 Quiero organizar un evento</a>
      </div>
    `;
  }
})();

// ===== MODO ACTIVO: CONFIGURADOR + EDADES + ESPACIO + CTA MÓVIL + CHAT GUIADO =====
(() => {
  const WHATSAPP = '5491167859172';
  const waLink = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  // Actualización dinámica de título y metadatos visibles en navegadores/buscadores que ejecutan JS.
  document.title = 'Somos Modo Activo | Animaciones para cumpleaños y eventos';
  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };
  setMeta('meta[name="description"]', 'Somos Modo Activo: animaciones deportivas y recreativas para cumpleaños y eventos. Juegos, desafíos, deporte y diversión en CABA y alrededores.');
  setMeta('meta[property="og:title"]', 'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento');
  setMeta('meta[property="og:description"]', 'Juegos, desafíos y deporte para que todos participen. Animaciones deportivas y recreativas para cumpleaños y eventos en CABA y alrededores.');
  setMeta('meta[name="twitter:title"]', 'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento');
  setMeta('meta[name="twitter:description"]', 'Juegos, desafíos y deporte para cumpleaños y eventos en CABA y alrededores.');

  // Estilos del configurador, tarjetas por edad, espacio y CTA móvil.
  if (!document.getElementById('maConversionStyles')) {
    const style = document.createElement('style');
    style.id = 'maConversionStyles';
    style.textContent = `
      .ma-planner-section{padding:88px 0;background:#0b0d0c;color:#fff;position:relative;overflow:hidden;}
      .ma-planner-section::before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;background:rgba(117,255,45,.14);filter:blur(16px);left:-170px;top:90px;}
      .ma-planner-head{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:34px;align-items:end;margin-bottom:30px;position:relative;z-index:1;}
      .ma-planner-head h2{margin:8px 0 0;color:#fff;max-width:760px;}
      .ma-planner-head h2 span{color:#75ff2d;}
      .ma-planner-head p{margin:0;color:#d5d5d5;line-height:1.7;font-weight:600;}
      .ma-planner-card{position:relative;z-index:1;background:#fff;color:#0b0d0c;border:3px solid #75ff2d;border-radius:28px;padding:28px;box-shadow:10px 10px 0 rgba(117,255,45,.32);}
      .ma-planner-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;}
      .ma-field{display:grid;gap:8px;}
      .ma-field.full{grid-column:1/-1;}
      .ma-field label,.ma-field legend{font:900 13px/1.25 Montserrat,sans-serif;text-transform:uppercase;letter-spacing:.35px;}
      .ma-field select,.ma-field input{width:100%;box-sizing:border-box;min-height:48px;border:2px solid #0b0d0c;border-radius:13px;padding:10px 12px;background:#fff;color:#0b0d0c;font:700 14px/1.3 Montserrat,sans-serif;}
      .ma-activity-checks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;border:0;padding:0;margin:0;}
      .ma-check{display:flex;align-items:center;gap:8px;border:2px solid #0b0d0c;border-radius:14px;padding:11px 12px;font:800 13px/1.2 Montserrat,sans-serif;cursor:pointer;background:#f7f7f2;}
      .ma-check input{width:17px;height:17px;min-height:0;accent-color:#75ff2d;}
      .ma-planner-submit{grid-column:1/-1;min-height:56px;border:2px solid #0b0d0c;border-radius:999px;background:#75ff2d;color:#0b0d0c;box-shadow:4px 4px 0 #0b0d0c;font:900 15px/1 Montserrat,sans-serif;cursor:pointer;margin-top:2px;}
      .ma-planner-note{grid-column:1/-1;margin:0;color:#666;font-size:12px;line-height:1.5;font-weight:600;}

      .ma-ages-space{padding:82px 0;background:#f5f6ef;color:#0b0d0c;}
      .ma-ages-head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:28px;}
      .ma-ages-head h2{margin:8px 0 0;max-width:760px;}
      .ma-ages-head h2 span{color:#56d900;}
      .ma-ages-head p{margin:0;max-width:440px;color:#666;line-height:1.65;font-weight:650;}
      .ma-age-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-bottom:48px;}
      .ma-age-card{border:3px solid #0b0d0c;border-radius:24px;padding:24px;background:#fff;box-shadow:6px 6px 0 #0b0d0c;}
      .ma-age-card:nth-child(2){background:#75ff2d;}
      .ma-age-icon{font-size:34px;}
      .ma-age-card h3{margin:14px 0 10px;font:900 25px/1 Anton,Montserrat,sans-serif;text-transform:uppercase;}
      .ma-age-card p{margin:0;color:#666;line-height:1.6;font-weight:600;}
      .ma-age-card:nth-child(2) p{color:#263020;}
      .ma-space-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
      .ma-space-card{border:2px solid #0b0d0c;border-radius:20px;padding:22px;background:#fff;}
      .ma-space-card.rain{background:#0b0d0c;color:#fff;border-color:#0b0d0c;box-shadow:5px 5px 0 #75ff2d;}
      .ma-space-card span{font-size:30px;display:block;margin-bottom:12px;}
      .ma-space-card h4{margin:0 0 8px;font:900 18px/1.2 Montserrat,sans-serif;}
      .ma-space-card p{margin:0;color:#666;line-height:1.55;font-weight:600;font-size:14px;}
      .ma-space-card.rain p{color:#d8d8d8;}

      .ma-mobile-wa{display:none;}
      .ma-chat-type-choice{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0 14px;}
      .ma-chat-type-choice button,.ma-chat-change{border:2px solid #0b0d0c;border-radius:14px;background:#75ff2d;color:#0b0d0c;padding:12px;font:900 13px/1.2 Montserrat,sans-serif;cursor:pointer;}
      .ma-chat-type-choice button:last-child{background:#0b0d0c;color:#fff;border-color:#75ff2d;}
      .ma-chat-change{width:100%;margin:0 0 10px;background:#fff;border-style:dashed;}

      @media(max-width:900px){
        .ma-planner-head,.ma-ages-head{display:grid;grid-template-columns:1fr;align-items:start;}
        .ma-age-grid,.ma-space-grid{grid-template-columns:1fr;}
      }
      @media(max-width:700px){
        .ma-planner-section,.ma-ages-space{padding:58px 0;}
        .ma-planner-card{padding:20px;border-radius:22px;box-shadow:6px 6px 0 rgba(117,255,45,.32);}
        .ma-planner-grid{grid-template-columns:1fr;gap:14px;}
        .ma-field.full,.ma-planner-submit,.ma-planner-note{grid-column:auto;}
        .ma-activity-checks{grid-template-columns:1fr 1fr;}
        .ma-mobile-wa{position:fixed;z-index:9998;left:10px;right:10px;bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;background:#0b0d0c;color:#fff;border:2px solid #75ff2d;border-radius:999px;padding:8px 8px 8px 16px;box-shadow:0 10px 30px rgba(0,0,0,.28);text-decoration:none;font:900 13px/1.1 Montserrat,sans-serif;}
        .ma-mobile-wa span:last-child{display:inline-flex;align-items:center;justify-content:center;background:#75ff2d;color:#0b0d0c;border-radius:999px;padding:11px 14px;white-space:nowrap;}
        .chat-launcher{bottom:78px !important;}
        body{padding-bottom:76px;}
        .ma-chat-type-choice{grid-template-columns:1fr;}
      }
      @media(max-width:420px){
        .ma-activity-checks{grid-template-columns:1fr;}
      }
    `;
    document.head.appendChild(style);
  }

  // Configurador "Armá tu festejo".
  const booking = document.getElementById('reservar');
  if (booking && !document.getElementById('maPlanner')) {
    booking.insertAdjacentHTML('beforebegin', `
      <section class="ma-planner-section" id="maPlanner">
        <div class="container">
          <div class="ma-planner-head">
            <div>
              <span class="eyebrow light">ARMÁ TU FESTEJO ⚡</span>
              <h2>Contanos la idea. <span>Te dejamos la consulta lista.</span></h2>
            </div>
            <p>Elegí algunos datos básicos y al final se abre WhatsApp con toda la información escrita. Después coordinamos los detalles juntos.</p>
          </div>

          <form class="ma-planner-card" id="maPlannerForm">
            <div class="ma-planner-grid">
              <div class="ma-field">
                <label for="maType">¿Qué estás organizando?</label>
                <select id="maType" required>
                  <option value="">Elegí una opción</option>
                  <option value="Cumpleaños">🎂 Cumpleaños</option>
                  <option value="Evento">🎉 Evento</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maAge">Edad del grupo</label>
                <select id="maAge" required>
                  <option value="">Elegí una franja</option>
                  <option>6 a 8 años</option>
                  <option>9 a 11 años</option>
                  <option>12 a 15 años</option>
                  <option>Edades mixtas</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maPeople">Cantidad aproximada</label>
                <select id="maPeople" required>
                  <option value="">Elegí una cantidad</option>
                  <option>Hasta 10 chicos</option>
                  <option>11 a 15 chicos</option>
                  <option>16 a 20 chicos</option>
                  <option>21 a 30 chicos</option>
                  <option>Más de 30 chicos</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maDuration">Duración estimada</label>
                <select id="maDuration" required>
                  <option value="">Elegí una duración</option>
                  <option>1 hora</option>
                  <option>1 hora y media</option>
                  <option>2 horas</option>
                  <option>A definir</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maPlace">Tipo de espacio</label>
                <select id="maPlace" required>
                  <option value="">Elegí el lugar</option>
                  <option>Salón / espacio cubierto</option>
                  <option>Patio / terraza</option>
                  <option>Club / cancha</option>
                  <option>Parque / aire libre</option>
                  <option>Otro / todavía no está definido</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maZone">Zona</label>
                <input id="maZone" type="text" maxlength="80" placeholder="Ej.: Caballito, CABA">
              </div>

              <div class="ma-field">
                <label for="maDate">Fecha (si ya la sabés)</label>
                <input id="maDate" type="date">
              </div>

              <fieldset class="ma-field full">
                <legend>¿Qué te gustaría incluir?</legend>
                <div class="ma-activity-checks">
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Deportes"> ⚽ Deportes</label>
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Desafíos"> 🎯 Desafíos</label>
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Juegos de movimiento"> 🏃 Movimiento</label>
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Juegos por equipos"> 🤝 Equipos</label>
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Mini competencias"> 🏆 Competencias</label>
                  <label class="ma-check"><input type="checkbox" name="maActivities" value="Recreación"> 🎉 Recreación</label>
                </div>
              </fieldset>

              <button class="ma-planner-submit" type="submit">💬 Enviar mi idea por WhatsApp →</button>
              <p class="ma-planner-note">No es una reserva automática: el mensaje abre una conversación para confirmar disponibilidad y armar la propuesta.</p>
            </div>
          </form>
        </div>
      </section>
    `);

    document.getElementById('maPlannerForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const type = document.getElementById('maType')?.value;
      const age = document.getElementById('maAge')?.value;
      const people = document.getElementById('maPeople')?.value;
      const duration = document.getElementById('maDuration')?.value;
      const place = document.getElementById('maPlace')?.value;
      const zone = document.getElementById('maZone')?.value.trim() || 'A confirmar';
      const rawDate = document.getElementById('maDate')?.value;
      const activities = [...document.querySelectorAll('input[name="maActivities"]:checked')].map(el => el.value);
      const date = rawDate ? new Date(`${rawDate}T12:00:00`).toLocaleDateString('es-AR') : 'A confirmar';

      if (!type || !age || !people || !duration || !place) return;

      const message = `Hola! 👋 Quiero consultar una propuesta de Modo Activo ⚡\n\n🎉 Tipo de festejo: ${type}\n👧👦 Edad: ${age}\n👥 Cantidad aproximada: ${people}\n⏱️ Duración: ${duration}\n📍 Espacio: ${place}\n🗺️ Zona: ${zone}\n📅 Fecha: ${date}\n🎯 Actividades que me interesan: ${activities.length ? activities.join(', ') : 'Quiero que me recomienden'}\n\n¿Tienen disponibilidad y qué propuesta me recomiendan?`;
      window.location.href = waLink(message);
    });
  }

  // Tarjetas por edades + requisitos de espacio + lluvia.
  const planner = document.getElementById('maPlanner');
  if (planner && !document.getElementById('maAgesSpace')) {
    planner.insertAdjacentHTML('beforebegin', `
      <section class="ma-ages-space" id="maAgesSpace">
        <div class="container">
          <div class="ma-ages-head">
            <div>
              <span class="eyebrow">ACTIVIDADES SEGÚN LA EDAD</span>
              <h2>La misma energía. <span>Distinta dinámica.</span></h2>
            </div>
            <p>Adaptamos consignas, tiempos, dificultad y tipo de desafío para que la propuesta tenga sentido para cada grupo.</p>
          </div>

          <div class="ma-age-grid">
            <article class="ma-age-card"><div class="ma-age-icon">🟢</div><h3>6 a 8 años</h3><p>Más juego, movimiento, consignas simples, relevos y actividades cortas para mantener la participación.</p></article>
            <article class="ma-age-card"><div class="ma-age-icon">⚡</div><h3>9 a 11 años</h3><p>Sumamos desafíos, juegos por equipos, puntería, circuitos y propuestas deportivas con mayor autonomía.</p></article>
            <article class="ma-age-card"><div class="ma-age-icon">🏆</div><h3>12 a 15 años</h3><p>Más estrategia, deportes, mini competencias y desafíos que permitan jugar, decidir y superarse en grupo.</p></article>
          </div>

          <div class="ma-block-title">
            <h3>¿Qué necesitamos del lugar?</h3>
            <p>No hace falta un espacio perfecto. Con algunos datos podemos adaptar la dinámica.</p>
          </div>

          <div class="ma-space-grid">
            <article class="ma-space-card"><span>🏠</span><h4>Distintos espacios</h4><p>Podemos trabajar en salones, patios, terrazas, clubes, canchas o espacios al aire libre, según la propuesta.</p></article>
            <article class="ma-space-card"><span>📐</span><h4>Lo adaptamos</h4><p>Antes del festejo nos contás cómo es el lugar y organizamos juegos acordes al espacio disponible.</p></article>
            <article class="ma-space-card rain"><span>🌧️</span><h4>Plan B por lluvia</h4><p>Si es al aire libre, coordinamos previamente una alternativa cubierta o la posibilidad de reprogramar según el caso.</p></article>
          </div>
        </div>
      </section>
    `);
  }

  // CTA fijo, pensado especialmente para celular.
  if (!document.getElementById('maMobileWa')) {
    const mobileWa = document.createElement('a');
    mobileWa.id = 'maMobileWa';
    mobileWa.className = 'ma-mobile-wa';
    mobileWa.href = '#maPlanner';
    mobileWa.innerHTML = '<span>⚡ ¿Organizando un festejo?</span><span>Consultar</span>';
    mobileWa.addEventListener('click', e => {
      const target = document.getElementById('maPlanner');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
    document.body.appendChild(mobileWa);
  }

  // El asistente arranca preguntando si es cumpleaños o evento.
  const queryMenu = document.getElementById('queryMenu');
  const chatChoices = queryMenu?.querySelector('.chat-choices');
  const introBubble = queryMenu?.querySelector('.bubble.bot p');
  if (queryMenu && chatChoices && !document.getElementById('maChatTypeChoice')) {
    if (introBubble) introBubble.textContent = '👋⚡ ¡Hola! ¿Estás organizando un cumpleaños o un evento?';

    const chooser = document.createElement('div');
    chooser.id = 'maChatTypeChoice';
    chooser.className = 'ma-chat-type-choice';
    chooser.innerHTML = `
      <button type="button" data-ma-chat-type="cumpleaños">🎂 Un cumpleaños</button>
      <button type="button" data-ma-chat-type="evento">🎉 Un evento</button>
    `;
    chatChoices.before(chooser);
    chatChoices.hidden = true;

    const changeBtn = document.createElement('button');
    changeBtn.type = 'button';
    changeBtn.className = 'ma-chat-change';
    changeBtn.textContent = '← Cambiar tipo de festejo';
    chatChoices.prepend(changeBtn);

    const setChatMode = mode => {
      const isEvent = mode === 'evento';
      chooser.hidden = true;
      chatChoices.hidden = false;
      if (introBubble) introBubble.textContent = isEvent
        ? '🎉 Perfecto. ¿Qué querés consultar sobre tu evento?'
        : '🎂 Perfecto. ¿Qué querés consultar sobre el cumpleaños?';

      const buttons = [...chatChoices.querySelectorAll('button[data-wa-message]')];
      buttons.forEach(btn => {
        const text = btn.textContent.trim();
        if (/Conocer la propuesta/i.test(text)) {
          btn.dataset.waMessage = `Hola! 👋 Quiero conocer la propuesta de Modo Activo para ${isEvent ? 'un evento' : 'un cumpleaños'} ⚡`;
        } else if (/Información para un cumple/i.test(text)) {
          btn.textContent = isEvent ? '🎉 Información para el evento' : '🎂 Información para el cumple';
          btn.dataset.waMessage = `Hola! ${isEvent ? '🎉' : '🎂'} Quiero consultar información para ${isEvent ? 'un evento' : 'un cumpleaños'} con Modo Activo ⚡`;
        } else if (/Juegos y actividades/i.test(text)) {
          btn.dataset.waMessage = `Hola! 🎯 Quiero saber qué juegos y actividades realizan para ${isEvent ? 'eventos' : 'cumpleaños'} en Modo Activo ⚡`;
        } else if (/Duración/i.test(text)) {
          btn.dataset.waMessage = `Hola! ⏱️ Quiero consultar cuánto puede durar la animación de ${isEvent ? 'un evento' : 'un cumpleaños'} con Modo Activo ⚡`;
        } else if (/Pedir presupuesto/i.test(text)) {
          btn.dataset.waMessage = `Hola! 💰 Quiero pedir un presupuesto para ${isEvent ? 'un evento' : 'un cumpleaños'} con Modo Activo ⚡`;
        } else if (/Consultar disponibilidad/i.test(text)) {
          btn.dataset.waMessage = `Hola! 📅 Quiero consultar disponibilidad para ${isEvent ? 'un evento' : 'un cumpleaños'} con Modo Activo ⚡`;
        } else if (/Reservar una fecha/i.test(text)) {
          btn.dataset.waMessage = `Hola! 🎉 Quiero reservar una fecha para ${isEvent ? 'un evento' : 'un cumpleaños'} con Modo Activo ⚡`;
        }
      });

      const eventQueryBtn = document.getElementById('eventQueryBtn');
      if (eventQueryBtn) eventQueryBtn.hidden = true;
    };

    chooser.querySelectorAll('[data-ma-chat-type]').forEach(btn => {
      btn.addEventListener('click', () => setChatMode(btn.dataset.maChatType));
    });

    changeBtn.addEventListener('click', () => {
      chatChoices.hidden = true;
      chooser.hidden = false;
      if (introBubble) introBubble.textContent = '👋⚡ ¿Estás organizando un cumpleaños o un evento?';
    });
  }
})();
