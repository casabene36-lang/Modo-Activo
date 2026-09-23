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
