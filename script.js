/* ============================================================
   La Quête des Guildes — Bitcoin&Nous
   ============================================================ */

/* ---------- IMAGES PAR ACTE ---------- */
var IMAGES = {
  'intro':  'assets/images/acte-1-appel.png',
  'I':      'assets/images/acte-1-appel.png',
  'II':     'assets/images/acte-2-brouillard-fiat.png',
  'III':    'assets/images/acte-3-cle.png',
  'IV':     'assets/images/acte-4-miroir.png',
  'V':      'assets/images/acte-5-guilde.png',
  'result': 'assets/images/acte-5-guilde.png',
};
var _activeBgLayer = 'a';

function setBackground(key) {
  var url = IMAGES[key];
  if (!url) return;
  var next = _activeBgLayer === 'a' ? 'b' : 'a';
  var nextEl = document.getElementById('bg-layer-' + next);
  var prevEl = document.getElementById('bg-layer-' + _activeBgLayer);
  nextEl.style.backgroundImage = 'url(' + url + ')';
  nextEl.classList.add('active');
  prevEl.classList.remove('active');
  _activeBgLayer = next;
}

/* ---------- 3 GUILDES ---------- */
const GUILDES = {
  eveilles: {
    embleme: '🌒',
    titre: 'La Guilde des Éveillés t\'ouvre ses portes',
    texte: [
      'Tu n\'es plus endormi.',
      'Tu as vu les premières fissures.\nTu as entendu le bruit des chaînes.\nTu as senti que les anciennes cartes ne suffisaient plus.',
      'Mais ta quête commence à peine.',
      'Tu n\'as pas encore besoin d\'un marteau.\nTu as besoin d\'une carte.',
      'Ta force : tu sais encore t\'étonner.\nTon risque : rester trop longtemps dans le brouillard.\nTa prochaine quête : comprendre le système pour ne plus le subir.',
    ],
    bouton: 'Recevoir ma carte de départ',
  },
  gardiens: {
    embleme: '🛡',
    titre: 'La Guilde des Gardiens reconnaît ta clé',
    texte: [
      'Tu as compris que la liberté n\'est pas un slogan.',
      'C\'est une charge.\nUne discipline.\nUne responsabilité.',
      'Tu as vu l\'écart entre tes valeurs et ta vie.\nTu ne peux plus faire comme si tu ne savais pas.',
      'Tu n\'as plus seulement besoin d\'une carte.\nTu as besoin d\'une boussole.',
      'Ta force : tu es prêt à reprendre la garde de ce qui compte.\nTon risque : rester coincé entre lucidité et action.\nTa prochaine quête : transformer ta compréhension en stratégie de souveraineté.',
    ],
    bouton: 'Faire mon diagnostic souveraineté',
  },
  batisseurs: {
    embleme: '⚒',
    titre: 'La Guilde des Bâtisseurs rallume la forge',
    texte: [
      'Tu as dépassé le stade de la plainte.',
      'Tu ne veux plus seulement dénoncer l\'ancien royaume.\nTu veux bâtir des routes, des refuges, des outils, des alliances.',
      'Tu sais que la souveraineté ne se vit pas seul dans une tour.\nElle se renforce entre individus libres, responsables et capables de coopérer.',
      'Tu n\'as plus seulement besoin d\'une boussole.\nTu as besoin d\'une forge.',
      'Ta force : tu transformes la lucidité en construction.\nTon risque : bâtir seul, t\'épuiser ou te disperser.\nTa prochaine quête : rejoindre des pairs pour construire plus grand que toi.',
    ],
    bouton: 'Rejoindre les bâtisseurs',
  },
};

/* ---------- 15 QUESTIONS — 3 RÉPONSES CHACUNE ---------- */
const QUESTIONS = [

  /* ACTE I — L'APPEL */
  {
    etape: 'Acte I — L\'Appel',
    titre: 'La fissure dans le royaume',
    texte: 'La grande Cité continue de tourner. Les marchands vendent. Les scribes commentent. Les intendants promettent que tout est sous contrôle.\n\nMais toi, au milieu de la place, tu vois une fissure courir le long des murs.\n\nQue fais-tu ?',
    choix: [
      { texte: 'Je m\'arrête. Je sens que quelque chose cloche, mais je ne comprends pas encore d\'où vient la faille.', guilde: 'eveilles' },
      { texte: 'Je m\'approche. J\'ai compris que cette fissure traverse aussi ma propre vie.', guilde: 'gardiens' },
      { texte: 'Je quitte la place. Ce royaume ne se réparera pas avec des discours : il faut bâtir ailleurs.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte I — L\'Appel',
    titre: 'Le bruit des chaînes',
    texte: 'Au loin, tu entends un bruit métallique. Ce ne sont pas des chaînes visibles. Ce sont celles des habitudes, des dettes, des injonctions, des carrières subies, des peurs bien habillées.\n\nElles ne blessent pas le corps. Elles usent l\'âme.\n\nQuelle chaîne reconnais-tu en premier ?',
    choix: [
      { texte: 'La chaîne du brouillard : je ne sais plus vraiment ce qui est vrai, faux, solide ou fragile.', guilde: 'eveilles' },
      { texte: 'La chaîne de la dissonance : je vis trop loin de ce que je crois juste.', guilde: 'gardiens' },
      { texte: 'La chaîne de la solitude : je ne manque pas d\'idées, je manque de compagnons pour bâtir.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte I — L\'Appel',
    titre: 'Les messagers du vieux monde',
    texte: 'Trois messagers t\'arrêtent à la sortie de la Cité.\n\n"Ne t\'inquiète pas, nous décidons pour toi."\n"Ta sécurité dépend de ton obéissance."\n"Tu es libre, tant que tu choisis parmi nos options."\n\nComment réponds-tu ?',
    choix: [
      { texte: 'Je doute. Leurs paroles sonnent faux, mais je n\'ai pas encore les armes pour leur répondre.', guilde: 'eveilles' },
      { texte: 'Je comprends leur jeu. Et plus je le comprends, plus il devient difficile de continuer comme avant.', guilde: 'gardiens' },
      { texte: 'Je ne débats plus avec les geôliers. Je cherche ceux qui construisent des portes de sortie.', guilde: 'batisseurs' },
    ],
  },

  /* ACTE II — LE BROUILLARD FIAT */
  {
    etape: 'Acte II — Le Brouillard Fiat',
    titre: 'La brume des fausses pièces',
    texte: 'Tu entres dans une vallée couverte de brume. À chaque pas, des pièces tombent du ciel. Tout le monde semble plus riche. Pourtant, les maisons deviennent inaccessibles, les paniers se vident plus vite, les anciens perdent leur épargne.\n\nUn panneau indique : "Bienvenue dans le royaume de l\'argent facile."\n\nQuelle vérité découvres-tu dans la brume ?',
    choix: [
      { texte: 'Je comprends qu\'il y a un piège, mais je ne sais pas encore comment il fonctionne.', guilde: 'eveilles' },
      { texte: 'Je vois que l\'argent truqué déforme les choix, détruit l\'épargne et rend les gens dépendants.', guilde: 'gardiens' },
      { texte: 'Je vois surtout l\'urgence de bâtir des refuges hors de cette brume : outils, réseaux, communautés.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte II — Le Brouillard Fiat',
    titre: 'Le coffre percé',
    texte: 'Tu arrives devant ton coffre. Tu l\'avais rempli avec ton travail, ton temps, tes efforts.\n\nMais le fond est percé.\n\nChaque année, une partie disparaît. Personne ne force la serrure. Personne ne laisse de trace. Pourtant, le trésor fuit.\n\nQue décides-tu ?',
    choix: [
      { texte: 'Je veux d\'abord comprendre qui a percé le coffre et pourquoi personne n\'en parle clairement.', guilde: 'eveilles' },
      { texte: 'Je veux reprendre la garde de mon trésor et ne plus dépendre de ceux qui tiennent les clés.', guilde: 'gardiens' },
      { texte: 'Je veux apprendre à bâtir des coffres que mes proches et ma communauté pourront transmettre.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte II — Le Brouillard Fiat',
    titre: 'La pièce orange',
    texte: 'Au cœur de la vallée, tu trouves une pièce étrange. Elle ne promet rien. Elle ne supplie personne. Elle ne change pas ses règles pour plaire au roi.\n\nElle attend simplement que tu comprennes.\n\nQue vois-tu dans cette pièce ?',
    choix: [
      { texte: 'Un artefact mystérieux. Je sens qu\'il est important, mais je ne connais pas encore son pouvoir.', guilde: 'eveilles' },
      { texte: 'Une clé de souveraineté : rareté, responsabilité, temps long, liberté sans permission.', guilde: 'gardiens' },
      { texte: 'Une pierre de fondation pour rebâtir des liens, des échanges et des communautés sur la vérité.', guilde: 'batisseurs' },
    ],
  },

  /* ACTE III — LA CLÉ */
  {
    etape: 'Acte III — La Clé',
    titre: 'La porte sans gardien',
    texte: 'Tu arrives devant une immense porte. Aucun soldat. Aucun guichet. Aucun formulaire. Aucune autorisation.\n\nSur la pierre, une phrase est gravée :\n"Tu peux passer. Mais personne ne portera la clé à ta place."\n\nQue fais-tu ?',
    choix: [
      { texte: 'Je reste devant la porte. J\'ai envie d\'entrer, mais je ne sais pas encore comment porter cette responsabilité.', guilde: 'eveilles' },
      { texte: 'Je prends la clé. Elle est lourde, mais je comprends que ma liberté commence ici.', guilde: 'gardiens' },
      { texte: 'Je franchis la porte, puis je me retourne : d\'autres doivent apprendre à tenir leur propre clé.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte III — La Clé',
    titre: 'Le sablier des générations',
    texte: 'Dans une salle silencieuse, un sablier immense laisse tomber son sable. Chaque grain est une heure de ta vie. Une décision. Un achat. Un renoncement. Une discipline. Une transmission.\n\nUne voix murmure : "Ce que tu ne construis pas aujourd\'hui devra être subi demain."\n\nQuel serment fais-tu devant le sablier ?',
    choix: [
      { texte: 'Je veux sortir de l\'urgence permanente et comprendre ce qui mérite vraiment mon temps.', guilde: 'eveilles' },
      { texte: 'Je veux apprendre à bâtir sur plusieurs années, même si le monde me pousse à tout consommer maintenant.', guilde: 'gardiens' },
      { texte: 'Je veux construire pour plus grand que moi : mes proches, mes enfants, ma communauté, ceux qui viendront après.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte III — La Clé',
    titre: 'L\'inventaire du voyageur',
    texte: 'Avant de continuer, tu dois vider ton sac.\n\nTu y trouves ton temps. Ton argent. Ton attention. Tes compétences. Ton énergie. Tes relations. Tes dépendances.\n\nCertaines choses t\'appartiennent vraiment. D\'autres sont encore tenues par des mains invisibles.\n\nQue découvres-tu dans ton sac ?',
    choix: [
      { texte: 'Je découvre surtout mes dépendances. Certaines me surprennent, d\'autres m\'inquiètent.', guilde: 'eveilles' },
      { texte: 'Je vois les domaines où j\'ai déjà commencé à reprendre la main.', guilde: 'gardiens' },
      { texte: 'Je vois les ressources que je peux organiser pour bâtir, transmettre et devenir plus utile.', guilde: 'batisseurs' },
    ],
  },

  /* ACTE IV — LE MIROIR */
  {
    etape: 'Acte IV — Le Miroir',
    titre: 'Le miroir qui ne ment pas',
    texte: 'Tu entres dans une pièce sans fenêtre. Au centre, un miroir.\n\nMais il ne montre pas ton visage. Il montre ta vie réelle.\n\nTon travail. Tes compromis. Tes silences. Tes choix. Tes valeurs. Tes renoncements.\n\nQue révèle le miroir ?',
    choix: [
      { texte: 'Une image trouble : je sens que quelque chose n\'est pas aligné, mais je dois encore le nommer.', guilde: 'eveilles' },
      { texte: 'Une fracture nette : je ne peux plus ignorer l\'écart entre mes valeurs et ma vie.', guilde: 'gardiens' },
      { texte: 'Une métamorphose commencée : je vois déjà les choix que j\'ai faits pour redevenir cohérent.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte IV — Le Miroir',
    titre: 'Les trois sentiers',
    texte: 'Le miroir disparaît. Trois sentiers s\'ouvrent.\n\nLe premier descend vers une bibliothèque enfouie.\nLe deuxième mène vers une tour où brûle une forge intérieure.\nLe troisième rejoint une route pleine de voix, de feux et de chantiers.\n\nQuel sentier prends-tu ?',
    choix: [
      { texte: 'La bibliothèque : je veux comprendre les règles cachées du monde dans lequel je vis.', guilde: 'eveilles' },
      { texte: 'La forge : je veux transformer ce que j\'ai compris en décisions, routines et stratégie de vie.', guilde: 'gardiens' },
      { texte: 'La route des chantiers : je veux rejoindre ceux qui construisent déjà.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte IV — Le Miroir',
    titre: 'Le pont de l\'inconfort',
    texte: 'Pour quitter l\'ancien monde, tu dois traverser un pont suspendu. Derrière toi : le connu, même s\'il t\'étouffe. Devant toi : l\'inconnu, même s\'il t\'appelle.\n\nLe vent se lève. Le pont bouge. Personne ne peut traverser à ta place.\n\nComment avances-tu ?',
    choix: [
      { texte: 'Je pose un pied, puis je m\'arrête. J\'ai besoin de repères avant d\'aller plus loin.', guilde: 'eveilles' },
      { texte: 'J\'avance lentement. J\'ai peur, mais je préfère l\'inconfort du vrai à la sécurité du faux.', guilde: 'gardiens' },
      { texte: 'Je traverse, puis je commence déjà à tendre des cordes pour ceux qui passeront après moi.', guilde: 'batisseurs' },
    ],
  },

  /* ACTE V — LA GUILDE */
  {
    etape: 'Acte V — La Guilde',
    titre: 'Le feu au-delà de la montagne',
    texte: 'Après une longue marche, tu aperçois une lumière. Ce n\'est pas un palais. Ce n\'est pas une administration. Ce n\'est pas une armée.\n\nC\'est un feu de camp.\n\nAutour, des voyageurs parlent librement. Ils respectent les mêmes principes : vérité, responsabilité, liberté, coopération.\n\nQuelle place prends-tu autour du feu ?',
    choix: [
      { texte: 'Je reste encore à distance. J\'observe, j\'écoute, j\'essaie de comprendre les codes du campement.', guilde: 'eveilles' },
      { texte: 'Je m\'assois près du feu. Pour la première fois depuis longtemps, je me sens moins seul.', guilde: 'gardiens' },
      { texte: 'J\'ajoute du bois au feu. Je veux nourrir cette communauté et aider d\'autres voyageurs à la trouver.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte V — La Guilde',
    titre: 'Les trois objets',
    texte: 'Au matin, un ancien de la guilde dépose trois objets devant toi.\n\nUne carte.\nUne boussole.\nUn marteau.\n\nIl te dit : "Ne choisis pas celui qui brille. Choisis celui dont tu as besoin pour la suite."\n\nQuel objet prends-tu ?',
    choix: [
      { texte: 'La carte : je dois comprendre le territoire avant de choisir ma route.', guilde: 'eveilles' },
      { texte: 'La boussole : je dois aligner mes choix avec mes valeurs et retrouver mon cap.', guilde: 'gardiens' },
      { texte: 'Le marteau : je suis prêt à bâtir avec d\'autres.', guilde: 'batisseurs' },
    ],
  },
  {
    etape: 'Acte V — La Guilde',
    titre: 'La phrase gravée dans la pierre',
    texte: 'À la fin du chemin, tu trouves une pierre blanche. Chaque voyageur y grave une phrase. Pas une promesse au monde. Un engagement envers lui-même.\n\nDans un an, quelle phrase veux-tu pouvoir graver ?',
    choix: [
      { texte: '"J\'ai enfin compris le monde qui m\'enfermait."', guilde: 'eveilles' },
      { texte: '"J\'ai repris la garde de ma vie."', guilde: 'gardiens' },
      { texte: '"J\'ai bâti avec d\'autres une voie que nous n\'avions pas trouvée."', guilde: 'batisseurs' },
    ],
  },
];

/* ============================================================
   CONSTANTES DE TRANSITION
   ============================================================ */
var CARD_FADE_DURATION       = 300;  /* ms — fondu sortant de la carte */
var TRANSITION_SCREEN_DURATION = 2300; /* ms — durée d'affichage de l'écran intermédiaire */
var OVERLAY_FADE_DURATION    = 500;  /* ms — fondu de l'overlay de transition */

/* ============================================================
   ÉTAT
   ============================================================ */
var scores        = { eveilles: 0, gardiens: 0, batisseurs: 0 };
var questionIndex = 0;
var answerHistory = []; /* { questionIndex, guilde } */
var _transitioning = false;

/* ============================================================
   DOM
   ============================================================ */
var screens = {
  intro:  document.getElementById('screen-intro'),
  quest:  document.getElementById('screen-quest'),
  result: document.getElementById('screen-result'),
};

function showScreen(name) {
  Object.values(screens).forEach(function(s) { s.classList.remove('active'); });
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================================
   THÈME PAR ACTE
   ============================================================ */
var ACT_RGB    = { 'I':['138','180','216'], 'II':['180','155','60'], 'III':['201','168','76'], 'IV':['160','165','190'], 'V':['200','110','48'] };
var ACT_ACCENT = { 'I':'#8ab4d8', 'II':'#c8a84c', 'III':'#c9a84c', 'IV':'#b0b8cc', 'V':'#d07030' };

function applyActTheme(actKey) {
  var rgb  = ACT_RGB[actKey]    || ACT_RGB['I'];
  var root = document.documentElement;
  root.style.setProperty('--act-glow-r', rgb[0]);
  root.style.setProperty('--act-glow-g', rgb[1]);
  root.style.setProperty('--act-glow-b', rgb[2]);
  root.style.setProperty('--act-accent', ACT_ACCENT[actKey] || '#c9a84c');
}

function actKeyOf(q) {
  return (q.etape.match(/Acte ([IVX]+)/) || [])[1] || 'I';
}

/* ============================================================
   ÉCRAN DE TRANSITION IMMERSIF
   ============================================================ */
function showTransitionScreen(nextIndex, isResult, onDone) {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var card    = document.getElementById('question-card');
  var bgOvl   = document.getElementById('bg-overlay');
  var trScreen = document.getElementById('tr-screen');

  /* --- Préparer le contenu de la transition --- */
  if (isResult) {
    setBackground('result');
    document.getElementById('tr-act').textContent     = 'La quête s\'achève';
    document.getElementById('tr-episode').textContent = '';
    document.getElementById('tr-title').textContent   = 'Révélation de ta Guilde';
  } else {
    var q      = QUESTIONS[nextIndex];
    var actKey = actKeyOf(q);
    applyActTheme(actKey);
    setBackground(actKey);
    document.getElementById('tr-act').textContent     = q.etape;
    document.getElementById('tr-episode').textContent = 'Épreuve ' + (nextIndex + 1) + ' / ' + QUESTIONS.length;
    document.getElementById('tr-title').textContent   = q.titre || '';
  }

  /* --- Mode réduit : ignorer les animations, passer directement --- */
  if (reducedMotion) {
    onDone();
    return;
  }

  /* --- Phase 1 : fondu sortant de la carte (si on est sur l'écran questionnaire) --- */
  var fromQuest = screens.quest.classList.contains('active');
  if (fromQuest) {
    card.classList.add('card-exit');
  }

  setTimeout(function() {

    /* --- Phase 2 : alléger l'overlay + afficher l'écran de transition --- */
    bgOvl.classList.add('breathe');
    trScreen.setAttribute('aria-hidden', 'false');
    trScreen.classList.add('visible');

    /* Si on vient de l'accueil, passer sur l'écran questionnaire pendant que la transition le couvre */
    if (!fromQuest) showScreen('quest');

    /* --- Phase 3 : maintenir l'écran de transition --- */
    setTimeout(function() {

      /* Préparer la prochaine question pendant que la transition est encore visible */
      if (!isResult) {
        questionIndex = nextIndex;
        fillCard(QUESTIONS[nextIndex]);
        updateProgress();
        updateBackButton();
      }

      /* --- Phase 4 : faire disparaître l'écran de transition --- */
      trScreen.classList.remove('visible');

      setTimeout(function() {
        trScreen.setAttribute('aria-hidden', 'true');
        bgOvl.classList.remove('breathe');

        /* --- Phase 5 : faire apparaître la carte avec animation entrante --- */
        if (!isResult) {
          card.style.transition = 'none';
          card.classList.remove('card-exit');
          card.classList.add('card-enter');
          card.offsetHeight; /* force reflow */
          card.style.transition = '';
          card.classList.remove('card-enter');
        }

        onDone();
      }, OVERLAY_FADE_DURATION);

    }, TRANSITION_SCREEN_DURATION);

  }, fromQuest ? CARD_FADE_DURATION : 0);
}

/* ============================================================
   REMPLISSAGE DE LA CARTE (sans changement de thème/fond)
   ============================================================ */
function fillCard(q) {
  var titreEl = document.getElementById('question-titre');
  titreEl.textContent = q.titre || '';
  titreEl.style.display = q.titre ? 'block' : 'none';
  document.getElementById('question-text').textContent = q.texte;
  document.getElementById('chapter-label').textContent = q.etape;
  document.getElementById('narrative-banner').classList.add('hidden');

  var container = document.getElementById('choices-container');
  container.innerHTML = '';
  q.choix.forEach(function(choix) {
    var btn = document.createElement('button');
    btn.className = 'choice-card';
    btn.textContent = choix.texte;
    btn.addEventListener('click', function() { selectChoice(choix, btn); });
    container.appendChild(btn);
  });
}

function updateProgress() {
  var total = QUESTIONS.length;
  document.getElementById('progress-bar').style.width = Math.round((questionIndex / total) * 100) + '%';
  document.getElementById('question-counter').textContent = 'Question ' + (questionIndex + 1) + ' / ' + total;
}

function updateBackButton() {
  var btn = document.getElementById('btn-back');
  if (questionIndex > 0) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}

/* ============================================================
   BOUTONS
   ============================================================ */
document.getElementById('btn-start').addEventListener('click', function() {
  if (_transitioning) return;
  _transitioning = true;
  resetState();
  showTransitionScreen(0, false, function() {
    _transitioning = false;
  });
});

document.getElementById('btn-back').addEventListener('click', function() {
  if (_transitioning || answerHistory.length === 0) return;
  _transitioning = true;
  var last = answerHistory.pop();
  scores[last.guilde] = Math.max(0, scores[last.guilde] - 1);
  showTransitionScreen(last.questionIndex, false, function() {
    _transitioning = false;
  });
});

document.getElementById('btn-back-result').addEventListener('click', function() {
  if (_transitioning || answerHistory.length === 0) return;
  _transitioning = true;
  var last = answerHistory.pop();
  scores[last.guilde] = Math.max(0, scores[last.guilde] - 1);
  /* Passer sur l'écran questionnaire avant la transition */
  showScreen('quest');
  showTransitionScreen(last.questionIndex, false, function() {
    _transitioning = false;
  });
});

document.getElementById('btn-restart').addEventListener('click', function() {
  resetState();
  setBackground('intro');
  showScreen('intro');
});

/* ============================================================
   SÉLECTION D'UNE RÉPONSE
   ============================================================ */
function selectChoice(choix, clickedBtn) {
  if (_transitioning) return;
  _transitioning = true;

  document.querySelectorAll('.choice-card').forEach(function(b) { b.disabled = true; });
  clickedBtn.classList.add('selected');

  answerHistory.push({ questionIndex: questionIndex, guilde: choix.guilde });
  scores[choix.guilde] += 1;

  var nextIndex = questionIndex + 1;

  if (nextIndex < QUESTIONS.length) {
    showTransitionScreen(nextIndex, false, function() {
      _transitioning = false;
    });
  } else {
    /* Dernière question → transition spéciale vers le résultat */
    document.getElementById('progress-bar').style.width = '100%';
    showTransitionScreen(-1, true, function() {
      showResult();
      _transitioning = false;
    });
  }
}

/* ============================================================
   RÉINITIALISATION
   ============================================================ */
function resetState() {
  scores        = { eveilles: 0, gardiens: 0, batisseurs: 0 };
  questionIndex = 0;
  answerHistory = [];
  _transitioning = false;
}

/* ============================================================
   RÉSULTAT
   ============================================================ */
function showResult() {
  var key = computeGuilde();
  var g   = GUILDES[key];

  document.getElementById('result-emblem').textContent = g.embleme;
  document.getElementById('result-name').textContent   = g.titre;
  document.getElementById('result-tagline').textContent    = '';
  document.getElementById('result-sovereignty').textContent = '';

  var descEl = document.getElementById('result-description');
  descEl.innerHTML = '';
  g.texte.forEach(function(para) {
    var p = document.createElement('p');
    p.style.whiteSpace = 'pre-line';
    p.textContent = para;
    if (para.indexOf('\n') !== -1) p.className = 'guild-highlight';
    descEl.appendChild(p);
  });

  document.querySelector('.actions-title').style.display = 'none';
  document.getElementById('result-actions').style.display = 'none';

  var ctaEl = document.getElementById('result-cta-btn');
  ctaEl.textContent   = g.bouton;
  ctaEl.style.display = 'inline-block';

  document.getElementById('screen-result').setAttribute('data-guilde', key);
  showScreen('result');
}

/* ============================================================
   CALCUL DE LA GUILDE
   Règles de départage :
   Éveillés = Gardiens         → Gardiens
   Gardiens = Bâtisseurs       → Gardiens
   Éveillés = Bâtisseurs       → Éveillés
   Triple égalité              → Gardiens
   ============================================================ */
function computeGuilde() {
  var e = scores.eveilles;
  var g = scores.gardiens;
  var b = scores.batisseurs;

  if (e === g && g === b) return 'gardiens';
  if (e === g && e > b)   return 'gardiens';
  if (g === b && g > e)   return 'gardiens';
  if (e === b && e > g)   return 'eveilles';
  if (e > g && e > b)     return 'eveilles';
  if (g > e && g > b)     return 'gardiens';
  return 'batisseurs';
}

/* ============================================================
   INIT
   ============================================================ */
setBackground('intro');
