// The interest test, written for this project after Holland's RIASEC model.
// Each block offers one statement per type, in the order R, I, A, S, E, C.

export const SERIES = [
  {
    id: 'activites',
    title: "Ce que j'aime faire",
    blocks: [
      [
        'Réparer un objet cassé',
        'Résoudre une énigme',
        'Dessiner ou peindre',
        "Écouter quelqu'un qui a besoin de parler",
        'Convaincre un groupe de me suivre',
        'Ranger et classer des documents',
      ],
      [
        'Construire un meuble',
        'Faire une expérience scientifique',
        'Écrire une histoire ou un poème',
        'Expliquer une leçon à un camarade',
        'Organiser la vente de produits',
        'Tenir un budget au centime près',
      ],
      [
        'Cultiver un potager',
        'Lire un article sur une découverte',
        'Jouer de la musique ou chanter',
        'Accueillir et guider des visiteurs',
        'Diriger une équipe',
        'Remplir un tableau de chiffres',
      ],
      [
        'Conduire un engin ou une machine',
        'Chercher la cause d’un problème',
        'Prendre des photos ou filmer',
        "M'occuper d'enfants",
        'Négocier un prix',
        "Vérifier qu'un travail ne contient aucune erreur",
      ],
    ],
  },
  {
    id: 'qualites',
    title: 'Ce qui me ressemble',
    blocks: [
      [
        "J'ai des mains habiles pour bricoler",
        'Je pose beaucoup de questions',
        "J'ai plein d'idées originales",
        'On vient me confier ses soucis',
        "J'aime prendre les décisions",
        'Mes affaires sont toujours en ordre',
      ],
      [
        'Je préfère bouger que rester sur une chaise',
        "J'aime raisonner étape par étape",
        "Je m'exprime par l'art",
        "J'ai de la patience avec les autres",
        'Je sais trouver les mots pour convaincre',
        'Je remarque la moindre erreur',
      ],
      [
        "J'aime voir le résultat concret de mon travail",
        "J'observe longtemps avant d'agir",
        "La beauté d'un lieu ou d'une œuvre m'émeut",
        "J'aime agir en équipe pour aider",
        "Je n'ai pas peur de prendre des risques",
        'Je respecte les règles et les délais',
      ],
      [
        "J'ai de l'endurance physique",
        "J'aime les mathématiques et les sciences",
        "J'ai besoin de liberté pour créer",
        'Je sais expliquer simplement',
        "J'aime les défis et la compétition",
        "J'aime suivre une méthode précise",
      ],
    ],
  },
  {
    id: 'lieux',
    title: 'Où je me vois travailler',
    blocks: [
      [
        'Sur un chantier ou dans un atelier',
        'Dans un laboratoire',
        'Dans un studio ou une salle de spectacle',
        'Dans une école ou un centre social',
        'Dans un bureau de direction ou un magasin',
        'Dans un service comptable ou administratif',
      ],
      [
        'En plein air, à la campagne',
        'Dans un centre de recherche',
        'Dans une agence de création',
        'Dans un hôpital ou un dispensaire',
        'Dans une entreprise qui démarre',
        'Dans une banque',
      ],
    ],
  },
]

export const PROFILES = {
  R: {
    name: 'Réaliste',
    text: 'Tu aimes le concret : manipuler des outils, construire, réparer, travailler dehors ou avec des machines. Tu préfères agir plutôt que de longs discours, et voir le résultat de ton travail te rend fier.',
  },
  I: {
    name: 'Investigateur',
    text: "Tu aimes comprendre comment les choses fonctionnent. Observer, analyser, chercher la cause d'un problème : ta curiosité est ton moteur, et tu prends le temps de réfléchir avant de conclure.",
  },
  A: {
    name: 'Artistique',
    text: "Tu as besoin de t'exprimer et d'inventer. Dessin, musique, écriture, image : tu aimes créer quelque chose de nouveau et tu te sens à l'étroit quand tout est imposé.",
  },
  S: {
    name: 'Social',
    text: "Tu aimes être avec les autres et leur être utile : expliquer, soigner, conseiller, accompagner. On apprécie ton écoute, et tu te sens bien dans le travail d'équipe.",
  },
  E: {
    name: 'Entreprenant',
    text: "Tu aimes convaincre, décider et mener des projets. Les défis te motivent, tu n'as pas peur de prendre des risques et tu te vois volontiers à la tête d'une équipe ou d'une affaire.",
  },
  C: {
    name: 'Conventionnel',
    text: "Tu aimes l'ordre et la précision. Organiser, classer, vérifier, suivre une méthode : on peut compter sur toi pour un travail fiable, rendu à l'heure et sans erreur.",
  },
}
