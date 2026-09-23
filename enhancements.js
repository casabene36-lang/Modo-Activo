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

  setMeta(
    'meta[name="description"]',
    'Somos Modo Activo: animaciones deportivas y recreativas para cumpleaños y eventos. Juegos, desafíos, deporte y diversión en CABA y alrededores.'
  );

  setMeta(
    'meta[property="og:title"]',
    'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento'
  );

  setMeta(
    'meta[property="og:description"]',
    'Juegos, desafíos y deporte para que todos participen. Animaciones deportivas y recreativas para cumpleaños y eventos en CABA y alrededores.'
  );

  setMeta(
    'meta[name="twitter:title"]',
    'Somos Modo Activo ⚡ | Cumpleaños y eventos en movimiento'
  );

  setMeta(
    'meta[name="twitter:description"]',
    'Juegos, desafíos y deporte para cumpleaños y eventos en CABA y alrededores.'
  );

  // ===== ESTILOS =====
  if (!document.getElementById('maConversionStyles')) {
    const style = document.createElement('style');
    style.id = 'maConversionStyles';

    style.textContent = `
      .ma-planner-section{
        padding:88px 0;
        background:#0b0d0c;
        color:#fff;
        position:relative;
        overflow:hidden;
      }

      .ma-planner-section::before{
        content:"";
        position:absolute;
        width:420px;
        height:420px;
        border-radius:50%;
        background:rgba(117,255,45,.14);
        filter:blur(16px);
        left:-170px;
        top:90px;
      }

      .ma-planner-head{
        display:grid;
        grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);
        gap:34px;
        align-items:end;
        margin-bottom:30px;
        position:relative;
        z-index:1;
      }

      .ma-planner-head h2{
        margin:8px 0 0;
        color:#fff;
        max-width:760px;
      }

      .ma-planner-head h2 span{
        color:#75ff2d;
      }

      .ma-planner-head p{
        margin:0;
        color:#d5d5d5;
        line-height:1.7;
        font-weight:600;
      }

      .ma-planner-card{
        position:relative;
        z-index:1;
        background:#fff;
        color:#0b0d0c;
        border:3px solid #75ff2d;
        border-radius:28px;
        padding:28px;
        box-shadow:10px 10px 0 rgba(117,255,45,.32);
      }

      .ma-planner-grid{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:18px;
      }

      .ma-field{
        display:grid;
        gap:8px;
      }

      .ma-field.full{
        grid-column:1/-1;
      }

      .ma-field label,
      .ma-field legend{
        font:900 13px/1.25 Montserrat,sans-serif;
        text-transform:uppercase;
        letter-spacing:.35px;
      }

      .ma-field select,
      .ma-field input{
        width:100%;
        box-sizing:border-box;
        min-height:48px;
        border:2px solid #0b0d0c;
        border-radius:13px;
        padding:10px 12px;
        background:#fff;
        color:#0b0d0c;
        font:700 14px/1.3 Montserrat,sans-serif;
      }

      .ma-activity-checks{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:9px;
        border:0;
        padding:0;
        margin:0;
      }

      .ma-check{
        display:flex;
        align-items:center;
        gap:8px;
        border:2px solid #0b0d0c;
        border-radius:14px;
        padding:11px 12px;
        font:800 13px/1.2 Montserrat,sans-serif;
        cursor:pointer;
        background:#f7f7f2;
      }

      .ma-check input{
        width:17px;
        height:17px;
        min-height:0;
        accent-color:#75ff2d;
      }

      .ma-planner-submit{
        grid-column:1/-1;
        min-height:56px;
        border:2px solid #0b0d0c;
        border-radius:999px;
        background:#75ff2d;
        color:#0b0d0c;
        box-shadow:4px 4px 0 #0b0d0c;
        font:900 15px/1 Montserrat,sans-serif;
        cursor:pointer;
        margin-top:2px;
      }

      .ma-planner-note{
        grid-column:1/-1;
        margin:0;
        color:#666;
        font-size:12px;
        line-height:1.5;
        font-weight:600;
      }

      .ma-ages-space{
        padding:82px 0;
        background:#f5f6ef;
        color:#0b0d0c;
      }

      .ma-ages-head{
        display:flex;
        justify-content:space-between;
        align-items:end;
        gap:28px;
        margin-bottom:28px;
      }

      .ma-ages-head h2{
        margin:8px 0 0;
        max-width:760px;
      }

      .ma-ages-head h2 span{
        color:#56d900;
      }

      .ma-ages-head p{
        margin:0;
        max-width:440px;
        color:#666;
        line-height:1.65;
        font-weight:650;
      }

      .ma-age-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:18px;
        margin-bottom:48px;
      }

      .ma-age-card{
        border:3px solid #0b0d0c;
        border-radius:24px;
        padding:24px;
        background:#fff;
        box-shadow:6px 6px 0 #0b0d0c;
      }

      .ma-age-card:nth-child(2){
        background:#75ff2d;
      }

      .ma-age-icon{
        font-size:34px;
      }

      .ma-age-card h3{
        margin:14px 0 10px;
        font:900 25px/1 Anton,Montserrat,sans-serif;
        text-transform:uppercase;
      }

      .ma-age-card p{
        margin:0;
        color:#666;
        line-height:1.6;
        font-weight:600;
      }

      .ma-age-card:nth-child(2) p{
        color:#263020;
      }

      .ma-space-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:16px;
      }

      .ma-space-card{
        border:2px solid #0b0d0c;
        border-radius:20px;
        padding:22px;
        background:#fff;
      }

      .ma-space-card.rain{
        background:#0b0d0c;
        color:#fff;
        border-color:#0b0d0c;
        box-shadow:5px 5px 0 #75ff2d;
      }

      .ma-space-card span{
        font-size:30px;
        display:block;
        margin-bottom:12px;
      }

      .ma-space-card h4{
        margin:0 0 8px;
        font:900 18px/1.2 Montserrat,sans-serif;
      }

      .ma-space-card p{
        margin:0;
        color:#666;
        line-height:1.55;
        font-weight:600;
        font-size:14px;
      }

      .ma-space-card.rain p{
        color:#d8d8d8;
      }

      .ma-mobile-wa{
        display:none;
      }

      .ma-chat-type-choice{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
        margin:12px 0 14px;
      }

      .ma-chat-type-choice button,
      .ma-chat-change{
        border:2px solid #0b0d0c;
        border-radius:14px;
        background:#75ff2d;
        color:#0b0d0c;
        padding:12px;
        font:900 13px/1.2 Montserrat,sans-serif;
        cursor:pointer;
      }

      .ma-chat-type-choice button:last-child{
        background:#0b0d0c;
        color:#fff;
        border-color:#75ff2d;
      }

      .ma-chat-change{
        width:100%;
        margin:0 0 10px;
        background:#fff;
        border-style:dashed;
      }

      @media(max-width:900px){
        .ma-planner-head,
        .ma-ages-head{
          display:grid;
          grid-template-columns:1fr;
          align-items:start;
        }

        .ma-age-grid,
        .ma-space-grid{
          grid-template-columns:1fr;
        }
      }

      @media(max-width:700px){
        .ma-planner-section,
        .ma-ages-space{
          padding:58px 0;
        }

        .ma-planner-card{
          padding:20px;
          border-radius:22px;
          box-shadow:6px 6px 0 rgba(117,255,45,.32);
        }

        .ma-planner-grid{
          grid-template-columns:1fr;
          gap:14px;
        }

        .ma-field.full,
        .ma-planner-submit,
        .ma-planner-note{
          grid-column:auto;
        }

        .ma-activity-checks{
          grid-template-columns:1fr 1fr;
        }

        .ma-mobile-wa{
          position:fixed;
          z-index:9998;
          left:10px;
          right:10px;
          bottom:10px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          background:#0b0d0c;
          color:#fff;
          border:2px solid #75ff2d;
          border-radius:999px;
          padding:8px 8px 8px 16px;
          box-shadow:0 10px 30px rgba(0,0,0,.28);
          text-decoration:none;
          font:900 13px/1.1 Montserrat,sans-serif;
        }

        .ma-mobile-wa span:last-child{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          background:#75ff2d;
          color:#0b0d0c;
          border-radius:999px;
          padding:11px 14px;
          white-space:nowrap;
        }

        .chat-launcher{
          bottom:78px !important;
        }

        body{
          padding-bottom:76px;
        }

        .ma-chat-type-choice{
          grid-template-columns:1fr;
        }
      }

      @media(max-width:420px){
        .ma-activity-checks{
          grid-template-columns:1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ===== CONFIGURADOR "ARMÁ TU FESTEJO" =====
  const booking = document.getElementById('reservar');

  if (booking && !document.getElementById('maPlanner')) {
    booking.insertAdjacentHTML('beforebegin', `
      <section class="ma-planner-section" id="maPlanner">
        <div class="container">

          <div class="ma-planner-head">
            <div>
              <span class="eyebrow light">ARMÁ TU FESTEJO ⚡</span>
              <h2>
                Contanos la idea.
                <span>Te dejamos la consulta lista.</span>
              </h2>
            </div>

            <p>
              Elegí algunos datos básicos y al final se abre WhatsApp
              con toda la información escrita.
              Después coordinamos los detalles juntos.
            </p>
          </div>

          <form class="ma-planner-card" id="maPlannerForm">
            <div class="ma-planner-grid">

              <div class="ma-field">
                <label for="maType">¿Qué estás organizando?</label>
                <select id="maType" required>
                  <option value="">Elegí una opción</option>
                  <option value="Cumpleaños">🎂
