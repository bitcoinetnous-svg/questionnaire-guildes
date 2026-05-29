/* ============================================================
   QUESTIONNAIRE — La Quête des Guildes — Bitcoin&Nous
   ============================================================ */

/* ---------- GUILDES ---------- */
const GUILDES = {
  eveilles: {
    id: 'eveilles',
    nom: 'Les Éveillés',
    embleme: '🌒',
    tagline: 'Ceux qui ont choisi de voir.',
    souverainete: 'Souveraineté intérieure',
    description:
      'Tu as senti quelque chose que beaucoup ignorent encore : que la réalité qu\'on te décrit ne correspond pas à ce que tu ressens. Tu questionnes. Tu cherches. Tu refuses les réponses faciles. ' +
      'Ce n\'est pas un défaut — c\'est le premier acte de courage. Beaucoup de gens vivent confortablement dans l\'illusion. Toi, tu as préféré l\'inconfort de la lucidité. ' +
      'Bitcoin, pour toi, c\'est d\'abord une question : "Et si j\'avais mal compris comment fonctionne le système ?"',
    actions: [
      'Prends 30 minutes cette semaine pour noter ce qui ne colle plus dans ta vie — sans censure, sans filtre.',
      'Lis ou écoute une ressource sur la monnaie et l\'inflation, pas pour tout comprendre, mais pour commencer à voir.',
      'Identifie une conviction que tu as héritée — pas choisie — et demande-toi si elle est toujours la tienne.',
    ],
  },
  batisseurs: {
    id: 'batisseurs',
    nom: 'Les Bâtisseurs',
    embleme: '⚒',
    tagline: 'Ceux qui construisent plutôt que d\'attendre.',
    souverainete: 'Souveraineté financière & action',
    description:
      'Tu n\'es pas du genre à attendre que les choses changent toutes seules. Tu veux agir. Construire. Avancer. ' +
      'Tu t\'intéresses au concret : comment protéger ce que tu as construit, comment bâtir quelque chose qui dure, comment ne plus dépendre de décisions que tu ne contrôles pas. ' +
      'Bitcoin, pour toi, c\'est un outil parmi d\'autres — mais un outil sérieux, à comprendre sérieusement.',
    actions: [
      'Fais un bilan honnête de ta situation financière : ce que tu possèdes vraiment, ce que tu dois, ce qui t\'appartient réellement.',
      'Commence à distinguer "actifs" et "dépenses" dans ton quotidien — et décide d\'orienter 1% de plus vers des actifs durables.',
      'Renseigne-toi sur Bitcoin non pas comme un investissement, mais comme une épargne de long terme, résiliente et hors système.',
    ],
  },
  gardiens: {
    id: 'gardiens',
    nom: 'Les Gardiens',
    embleme: '🛡',
    tagline: 'Ceux qui protègent ce qui compte vraiment.',
    souverainete: 'Souveraineté financière & transmission',
    description:
      'Ce qui te motive, c\'est la protection : de ta famille, de ton patrimoine, de tes valeurs. Tu penses au long terme. Tu veux transmettre quelque chose de solide. ' +
      'Tu as peut-être l\'intuition que le monde change plus vite qu\'on ne le dit, et que se préparer n\'est pas de la paranoïa — c\'est de la responsabilité. ' +
      'Bitcoin, pour toi, c\'est une manière de protéger la valeur de ce que tu as construit contre l\'érosion silencieuse du temps et de l\'inflation.',
    actions: [
      'Réfléchis à ce que tu veux transmettre à tes proches dans 10 ans — pas seulement financièrement, mais en termes de valeurs et de liberté.',
      'Évalue honnêtement à quel point tes économies actuelles résistent à l\'inflation. Ce que tu gardes perd-il de la valeur chaque année ?',
      'Explore l\'idée de "l\'auto-garde" : posséder quelque chose dont tu as vraiment le contrôle, sans intermédiaire ni dépendance.',
    ],
  },
  passeurs: {
    id: 'passeurs',
    nom: 'Les Passeurs',
    embleme: '🕯',
    tagline: 'Ceux qui éclairent le chemin pour les autres.',
    souverainete: 'Souveraineté communautaire',
    description:
      'Tu n\'es pas là que pour toi. Tu penses aux autres — à ceux qui cherchent, à ceux qui sont perdus, à ceux qui ont besoin d\'un signal dans le brouillard. ' +
      'Tu as un don naturel pour le lien, la transmission, l\'explication. Les gens te font confiance. Et tu prends cette confiance au sérieux. ' +
      'Bitcoin, pour toi, c\'est quelque chose que tu veux comprendre pour pouvoir en parler — sans te tromper, sans perdre les autres en route.',
    actions: [
      'Identifie 2 ou 3 personnes dans ton entourage qui semblent "chercher" — et propose-leur une vraie conversation, sans agenda.',
      'Rejoins ou crée un espace d\'échange local (groupe de discussion, rencontre mensuelle, cercle de lecture) autour de thèmes qui comptent pour toi.',
      'Partage une idée qui t\'a transformé cette année — sous forme d\'un message, d\'un appel, ou d\'un article — à quelqu\'un qui pourrait en avoir besoin.',
    ],
  },
  souverains: {
    id: 'souverains',
    nom: 'Les Souverains',
    embleme: '⚡',
    tagline: 'Ceux qui avancent sur tous les fronts.',
    souverainete: 'Souveraineté intérieure · financière · communautaire',
    description:
      'Tu n\'es pas enfermé dans une seule dimension. Tu cherches à être lucide sur toi-même, responsable de tes finances, et ancré dans une communauté réelle. ' +
      'Ce n\'est pas que tu aies tout résolu — c\'est que tu n\'as renoncé à rien. Tu sais que la transformation est un chemin, pas une destination. ' +
      'Bitcoin, pour toi, c\'est une convergence : un outil technique, une philosophie de vie, et une communauté d\'êtres humains qui veulent vivre autrement.',
    actions: [
      'Choisis un domaine (intérieur, financier, communautaire) dans lequel tu vas prendre un engagement concret ce mois-ci — et note-le.',
      'Partage ta démarche avec quelqu\'un de confiance. La souveraineté n\'est pas une aventure solitaire.',
      'Explore ce que Bitcoin représente au-delà du prix : une architecture de confiance, un protocole de liberté. Ça change le regard.',
    ],
  },
};

/* ---------- QUESTIONS ---------- */
const QUESTIONS = [
  // === CHAPITRE 1 — LE SENS ===
  {
    chapitre: 'Le Sens',
    narratif: null,
    texte: 'Quand tu penses à ta vie en ce moment, quelle phrase résonne le plus ?',
    choix: [
      { texte: 'Je fais ce qu\'on attend de moi, mais j\'ai du mal à voir pourquoi.', scores: { eveilles: 3, gardiens: 1 } },
      { texte: 'J\'ai des projets, mais quelque chose m\'empêche d\'avancer vraiment.', scores: { batisseurs: 3, eveilles: 1 } },
      { texte: 'Je veux laisser quelque chose de solide — pas juste survivre.', scores: { gardiens: 3, passeurs: 1 } },
      { texte: 'Je cherche du sens, et je commence à me demander si mes valeurs sont vraiment les miennes.', scores: { eveilles: 2, souverains: 2 } },
    ],
  },
  {
    chapitre: 'Le Sens',
    narratif: null,
    texte: 'Si tu devais être honnête : qu\'est-ce qui manque le plus dans ta vie quotidienne ?',
    choix: [
      { texte: 'De la clarté — je ne sais plus vraiment ce que je veux.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'De l\'autonomie — j\'ai l\'impression d\'être toujours dépendant de quelque chose ou quelqu\'un.', scores: { batisseurs: 2, gardiens: 2 } },
      { texte: 'Des gens vrais — des relations qui ne sont pas superficielles.', scores: { passeurs: 3, souverains: 1 } },
      { texte: 'Du concret — j\'en ai assez des discours, je veux agir.', scores: { batisseurs: 3, gardiens: 1 } },
    ],
  },
  {
    chapitre: 'Le Sens',
    narratif: null,
    texte: 'Face à une décision importante, tu as tendance à…',
    choix: [
      { texte: 'Analyser longtemps avant d\'agir — tu veux comprendre avant de te lancer.', scores: { eveilles: 2, gardiens: 2 } },
      { texte: 'Passer à l\'action rapidement — l\'inaction te pèse plus que l\'erreur.', scores: { batisseurs: 3, souverains: 1 } },
      { texte: 'Chercher l\'avis de personnes de confiance avant de décider.', scores: { passeurs: 2, souverains: 2 } },
      { texte: 'Remettre à plus tard — quelque chose te retient, tu ne sais pas toujours quoi.', scores: { eveilles: 3 } },
    ],
  },
  {
    chapitre: 'Le Sens',
    narratif: null,
    texte: 'Quand tu imagines ta vie dans 10 ans, ce qui compte le plus c\'est…',
    choix: [
      { texte: 'Être libéré des peurs et des dépendances qui me limitent aujourd\'hui.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'Avoir construit quelque chose de tangible — financièrement, professionnellement.', scores: { batisseurs: 3 } },
      { texte: 'Savoir que mes proches sont protégés et que j\'ai transmis quelque chose de bon.', scores: { gardiens: 3, passeurs: 1 } },
      { texte: 'Être entouré de personnes qui partagent mes valeurs et avancent avec moi.', scores: { passeurs: 3, souverains: 1 } },
    ],
  },

  // === CHAPITRE 2 — LE CONTRÔLE ===
  {
    chapitre: 'Le Contrôle',
    narratif: 'Tu avances. Le chemin se précise. Maintenant, parlons de ce que tu maîtrises vraiment.',
    texte: 'Quel aspect du système actuel te pèse le plus ?',
    choix: [
      { texte: 'L\'inflation silencieuse — ce que j\'épargne vaut moins chaque année.', scores: { batisseurs: 2, gardiens: 3 } },
      { texte: 'La dépendance — j\'ai l\'impression d\'être tributaire de décisions que je ne contrôle pas.', scores: { eveilles: 2, batisseurs: 2 } },
      { texte: 'Le manque de transparence — on ne nous dit pas la vérité sur comment les choses fonctionnent.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'L\'individualisme ambiant — les gens ne se serrent plus les coudes.', scores: { passeurs: 3, gardiens: 1 } },
    ],
  },
  {
    chapitre: 'Le Contrôle',
    narratif: null,
    texte: 'Si tu pouvais reprendre une chose en main dès demain, ce serait…',
    choix: [
      { texte: 'Ta manière de penser — sortir des schémas reçus, penser par toi-même.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'Ta situation financière — comprendre ce que tu possèdes vraiment et le protéger.', scores: { batisseurs: 2, gardiens: 2 } },
      { texte: 'Ton temps — arrêter de le vendre ou de le subir.', scores: { batisseurs: 3, eveilles: 1 } },
      { texte: 'Tes relations — construire un vrai réseau de confiance.', scores: { passeurs: 3, souverains: 1 } },
    ],
  },
  {
    chapitre: 'Le Contrôle',
    narratif: null,
    texte: 'Ton rapport à l\'argent en ce moment, c\'est plutôt…',
    choix: [
      { texte: 'Je gagne, je dépense, et je n\'ai pas vraiment de stratégie.', scores: { eveilles: 2, batisseurs: 1 } },
      { texte: 'J\'épargne, mais j\'ai l\'intuition que je fais fausse route — que la valeur se perd quand même.', scores: { gardiens: 3, batisseurs: 1 } },
      { texte: 'Je cherche à construire une vraie indépendance financière, mais c\'est flou.', scores: { batisseurs: 3, souverains: 1 } },
      { texte: 'L\'argent m\'intéresse moins que le sens — mais je sais que l\'ignorer est une erreur.', scores: { eveilles: 2, passeurs: 2 } },
    ],
  },
  {
    chapitre: 'Le Contrôle',
    narratif: null,
    texte: 'Qu\'est-ce qui te retient le plus souvent d\'agir selon tes convictions ?',
    choix: [
      { texte: 'La peur du regard des autres — qu\'on me prenne pour un fou ou un extrémiste.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'Le manque de temps ou d\'énergie — j\'ai déjà trop à gérer.', scores: { batisseurs: 2, gardiens: 2 } },
      { texte: 'L\'incertitude — je ne suis pas encore sûr de ce que je veux vraiment.', scores: { eveilles: 2, souverains: 2 } },
      { texte: 'L\'isolement — sans soutien, c\'est difficile de tenir.', scores: { passeurs: 3, gardiens: 1 } },
    ],
  },

  // === CHAPITRE 3 — LA COMMUNAUTÉ ===
  {
    chapitre: 'La Communauté',
    narratif: 'Dernière épreuve. Parlons de ceux qui t\'entourent — et de ceux que tu cherches peut-être encore.',
    texte: 'Ton entourage actuel (amis, famille, collègues)…',
    choix: [
      { texte: 'Ne comprend pas toujours où je vais — mais c\'est normal, je change.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'M\'aide à avancer concrètement — c\'est précieux.', scores: { batisseurs: 2, gardiens: 2 } },
      { texte: 'M\'apporte de la sécurité et de la chaleur, mais pas forcément de la stimulation.', scores: { gardiens: 3 } },
      { texte: 'Est trop limité — je cherche des gens avec qui aller plus loin.', scores: { passeurs: 2, souverains: 2 } },
    ],
  },
  {
    chapitre: 'La Communauté',
    narratif: null,
    texte: 'Quand tu partages une idée qui compte pour toi, tu cherches surtout…',
    choix: [
      { texte: 'À comprendre si je suis dans le vrai — j\'ai besoin de confronter mes idées.', scores: { eveilles: 3 } },
      { texte: 'À convaincre — si je vois quelque chose d\'important, je veux que les autres le voient aussi.', scores: { passeurs: 3, batisseurs: 1 } },
      { texte: 'À créer du lien — une bonne conversation vaut plus que d\'avoir raison.', scores: { passeurs: 2, souverains: 2 } },
      { texte: 'À passer à l\'action ensemble — les idées seules ne suffisent pas.', scores: { batisseurs: 2, passeurs: 2 } },
    ],
  },
  {
    chapitre: 'La Communauté',
    narratif: null,
    texte: 'Quel rôle joues-tu naturellement dans un groupe ?',
    choix: [
      { texte: 'Celui qui pose les questions inconfortables — qui fait voir ce qu\'on préfère ignorer.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'Celui qui structure et avance — qui transforme les discussions en plans.', scores: { batisseurs: 3 } },
      { texte: 'Celui qui stabilise — qui protège le groupe et garde le cap sur l\'essentiel.', scores: { gardiens: 3, passeurs: 1 } },
      { texte: 'Celui qui relie — qui crée du lien, fait les présentations, tisse la toile.', scores: { passeurs: 3, souverains: 1 } },
    ],
  },
  {
    chapitre: 'La Communauté',
    narratif: null,
    texte: 'Ce que tu voudrais trouver dans une communauté, c\'est surtout…',
    choix: [
      { texte: 'Des gens qui pensent par eux-mêmes et n\'ont pas peur de remettre les choses en question.', scores: { eveilles: 3, souverains: 1 } },
      { texte: 'Des projets concrets, des gens qui font — pas juste qui parlent.', scores: { batisseurs: 3 } },
      { texte: 'De la confiance et de la durée — des relations qui tiennent dans le temps.', scores: { gardiens: 2, passeurs: 2 } },
      { texte: 'Un endroit pour transmettre et apprendre — aller plus loin ensemble.', scores: { passeurs: 3, souverains: 1 } },
    ],
  },
];

/* ---------- ÉTAT ---------- */
let scores = { eveilles: 0, batisseurs: 0, gardiens: 0, passeurs: 0, souverains: 0 };
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
  scores = { eveilles: 0, batisseurs: 0, gardiens: 0, passeurs: 0, souverains: 0 };
  questionIndex = 0;
}

/* ---------- QUESTION ---------- */
function renderQuestion() {
  const q = QUESTIONS[questionIndex];
  const total = QUESTIONS.length;
  const progressPct = Math.round((questionIndex / total) * 100);

  // Progression
  document.getElementById('progress-bar').style.width = progressPct + '%';
  document.getElementById('question-counter').textContent = `${questionIndex + 1} / ${total}`;
  document.getElementById('chapter-label').textContent = q.chapitre;

  // Bandeau narratif
  const banner = document.getElementById('narrative-banner');
  if (q.narratif) {
    banner.textContent = q.narratif;
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }

  // Question
  document.getElementById('question-text').textContent = q.texte;

  // Choix
  const container = document.getElementById('choices-container');
  container.innerHTML = '';

  q.choix.forEach((choix, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-card';
    btn.textContent = choix.texte;
    btn.addEventListener('click', () => selectChoice(choix, btn));
    container.appendChild(btn);
  });

  // Réanimer la carte
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = '';
}

function selectChoice(choix, btn) {
  // Désactiver tous les boutons pendant la transition
  document.querySelectorAll('.choice-card').forEach(b => {
    b.disabled = true;
    b.classList.remove('selected');
  });
  btn.classList.add('selected');

  // Ajouter les scores
  Object.entries(choix.scores).forEach(([guilde, pts]) => {
    scores[guilde] = (scores[guilde] || 0) + pts;
  });

  // Passer à la suite
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
  const guilde = computeGuilde();
  const g = GUILDES[guilde];

  document.getElementById('result-emblem').textContent = g.embleme;
  document.getElementById('result-name').textContent = g.nom;
  document.getElementById('result-tagline').textContent = g.tagline;
  document.getElementById('result-sovereignty').textContent = g.souverainete;
  document.getElementById('result-description').textContent = g.description;

  const list = document.getElementById('result-actions');
  list.innerHTML = '';
  g.actions.forEach(action => {
    const li = document.createElement('li');
    li.textContent = action;
    list.appendChild(li);
  });

  showScreen('result');
}

/* ---------- CALCUL DE LA GUILDE ---------- */
function computeGuilde() {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const secondScore = sorted[1][1];

  // Si les deux premiers sont proches (écart ≤ 2) → Souverains
  if (topScore - secondScore <= 2 && topScore > 0) {
    // On donne quand même les souverains seulement si plusieurs guildes sont hautes
    const highCount = sorted.filter(([, s]) => s >= topScore - 2).length;
    if (highCount >= 3) return 'souverains';
  }

  return sorted[0][0];
}
