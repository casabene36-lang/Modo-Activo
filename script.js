const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  '.service, .gallery-card, .check-list > div, .steps article, details, .parent-card'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));


// ===== ASISTENTE AUTOMÁTICO DE CONSULTAS =====
(() => {
  const WHATSAPP = "5491167859172";

  const launcher = document.getElementById("chatLauncher");
  const overlay = document.getElementById("chatOverlay");
  const box = document.getElementById("chatBox");
  const close = document.getElementById("chatClose");
  const startChoices = document.getElementById("startChoices");
  const stepForm = document.getElementById("chatStepForm");
  const questionBubble = document.getElementById("questionBubble");
  const answerField = document.getElementById("answerField");
  const backBtn = document.getElementById("chatBack");
  const summary = document.getElementById("chatSummary");
  const summaryCard = document.getElementById("summaryCard");
  const sendBtn = document.getElementById("sendToWhatsApp");
  const restartBtn = document.getElementById("restartChat");

  const flows = {
    cumple: [
      { key:"fecha", q:"📅 ¿Qué fecha sería el cumple?", type:"date", label:"Fecha" },
      { key:"edad", q:"👦👧 ¿Qué edad cumplen o qué edades tiene el grupo?", type:"text", label:"Edad", placeholder:"Ej: 8 años" },
      { key:"cantidad", q:"👥 ¿Cuántos chicos aproximadamente participarían?", type:"number", label:"Cantidad", placeholder:"Ej: 20" },
      { key:"zona", q:"📍 ¿En qué zona o lugar sería el festejo?", type:"text", label:"Zona / lugar", placeholder:"Ej: Mataderos, salón, club..." }
    ],
    individual: [
      { key:"edad", q:"👤 ¿Qué edad tiene la persona que quiere venir a jugar?", type:"text", label:"Edad", placeholder:"Ej: 10 años" },
      { key:"dia", q:"📅 ¿Qué día o fecha te interesa?", type:"text", label:"Día / fecha", placeholder:"Ej: sábado por la tarde" },
      { key:"zona", q:"📍 ¿De qué zona sos?", type:"text", label:"Zona", placeholder:"Ej: Mataderos" }
    ],
    otra: [
      { key:"consulta", q:"💬 Contanos tu consulta.", type:"textarea", label:"Consulta", placeholder:"Escribí acá..." }
    ]
  };

  const titles = {
    cumple: "Festejar un cumple",
    individual: "Venir a jugar de forma individual",
    otra: "Otra consulta"
  };

  let flowName = null;
  let step = 0;
  let answers = {};

  function openChat(){
    box.classList.add("open");
    box.setAttribute("aria-hidden","false");
    overlay.hidden = false;
  }

  function closeChat(){
    box.classList.remove("open");
    box.setAttribute("aria-hidden","true");
    overlay.hidden = true;
  }

  function resetChat(){
    flowName = null;
    step = 0;
    answers = {};
    startChoices.hidden = false;
    stepForm.hidden = true;
    summary.hidden = true;
  }

  function renderStep(){
    const item = flows[flowName][step];
    questionBubble.innerHTML = `<p>${item.q}</p>`;

    let field = "";
    if(item.type === "textarea"){
      field = `<label>${item.label}<textarea name="answer" rows="4" placeholder="${item.placeholder || ""}" required></textarea></label>`;
    } else {
      field = `<label>${item.label}<input name="answer" type="${item.type}" placeholder="${item.placeholder || ""}" ${item.type==="number" ? 'min="1"' : ''} required></label>`;
    }
    answerField.innerHTML = field;
    const input = answerField.querySelector("input,textarea");
    if (answers[item.key]) input.value = answers[item.key];
    setTimeout(() => input?.focus(), 100);
  }

  function startFlow(name){
    flowName = name;
    step = 0;
    answers = {};
    startChoices.hidden = true;
    summary.hidden = true;
    stepForm.hidden = false;
    renderStep();
  }

  function buildMessage(){
    if(flowName === "cumple"){
      return `Hola! Quiero consultar por un cumple 🎉

📅 Fecha: ${answers.fecha}
👦👧 Edad: ${answers.edad}
👥 Cantidad aproximada: ${answers.cantidad} chicos
📍 Zona / lugar: ${answers.zona}

¿Me cuentan disponibilidad y propuesta?`;
    }
    if(flowName === "individual"){
      return `Hola! Quiero consultar para venir a jugar de forma individual 🏃

👤 Edad: ${answers.edad}
📅 Día / fecha: ${answers.dia}
📍 Zona: ${answers.zona}

¿Me cuentan cómo funciona?`;
    }
    return `Hola! Tengo otra consulta sobre Modo Activo 💬

${answers.consulta}`;
  }

  function showSummary(){
    stepForm.hidden = true;
    summary.hidden = false;

    const lines = [];
    lines.push(`<strong>${titles[flowName]}</strong>`);
    for(const item of flows[flowName]){
      lines.push(`<div>${item.label}: ${answers[item.key]}</div>`);
    }
    summaryCard.innerHTML = lines.join("");

    const message = buildMessage();
    sendBtn.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  launcher?.addEventListener("click", openChat);
  close?.addEventListener("click", closeChat);
  overlay?.addEventListener("click", closeChat);

  document.querySelectorAll("[data-start]").forEach(btn => {
    btn.addEventListener("click", () => startFlow(btn.dataset.start));
  });

  stepForm?.addEventListener("submit", e => {
    e.preventDefault();
    const item = flows[flowName][step];
    const input = answerField.querySelector("[name='answer']");
    const value = input.value.trim();
    if(!value) return;

    answers[item.key] = value;

    if(step < flows[flowName].length - 1){
      step++;
      renderStep();
    } else {
      showSummary();
    }
  });

  backBtn?.addEventListener("click", () => {
    if(step > 0){
      step--;
      renderStep();
    } else {
      resetChat();
    }
  });

  restartBtn?.addEventListener("click", resetChat);
})();


// ===== PANEL INFO RÁPIDA =====
(() => {
  const infoBtn = document.getElementById("menuBtn");
  const panel = document.getElementById("quickInfoPanel");
  const closeBtn = document.getElementById("quickInfoClose");
  const consultBtn = document.getElementById("quickInfoConsult");

  if(!infoBtn || !panel) return;

  function openPanel(){
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add("show"));
    infoBtn.setAttribute("aria-expanded","true");
  }

  function closePanel(){
    panel.classList.remove("show");
    infoBtn.setAttribute("aria-expanded","false");
    setTimeout(() => { panel.hidden = true; }, 180);
  }

  infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if(panel.hidden || !panel.classList.contains("show")) openPanel();
    else closePanel();
  }, true);

  closeBtn?.addEventListener("click", closePanel);

  panel.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => closePanel());
  });

  consultBtn?.addEventListener("click", () => {
    closePanel();
    const launcher = document.getElementById("chatLauncher");
    if(launcher) launcher.click();
  });

  document.addEventListener("click", (e) => {
    if(!panel.hidden && !panel.contains(e.target) && !infoBtn.contains(e.target)){
      closePanel();
    }
  });
})();
