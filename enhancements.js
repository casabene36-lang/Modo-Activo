// ===== MODO ACTIVO: CONFIGURADOR + EDADES + ESPACIO + CTA MÓVIL + CHAT GUIADO =====
(() => {
  'use strict';

  const WHATSAPP = '5491167859172';
  const waLink = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  // ===== METADATOS =====
  document.title = 'Somos Modo Activo | Animaciones para cumpleaños y eventos';

  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };

  setMeta(
    'meta[name="description"]',
    'Somos Modo Activo: animaciones deportivas y recreativas para cumpleaños y eventos. Juegos, desafíos, deporte y diversión en CABA y alrededores.'
  );
  setMeta('meta[property="og:title"]', 'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento');
  setMeta(
    'meta[property="og:description"]',
    'Juegos, desafíos y deporte para que todos participen. Animaciones deportivas y recreativas para cumpleaños y eventos en CABA y alrededores.'
  );
  setMeta('meta[name="twitter:title"]', 'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento');
  setMeta(
    'meta[name="twitter:description"]',
    'Juegos, desafíos y deporte para cumpleaños y eventos en CABA y alrededores.'
  );

  // ===== ESTILOS =====
  if (!document.getElementById('maConversionStyles')) {
    const style = document.createElement('style');
    style.id = 'maConversionStyles';
    style.textContent = `
      .ma-ages-space{padding:82px 0;background:#f5f6ef;color:#0b0d0c;scroll-margin-top:90px;}
      .ma-ages-head{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:30px;align-items:end;margin-bottom:28px;}
      .ma-ages-head h2{margin:8px 0 0;max-width:760px;}
      .ma-ages-head h2 span{color:#56d900;}
      .ma-ages-head p{margin:0;color:#666;line-height:1.65;font-weight:650;}
      .ma-age-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-bottom:48px;}
      .ma-age-card{border:3px solid #0b0d0c;border-radius:24px;padding:24px;background:#fff;box-shadow:6px 6px 0 #0b0d0c;}
      .ma-age-card:nth-child(2){background:#75ff2d;}
      .ma-age-icon{display:block;font-size:34px;}
      .ma-age-card h3{margin:14px 0 10px;font:900 25px/1 Anton,Montserrat,sans-serif;text-transform:uppercase;}
      .ma-age-card p{margin:0;color:#666;line-height:1.6;font-weight:600;}
      .ma-age-card:nth-child(2) p{color:#263020;}
      .ma-space-title{margin:0 0 18px;}
      .ma-space-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
      .ma-space-card{border:2px solid #0b0d0c;border-radius:20px;padding:22px;background:#fff;}
      .ma-space-card.rain{background:#0b0d0c;color:#fff;box-shadow:5px 5px 0 #75ff2d;}
      .ma-space-card > span{display:block;margin-bottom:12px;font-size:30px;}
      .ma-space-card h4{margin:0 0 8px;font:900 18px/1.2 Montserrat,sans-serif;}
      .ma-space-card p{margin:0;color:#666;line-height:1.55;font-weight:600;font-size:14px;}
      .ma-space-card.rain p{color:#d8d8d8;}

      .ma-planner-section{padding:88px 0;background:#0b0d0c;color:#fff;position:relative;overflow:hidden;scroll-margin-top:90px;}
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
      .ma-planner-submit{grid-column:1/-1;min-height:56px;border:2px solid #0b0d0c;border-radius:999px;background:#75ff2d;color:#0b0d0c;box-shadow:4px 4px 0 #0b0d0c;font:900 15px/1 Montserrat,sans-serif;cursor:pointer;}
      .ma-planner-note{grid-column:1/-1;margin:0;color:#666;font-size:12px;line-height:1.5;font-weight:600;}
      .ma-mobile-wa{display:none;}
      .ma-chat-type-choice{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0 14px;}
      .ma-chat-type-choice button{border:2px solid #0b0d0c;border-radius:14px;background:#75ff2d;color:#0b0d0c;padding:12px;font:900 13px/1.2 Montserrat,sans-serif;cursor:pointer;}
      .ma-chat-type-choice button:last-child{background:#0b0d0c;color:#fff;border-color:#75ff2d;}
      .ma-chat-selected{margin:0 0 12px;font:800 12px/1.4 Montserrat,sans-serif;opacity:.75;}

      @media(max-width:900px){
        .ma-ages-head,.ma-planner-head{grid-template-columns:1fr;align-items:start;}
        .ma-age-grid,.ma-space-grid{grid-template-columns:1fr;}
      }

      @media(max-width:700px){
        .ma-ages-space,.ma-planner-section{padding:58px 0;}
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

      @media(max-width:420px){.ma-activity-checks{grid-template-columns:1fr;}}
    `;
    document.head.appendChild(style);
  }

  // ===== EDADES + ESPACIOS =====
  const booking = document.getElementById('reservar');

  if (booking && !document.getElementById('maAgesSpace')) {
    booking.insertAdjacentHTML('beforebegin', `
      <section class="ma-ages-space" id="maAgesSpace">
        <div class="container">
          <div class="ma-ages-head">
            <div>
              <span class="eyebrow">CUMPLEAÑOS Y EVENTOS</span>
              <h2>Una propuesta que cambia <span>según la edad.</span></h2>
            </div>
            <p>No hacemos una animación igual para todos. Adaptamos el ritmo, los desafíos y los juegos al grupo.</p>
          </div>

          <div class="ma-age-grid">
            <article class="ma-age-card"><span class="ma-age-icon">🎈</span><h3>6 a 8 años</h3><p>Juegos simples, dinámicos y visuales, con consignas cortas, movimiento constante y mucha participación.</p></article>
            <article class="ma-age-card"><span class="ma-age-icon">⚡</span><h3>9 a 11 años</h3><p>Desafíos por equipos, mini deportes, relevos y juegos donde aparecen estrategia, cooperación y competencia cuidada.</p></article>
            <article class="ma-age-card"><span class="ma-age-icon">🏆</span><h3>12 a 15 años</h3><p>Propuestas con mayor desafío, deportes, competencias, objetivos por equipos y actividades pensadas para adolescentes.</p></article>
          </div>

          <h3 class="ma-space-title">¿Qué necesitamos del lugar?</h3>
          <div class="ma-space-grid">
            <article class="ma-space-card"><span>📍</span><h4>Nos adaptamos al espacio</h4><p>Puede ser salón, patio, club, parque o espacio abierto. Ajustamos la dinámica al lugar disponible.</p></article>
            <article class="ma-space-card"><span>🏃</span><h4>Organizamos la propuesta</h4><p>La cantidad de participantes, las edades y el espacio nos ayudan a elegir los juegos y deportes más adecuados.</p></article>
            <article class="ma-space-card rain"><span>🌧️</span><h4>Plan B por lluvia</h4><p>Si es al aire libre y no hay un espacio cubierto, coordinamos previamente si corresponde adaptar, suspender o reprogramar.</p></article>
          </div>
        </div>
      </section>
    `);
  }

  // ===== CONFIGURADOR =====
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
                <label for="maAge">Edad o rango de edad</label>
                <select id="maAge" required>
                  <option value="">Elegí una opción</option>
                  <option value="6 a 8 años">6 a 8 años</option>
                  <option value="9 a 11 años">9 a 11 años</option>
                  <option value="12 a 15 años">12 a 15 años</option>
                  <option value="Edades mixtas">Edades mixtas</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maKids">Cantidad aproximada de chicos</label>
                <input id="maKids" type="number" min="1" max="200" inputmode="numeric" placeholder="Ej.: 20" required>
              </div>

              <div class="ma-field">
                <label for="maDuration">Duración aproximada</label>
                <select id="maDuration" required>
                  <option value="">Elegí una opción</option>
                  <option value="1 hora">1 hora</option>
                  <option value="1 hora y 30 minutos">1 hora y 30 minutos</option>
                  <option value="2 horas">2 horas</option>
                  <option value="A definir">A definir</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maSpace">Tipo de espacio</label>
                <select id="maSpace" required>
                  <option value="">Elegí una opción</option>
                  <option value="Salón">Salón</option>
                  <option value="Patio">Patio</option>
                  <option value="Club">Club</option>
                  <option value="Parque / aire libre">Parque / aire libre</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div class="ma-field">
                <label for="maZone">Zona / barrio</label>
                <input id="maZone" type="text" maxlength="80" placeholder="Ej.: Caballito">
              </div>

              <div class="ma-field full">
                <label for="maDate">Fecha del festejo</label>
                <input id="maDate" type="date">
              </div>

              <fieldset class="ma-field full">
                <legend>¿Qué les gustaría incluir?</legend>
                <div class="ma-activity-checks">
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="Juegos recreativos"> Juegos recreativos</label>
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="Deportes"> Deportes</label>
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="Desafíos por equipos"> Desafíos por equipos</label>
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="Circuitos y relevos"> Circuitos y relevos</label>
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="Actividades con pelota"> Actividades con pelota</label>
                  <label class="ma-check"><input type="checkbox" name="maActivity" value="A definir"> A definir</label>
                </div>
              </fieldset>

              <button class="ma-planner-submit" type="submit">💬 Preparar consulta por WhatsApp</button>
              <p class="ma-planner-note">Enviar esta consulta no confirma una reserva. Primero revisamos disponibilidad y armamos la propuesta.</p>
            </div>
          </form>
        </div>
      </section>
    `);
  }

  const form = document.getElementById('maPlannerForm');

  if (form && !form.dataset.maReady) {
    form.dataset.maReady = 'true';

    form.addEventListener('submit', event => {
      event.preventDefault();

      const type = document.getElementById('maType')?.value || 'Festejo';
      const age = document.getElementById('maAge')?.value || 'A definir';
      const kids = document.getElementById('maKids')?.value || 'A definir';
      const duration = document.getElementById('maDuration')?.value || 'A definir';
      const space = document.getElementById('maSpace')?.value || 'A definir';
      const zone = document.getElementById('maZone')?.value.trim() || 'A definir';
      const dateRaw = document.getElementById('maDate')?.value || '';
      const activities = [...document.querySelectorAll('input[name="maActivity"]:checked')].map(input => input.value);

      let date = 'A definir';
      if (dateRaw) {
        const [year, month, day] = dateRaw.split('-');
        date = `${day}/${month}/${year}`;
      }

      const message = [
        'Hola! 👋 Quiero consultar una propuesta con Somos Modo Activo ⚡',
        '',
        `🎉 Tipo de festejo: ${type}`,
        `👧👦 Edad: ${age}`,
        `👥 Cantidad aproximada: ${kids}`,
        `⏱️ Duración: ${duration}`,
        `📍 Espacio: ${space}`,
        `🗺️ Zona / barrio: ${zone}`,
        `📅 Fecha: ${date}`,
        `⚽ Preferencias: ${activities.length ? activities.join(', ') : 'A definir'}`,
        '',
        '¿Tienen disponibilidad y me pueden contar la propuesta?'
      ].join('\n');

      window.location.href = waLink(message);
    });
  }

  // ===== CTA MÓVIL =====
  if (!document.getElementById('maMobileWa')) {
    document.body.insertAdjacentHTML('beforeend', `
      <a class="ma-mobile-wa" id="maMobileWa" href="#maPlanner" aria-label="Consultar disponibilidad para mi fecha">
        <span>💬 Consultar mi fecha</span>
        <span>Ir al formulario →</span>
      </a>
    `);
  }

  // ===== ASISTENTE: CUMPLEAÑOS O EVENTO =====
  const queryMenu = document.getElementById('queryMenu');
  const choices = queryMenu?.querySelector('.chat-choices');
  const botText = queryMenu?.querySelector('.bubble.bot p');

  if (queryMenu && choices && !document.getElementById('maChatTypeChoice')) {
    if (botText) botText.textContent = '👋⚡ ¡Hola! ¿Tu consulta es por un cumpleaños o por otro evento?';

    choices.insertAdjacentHTML('beforebegin', `
      <div class="ma-chat-type-choice" id="maChatTypeChoice">
        <button type="button" data-ma-type="Cumpleaños">🎂 Cumpleaños</button>
        <button type="button" data-ma-type="Evento">🎉 Evento</button>
      </div>
      <p class="ma-chat-selected" id="maChatSelected">Elegí una opción para personalizar la consulta.</p>
    `);

    const selectedLabel = document.getElementById('maChatSelected');

    document.querySelectorAll('#maChatTypeChoice [data-ma-type]').forEach(button => {
      button.addEventListener('click', () => {
        const type = button.dataset.maType;
        if (selectedLabel) selectedLabel.textContent = `Consulta seleccionada: ${type}`;

        choices.querySelectorAll('[data-wa-message]').forEach(option => {
          const label = option.textContent.trim().replace(/\s+/g, ' ');
          option.dataset.waMessage = `Hola! 👋 Quiero consultar sobre ${label.toLowerCase()} para un ${type.toLowerCase()} con Modo Activo ⚡`;
        });
      });
    });
  }

  // ===== INFO RÁPIDA =====
  const quickGrid = document.querySelector('.quick-info-grid');
  if (quickGrid) {
    const first = quickGrid.querySelector('.quick-info-item');
    if (first) {
      first.href = '#propuesta';
      const title = first.querySelector('strong');
      const text = first.querySelector('small');
      if (title) title.textContent = 'Festejos en movimiento';
      if (text) text.textContent = 'Juegos, deporte y desafíos para cumpleaños y eventos donde todos participan.';
    }
  }
})();

