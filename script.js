/* ============================================================
   QUESTIONNAIRE — La Quête des Guildes — Bitcoin&Nous
   ============================================================ */

/* ---------- GUILDES (3 profils) ---------- */
const GUILDES = {
  eveilles: {
    nom: 'la Guilde des Éveillés',
    embleme: '🌒',
    texte:
      'Tu sens que quelque chose cloche dans le monde actuel. Les discours officiels ne suffisent plus, ' +
      'les repères s\'effacent, mais tout n\'est pas encore clair.\n\n' +
      'Ce n\'est pas une faiblesse. C\'est le début de la quête.\n\n' +
      'Ta force : tu n\'es plus totalement endormi.\n' +
      'Ton risque : rester dans le brouillard sans passer à l\'action.\n' +
      'Ta prochaine quête : comprendre les règles du jeu pour ne plus les subir.',
    bouton: 'Recevoir ma carte de départ',
  },
  gardiens: {
    nom: 'la Guilde des Gardiens',
    embleme: '🛡',
    texte:
      'Tu as compris que la souveraineté n\'est pas une idée abstraite. C\'est une responsabilité concrète : ' +
      'protéger ton temps, ton argent, tes valeurs, ton énergie et tes proches.\n\n' +
      'Tu ne veux plus vivre en contradiction avec ce que tu as compris. Mais il te manque peut-être encore ' +
      'une méthode, un cadre ou un plan.\n\n' +
      'Ta force : tu es prêt à reprendre la main.\n' +
      'Ton risque : rester coincé entre lucidité et passage à l\'action.\n' +
      'Ta prochaine quête : transformer ta compréhension en stratégie de vie.',
    bouton: 'Faire mon diagnostic souveraineté',
  },
  batisseurs: {
    nom: 'la Guilde des Bâtisseurs',
    embleme: '⚒',
    texte:
      'Tu ne veux plus seulement dénoncer l\'ancien monde. Tu veux construire le nouveau.\n\n' +
      'Tu as compris que Bitcoin n\'est pas seulement une réserve de valeur. C\'est une école de ' +
      'responsabilité, de vérité et de coopération volontaire.\n\n' +
      'Ta force : tu es déjà en mouvement.\n' +
      'Ton risque : construire seul, t\'épuiser ou te disperser.\n' +
      'Ta prochaine quête : rejoindre des pairs alignés pour bâtir plus grand que toi.',
    bouton: 'Rejoindre les bâtisseurs',
  },
};

/* ---------- QUESTIONS (15 questions, 5 étapes) ----------
   Chaque choix porte une seule clé de guilde : 'eveilles', 'gardiens' ou 'batisseurs'.
   -------------------------------------------------------- */
const QUESTIONS = [

  // ── Étape 1 — L'appel de la quête ──────────────────────
  {
    etape: 'Étape 1 — L\'appel de la quête',
    texte: 'Quand tu regardes le monde actuel, quelle sensation domine ?',
    choix: [
      { texte: 'Je sens que quelque chose cloche, mais je n\'arrive pas encore à tout relier.', guilde: 'eveilles' },
      { texte: 'J\'ai compris qu\'il y a un problème profond, et ça crée une vraie dissonance dans ma vie.', guilde: 'gardiens' },
      { texte: 'Je ne veux plus seulement analyser le problème, je veux contribuer à construire autre chose.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 1 — L\'appel de la quête',
    texte: 'Quelle douleur est la plus présente chez toi aujourd\'hui ?',
    choix: [
      { texte: 'Le manque de repères, de sens ou de clarté.', guilde: 'eveilles' },
      { texte: 'L\'écart entre mes valeurs et mon mode de vie actuel.', guilde: 'gardiens' },
      { texte: 'La frustration de ne pas encore bâtir quelque chose d\'utile avec des personnes alignées.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 1 — L\'appel de la quête',
    texte: 'Face aux institutions, aux banques, à l\'État, tu ressens surtout…',
    choix: [
      { texte: 'Une méfiance croissante, mais encore beaucoup de confusion.', guilde: 'eveilles' },
      { texte: 'Une lucidité parfois lourde à porter, avec un sentiment d\'impuissance.', guilde: 'gardiens' },
      { texte: 'Le besoin de créer des alternatives concrètes plutôt que seulement critiquer.', guilde: 'batisseurs' },
    ],
  },

  // ── Étape 2 — Le brouillard fiat ───────────────────────
  {
    etape: 'Étape 2 — Le brouillard fiat',
    texte: 'Pour toi, le système fiat, c\'est plutôt…',
    choix: [
      { texte: 'Un sujet que je commence à découvrir, sans encore tout comprendre.', guilde: 'eveilles' },
      { texte: 'Une clé de lecture essentielle pour comprendre l\'inflation, la dépendance et la perte de contrôle.', guilde: 'gardiens' },
      { texte: 'Le vieux monde à dépasser par des outils, des réseaux et des communautés plus souveraines.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 2 — Le brouillard fiat',
    texte: 'Quand tu penses à ton argent et à ton avenir financier…',
    choix: [
      { texte: 'Je sens que je devrais mieux comprendre ce qui se joue.', guilde: 'eveilles' },
      { texte: 'Je veux reprendre le contrôle et ne plus dépendre uniquement du système classique.', guilde: 'gardiens' },
      { texte: 'Je veux construire une stratégie transmissible, utile pour moi, mes proches et ma communauté.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 2 — Le brouillard fiat',
    texte: 'Bitcoin représente aujourd\'hui pour toi…',
    choix: [
      { texte: 'Une porte d\'entrée intrigante vers un autre rapport à l\'argent.', guilde: 'eveilles' },
      { texte: 'Un outil concret de souveraineté, de responsabilité et de long terme.', guilde: 'gardiens' },
      { texte: 'Une infrastructure morale et communautaire pour construire autrement.', guilde: 'batisseurs' },
    ],
  },

  // ── Étape 3 — La clé de souveraineté ───────────────────
  {
    etape: 'Étape 3 — La clé de souveraineté',
    texte: 'Quand tu entends "reprendre la responsabilité de ta vie", tu te dis…',
    choix: [
      { texte: 'J\'en ai envie, mais je ne sais pas encore par où commencer.', guilde: 'eveilles' },
      { texte: 'C\'est exactement le sujet : personne ne viendra me sauver à ma place.', guilde: 'gardiens' },
      { texte: 'C\'est la base : maintenant, je veux aider d\'autres personnes à reprendre aussi leur pouvoir d\'action.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 3 — La clé de souveraineté',
    texte: 'Ton rapport au temps long ressemble plutôt à quoi ?',
    choix: [
      { texte: 'Je commence à comprendre que je dois sortir de l\'urgence permanente.', guilde: 'eveilles' },
      { texte: 'J\'essaie de structurer mes finances, mes choix et mes habitudes sur plusieurs années.', guilde: 'gardiens' },
      { texte: 'Je pense déjà en transmission, en construction durable et en impact à long terme.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 3 — La clé de souveraineté',
    texte: 'Dans ta vie quotidienne, où en es-tu dans ta souveraineté concrète ?',
    choix: [
      { texte: 'Je prends conscience de mes dépendances : argent, temps, travail, information.', guilde: 'eveilles' },
      { texte: 'Je reprends progressivement la main sur certains domaines importants.', guilde: 'gardiens' },
      { texte: 'J\'organise activement ma vie autour de plus d\'autonomie, de résilience et de contribution.', guilde: 'batisseurs' },
    ],
  },

  // ── Étape 4 — L'épreuve du miroir ──────────────────────
  {
    etape: 'Étape 4 — L\'épreuve du miroir',
    texte: 'Quand tu compares tes valeurs et ta vie actuelle…',
    choix: [
      { texte: 'Je sens un malaise, mais il reste encore flou.', guilde: 'eveilles' },
      { texte: 'Je vois clairement des incohérences que je ne peux plus ignorer.', guilde: 'gardiens' },
      { texte: 'J\'ai déjà commencé à réorganiser ma vie autour de mes valeurs.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 4 — L\'épreuve du miroir',
    texte: 'Quelle phrase te correspond le mieux ?',
    choix: [
      { texte: 'J\'ai besoin de comprendre ce qui m\'arrive.', guilde: 'eveilles' },
      { texte: 'J\'ai besoin d\'un cadre pour passer de la prise de conscience à l\'action.', guilde: 'gardiens' },
      { texte: 'J\'ai besoin de pairs pour construire, transmettre et avancer plus loin.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 4 — L\'épreuve du miroir',
    texte: 'Face à l\'inconfort du changement, tu as tendance à…',
    choix: [
      { texte: 'Observer, réfléchir, chercher des repères.', guilde: 'eveilles' },
      { texte: 'Avancer pas à pas, même si c\'est inconfortable.', guilde: 'gardiens' },
      { texte: 'Transformer l\'inconfort en projet, en action ou en transmission.', guilde: 'batisseurs' },
    ],
  },

  // ── Étape 5 — La rencontre de la guilde ────────────────
  {
    etape: 'Étape 5 — La rencontre de la guilde',
    texte: 'Ton rapport à la communauté Bitcoin aujourd\'hui…',
    choix: [
      { texte: 'Je l\'observe encore de loin.', guilde: 'eveilles' },
      { texte: 'J\'y trouve des personnes qui comprennent enfin ce que je ressens.', guilde: 'gardiens' },
      { texte: 'Je veux y prendre ma place activement : témoigner, aider, organiser, bâtir.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 5 — La rencontre de la guilde',
    texte: 'Si Bitcoin&Nous te proposait une prochaine étape, tu choisirais plutôt…',
    choix: [
      { texte: 'Une carte claire pour comprendre Bitcoin, le système fiat et la souveraineté.', guilde: 'eveilles' },
      { texte: 'Un diagnostic pour clarifier mes valeurs, mes blocages et mon plan d\'action.', guilde: 'gardiens' },
      { texte: 'Un cercle de bâtisseurs pour contribuer avec d\'autres personnes alignées.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Étape 5 — La rencontre de la guilde',
    texte: 'Dans un an, tu aimerais pouvoir dire…',
    choix: [
      { texte: 'Je comprends enfin ce qui me dérangeait dans le monde actuel.', guilde: 'eveilles' },
      { texte: 'J\'ai repris la main sur ma vie et je suis plus aligné avec mes valeurs.', guilde: 'gardiens' },
      { texte: 'Je contribue à une communauté vivante et je construis une alternative concrète.', guilde: 'batisseurs' },
    ],
  },
];

/* ---------- ÉTAT ---------- */
let scores = { eveilles: 0, gardiens: 0, batisseurs: 0 };
let questionIndex = 0;

/* ---------- DOM ---------- */
const screens = {
  intro:  document.getElementById('screen-intro'),
  quest:  document.getElementById('screen-quest'),
  reveal: document.getElementById('screen-reveal'),
  result: document.getElementById('screen-result'),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

/* ---------- INTRO ---------- */
document.getElementById('btn-start').addEventListener('click', () => {
  resetState();
  showScreen('quest');
  renderQuestion();
});

document.getElementById('btn-restart').addEventListener('click', () => {
  resetState();
  showScreen('intro');
});

function resetState() {
  scores = { eveilles: 0, gardiens: 0, batisseurs: 0 };
  questionIndex = 0;
}

/* ---------- QUESTION ---------- */
function renderQuestion() {
  const q = QUESTIONS[questionIndex];
  const total = QUESTIONS.length;
  const progressPct = Math.round((questionIndex / total) * 100);

  // Progression
  document.getElementById('progress-bar').style.width = progressPct + '%';
  document.getElementById('question-counter').textContent = `Question ${questionIndex + 1} / ${total}`;
  document.getElementById('chapter-label').textContent = q.etape;

  // Pas de bandeau narratif dans cette version (masqué)
  document.getElementById('narrative-banner').classList.add('hidden');

  // Texte de la question
  document.getElementById('question-text').textContent = q.texte;

  // Choix
  const container = document.getElementById('choices-container');
  container.innerHTML = '';
  q.choix.forEach(choix => {
    const btn = document.createElement('button');
    btn.className = 'choice-card';
    btn.textContent = choix.texte;
    btn.addEventListener('click', () => selectChoice(choix, btn));
    container.appendChild(btn);
  });

  // Réanimer la carte
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
}

function selectChoice(choix, btn) {
  document.querySelectorAll('.choice-card').forEach(b => {
    b.disabled = true;
  });
  btn.classList.add('selected');

  // Incrémenter le score de la guilde associée
  scores[choix.guilde] += 1;

  setTimeout(() => {
    questionIndex++;
    if (questionIndex < QUESTIONS.length) {
      renderQuestion();
    } else {
      goToReveal();
    }
  }, 380);
}

/* ---------- RÉVÉLATION ---------- */
function goToReveal() {
  document.getElementById('progress-bar').style.width = '100%';
  showScreen('reveal');
  setTimeout(showResult, 2400);
}

function showResult() {
  const guildeKey = computeGuilde();
  const g = GUILDES[guildeKey];

  document.getElementById('result-emblem').textContent = g.embleme;
  document.getElementById('result-name').textContent = g.nom;

  // Masquer les champs non utilisés dans cette version
  document.getElementById('result-tagline').textContent = '';
  document.getElementById('result-sovereignty').textContent = '';

  // Texte multiligne (les \n deviennent des paragraphes)
  const descEl = document.getElementById('result-description');
  descEl.innerHTML = '';
  g.texte.split('\n\n').forEach(para => {
    if (!para.trim()) return;
    // Les lignes courtes (force/risque/quête) restent regroupées dans un bloc
    if (para.includes('\n')) {
      const pre = document.createElement('p');
      pre.style.whiteSpace = 'pre-line';
      pre.textContent = para;
      pre.className = 'guild-highlight';
      descEl.appendChild(pre);
    } else {
      const p = document.createElement('p');
      p.textContent = para;
      descEl.appendChild(p);
    }
  });

  // Masquer la section "Tes prochains pas" (remplacée par le bouton CTA)
  document.querySelector('.actions-title').style.display = 'none';
  document.getElementById('result-actions').style.display = 'none';

  // Bouton CTA principal
  const ctaEl = document.getElementById('result-cta-btn');
  ctaEl.textContent = g.bouton;
  ctaEl.style.display = 'inline-block';

  showScreen('result');
}

/* ---------- CALCUL DE LA GUILDE ----------
   Règles de départage exactes :
   - Éveillés = Gardiens  → Gardiens
   - Gardiens = Bâtisseurs → Gardiens
   - Éveillés = Bâtisseurs → Éveillés
   - Triple égalité        → Gardiens
   ---------------------------------------- */
function computeGuilde() {
  const e = scores.eveilles;
  const g = scores.gardiens;
  const b = scores.batisseurs;

  // Triple égalité
  if (e === g && g === b) return 'gardiens';

  // Double égalités
  if (e === g && e > b) return 'gardiens';
  if (g === b && g > e) return 'gardiens';
  if (e === b && e > g) return 'eveilles';

  // Guilde dominante simple
  if (e > g && e > b) return 'eveilles';
  if (g > e && g > b) return 'gardiens';
  return 'batisseurs';
}
