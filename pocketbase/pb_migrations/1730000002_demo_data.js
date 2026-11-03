/// <reference path="../pb_data/types.d.ts" />

// Fictional exhibitors, domains and job sheets so that the site works out of the box.
// Every name here is invented; replace them from the dashboard with the real forum's content.

const CATEGORIES = [
  ["Universités", "A"],
  ["Grandes écoles", "B"],
  ["Centres de formation", "C"],
  ["Entreprises", "D"],
  ["Associations et ONG", "E"],
]

const EXHIBITORS = [
  ["A", 1, "Université Fanilo", "Licences et masters en sciences, droit, économie et lettres, sur trois campus."],
  ["A", 2, "Université des Hautes Terres", "Agronomie, sciences de la Terre et environnement, avec stages de terrain."],
  ["A", 3, "Université Catholique du Lac", "Gestion, communication, sciences sociales ; bourses sur critères sociaux."],
  ["B", 1, "École Supérieure du Numérique (ESN)", "Développement, réseaux, data et cybersécurité, en alternance dès la 3e année."],
  ["B", 2, "Institut Polytechnique Ravinala", "Ingénieurs en génie civil, électrique et industriel, en cinq ans."],
  ["B", 3, "École de Commerce Vatolahy", "Bachelor et MBA : marketing, finance, commerce international."],
  ["B", 4, "École Hôtelière Mandrosoa", "Cuisine, service, hébergement et tourisme, avec restaurant d'application."],
  ["C", 1, "Centre de Formation Agricole Tsiry", "Formations courtes en élevage, maraîchage et transformation."],
  ["C", 2, "Atelier des Métiers du Bâtiment", "Maçonnerie, électricité, plomberie : CAP et certificats en 6 à 18 mois."],
  ["C", 3, "Institut de Santé Fanasitranana", "Infirmiers, sages-femmes et aides-soignants, avec stages en hôpital."],
  ["D", 1, "Banque Vola Mahery", "Recrute des conseillers clientèle et des analystes crédit ; stages de fin d'études."],
  ["D", 2, "TeleNosy", "Opérateur télécom : techniciens réseau, développeurs, service client."],
  ["D", 3, "Groupe Agro Haingo", "Agro-industrie : production, qualité, logistique et commerce."],
  ["E", 1, "Association Jeunes et Avenir", "Accompagnement à l'orientation, ateliers CV et simulations d'entretien."],
  ["E", 2, "ONG Ala Maitso", "Reboisement et protection de la biodiversité : volontariat et emplois de terrain."],
]

const DOMAINS = [
  ["Numérique", ["I", "C", "R"]],
  ["Santé et social", ["S", "I"]],
  ["Agriculture et environnement", ["R", "I"]],
  ["Commerce et gestion", ["E", "C"]],
  ["Tourisme et hôtellerie", ["S", "E", "R"]],
  ["Bâtiment et industrie", ["R", "C"]],
  ["Arts et communication", ["A", "E"]],
  ["Éducation et recherche", ["S", "I", "A"]],
]

// [domain, name, summary, missions, studies, qualities, profiles]
const JOBS = [
  ["Numérique", "Développeur web", "Conçoit et programme des sites et applications utilisés au quotidien.",
    ["Traduire un besoin en fonctionnalités", "Écrire et tester du code", "Corriger les anomalies"],
    "Licence ou école d'informatique (Bac+3 à Bac+5)", ["Logique", "Curiosité", "Patience"], ["I", "C", "R"]],
  ["Numérique", "Technicien réseau", "Installe et entretient les réseaux informatiques et télécoms.",
    ["Câbler et configurer les équipements", "Surveiller le réseau", "Dépanner les utilisateurs"],
    "BTS ou licence réseaux et télécoms", ["Méthode", "Réactivité"], ["R", "C"]],
  ["Numérique", "Analyste de données", "Fait parler les chiffres pour aider une organisation à décider.",
    ["Collecter et nettoyer les données", "Construire des tableaux de bord", "Présenter ses conclusions"],
    "Master en statistique, mathématiques ou informatique", ["Rigueur", "Esprit critique"], ["I", "C"]],
  ["Santé et social", "Infirmier", "Soigne les patients et veille à leur confort, à l'hôpital ou en dispensaire.",
    ["Administrer les traitements", "Surveiller l'état des patients", "Rassurer les familles"],
    "Diplôme d'État d'infirmier (3 ans)", ["Empathie", "Sang-froid"], ["S", "I"]],
  ["Santé et social", "Sage-femme", "Accompagne la grossesse, l'accouchement et les premiers jours du bébé.",
    ["Suivre les futures mères", "Réaliser les accouchements", "Conseiller sur la santé du nouveau-né"],
    "Formation de sage-femme (4 à 5 ans)", ["Écoute", "Résistance"], ["S", "I"]],
  ["Santé et social", "Éducateur spécialisé", "Aide des enfants ou des adultes en difficulté à gagner en autonomie.",
    ["Construire un projet avec la personne", "Animer des activités", "Travailler avec les familles"],
    "Diplôme d'éducateur spécialisé (Bac+3)", ["Patience", "Écoute"], ["S", "A"]],
  ["Agriculture et environnement", "Agronome", "Conseille les agriculteurs pour produire mieux en préservant les sols.",
    ["Analyser les sols et les cultures", "Tester de nouvelles pratiques", "Former les producteurs"],
    "Ingénieur agronome (Bac+5)", ["Sens du terrain", "Pédagogie"], ["I", "R"]],
  ["Agriculture et environnement", "Technicien forestier", "Gère et protège les forêts, du reboisement à la surveillance.",
    ["Planter et entretenir les parcelles", "Inventorier les espèces", "Sensibiliser les riverains"],
    "BTS ou licence en foresterie", ["Endurance", "Observation"], ["R", "I"]],
  ["Agriculture et environnement", "Éleveur", "Élève des animaux et commercialise leur production.",
    ["Nourrir et soigner le troupeau", "Gérer l'exploitation", "Vendre la production"],
    "Formation agricole courte ou BTS production animale", ["Autonomie", "Persévérance"], ["R", "E"]],
  ["Commerce et gestion", "Conseiller clientèle bancaire", "Accompagne des particuliers et des entreprises dans leurs projets.",
    ["Ouvrir et suivre des comptes", "Proposer des crédits et placements", "Fidéliser les clients"],
    "Licence en banque, finance ou commerce", ["Aisance relationnelle", "Discrétion"], ["E", "C", "S"]],
  ["Commerce et gestion", "Comptable", "Tient les comptes d'une organisation et prépare ses bilans.",
    ["Enregistrer les opérations", "Préparer les déclarations", "Établir les bilans"],
    "BTS ou licence en comptabilité", ["Rigueur", "Discrétion"], ["C", "I"]],
  ["Commerce et gestion", "Chef de projet logistique", "Organise le transport et le stockage des marchandises.",
    ["Planifier les livraisons", "Négocier avec les transporteurs", "Optimiser les coûts"],
    "Master en logistique ou école de commerce", ["Organisation", "Réactivité"], ["E", "C"]],
  ["Tourisme et hôtellerie", "Guide touristique", "Fait découvrir un site, une région ou un parc à des visiteurs.",
    ["Préparer les circuits", "Commenter les visites", "Veiller à la sécurité du groupe"],
    "Formation en tourisme ; langues étrangères appréciées", ["Aisance à l'oral", "Culture générale"], ["S", "E", "A"]],
  ["Tourisme et hôtellerie", "Cuisinier", "Prépare les plats d'un restaurant, de l'entrée au dessert.",
    ["Préparer les produits", "Cuire et dresser les assiettes", "Respecter l'hygiène"],
    "CAP ou BTS cuisine", ["Créativité", "Résistance au stress"], ["R", "A"]],
  ["Tourisme et hôtellerie", "Réceptionniste d'hôtel", "Accueille les clients et gère les réservations.",
    ["Accueillir et renseigner", "Gérer le planning des chambres", "Encaisser les séjours"],
    "BTS tourisme ou hôtellerie", ["Sourire", "Langues étrangères"], ["S", "C"]],
  ["Bâtiment et industrie", "Électricien", "Installe et répare les réseaux électriques des bâtiments.",
    ["Lire les plans", "Poser les câbles et tableaux", "Contrôler la sécurité"],
    "CAP ou certificat d'électricité (6 à 18 mois)", ["Précision", "Prudence"], ["R", "C"]],
  ["Bâtiment et industrie", "Ingénieur génie civil", "Conçoit et suit la construction de routes, ponts et bâtiments.",
    ["Calculer les structures", "Diriger les chantiers", "Respecter budgets et délais"],
    "Diplôme d'ingénieur (Bac+5)", ["Sens des responsabilités", "Leadership"], ["R", "I", "E"]],
  ["Bâtiment et industrie", "Technicien qualité", "Vérifie que les produits respectent les normes à chaque étape.",
    ["Réaliser des contrôles", "Analyser les défauts", "Rédiger les procédures"],
    "BTS ou licence qualité", ["Rigueur", "Observation"], ["C", "R", "I"]],
  ["Arts et communication", "Graphiste", "Crée l'identité visuelle d'une marque : logos, affiches, sites.",
    ["Comprendre le message à faire passer", "Proposer des maquettes", "Préparer les fichiers d'impression"],
    "Licence ou école d'arts appliqués", ["Créativité", "Sens esthétique"], ["A", "E"]],
  ["Arts et communication", "Journaliste", "Enquête, vérifie et raconte l'actualité pour la presse, la radio ou le web.",
    ["Chercher et vérifier l'information", "Interviewer", "Écrire ou monter un sujet"],
    "Licence ou école de journalisme", ["Curiosité", "Esprit critique"], ["A", "I", "S"]],
  ["Arts et communication", "Chargé de communication", "Fait connaître une organisation et ses actions.",
    ["Animer les réseaux sociaux", "Organiser des événements", "Rédiger des communiqués"],
    "Licence en communication", ["Aisance relationnelle", "Créativité"], ["E", "A", "S"]],
  ["Éducation et recherche", "Enseignant", "Transmet des savoirs et accompagne la réussite des élèves.",
    ["Préparer les cours", "Animer la classe", "Évaluer et encourager"],
    "Licence puis formation d'enseignant", ["Pédagogie", "Patience"], ["S", "A", "I"]],
  ["Éducation et recherche", "Conseiller d'orientation", "Aide les jeunes à choisir une formation et un métier.",
    ["Mener des entretiens", "Faire passer des tests d'intérêts", "Informer sur les filières"],
    "Master en psychologie ou sciences de l'éducation", ["Écoute", "Neutralité"], ["S", "I"]],
  ["Éducation et recherche", "Chercheur en biologie", "Fait progresser les connaissances sur le vivant.",
    ["Concevoir des expériences", "Analyser les résultats", "Publier et présenter ses travaux"],
    "Doctorat en biologie (Bac+8)", ["Persévérance", "Curiosité"], ["I", "R"]],
]

migrate(
  (app) => {
    const save = (collectionName, data) => {
      const record = new Record(app.findCollectionByNameOrId(collectionName))
      for (const [key, value] of Object.entries(data)) record.set(key, value)
      app.save(record)
      return record
    }

    const halls = {}
    CATEGORIES.forEach(([name, hall], i) => {
      halls[hall] = save("categories", { name, hall, rank: i + 1 }).id
    })
    for (const [hall, booth, name, summary] of EXHIBITORS) {
      save("exhibitors", { name, category: halls[hall], booth, summary })
    }

    const domains = {}
    for (const [name, profiles] of DOMAINS) {
      domains[name] = save("domains", { name, profiles }).id
    }
    for (const [domain, name, summary, missions, studies, qualities, profiles] of JOBS) {
      save("jobs", { domain: domains[domain], name, summary, missions, studies, qualities, profiles })
    }
  },
  (app) => {
    for (const name of ["jobs", "domains", "exhibitors", "categories"]) {
      app.db().newQuery(`DELETE FROM ${name}`).execute()
    }
  },
)
