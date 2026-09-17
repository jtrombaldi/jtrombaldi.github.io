// Intitulés officiels et sous-compétences : repris de l'annexe VI-1 (session 2026).
// `maitrise` : à renseigner honnêtement par le candidat (partielle / bonne / excellente).
export type CompetenceId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

export interface Competence {
  id: CompetenceId;
  titre: string;
  court: string;
  sous: string[];
  maitrise: 'à définir' | 'partielle' | 'bonne' | 'excellente';
}

export const competences: Competence[] = [
  {
    id: 'C1', titre: 'Gérer le patrimoine informatique', court: 'Patrimoine informatique', maitrise: 'à définir',
    sous: [
      'Recenser et identifier les ressources numériques',
      'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
      "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
      "Vérifier les conditions de la continuité d'un service informatique",
      'Gérer des sauvegardes',
      "Vérifier le respect des règles d'utilisation des ressources numériques",
    ],
  },
  {
    id: 'C2', titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution", court: 'Incidents & assistance', maitrise: 'à définir',
    sous: [
      'Collecter, suivre et orienter des demandes',
      'Traiter des demandes concernant les services réseau et système, applicatifs',
      'Traiter des demandes concernant les applications',
    ],
  },
  {
    id: 'C3', titre: "Développer la présence en ligne de l'organisation", court: 'Présence en ligne', maitrise: 'à définir',
    sous: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
    ],
  },
  {
    id: 'C4', titre: 'Travailler en mode projet', court: 'Mode projet', maitrise: 'à définir',
    sous: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      'Planifier les activités',
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    ],
  },
  {
    id: 'C5', titre: 'Mettre à disposition des utilisateurs un service informatique', court: 'Mise à disposition de service', maitrise: 'à définir',
    sous: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      'Déployer un service',
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    id: 'C6', titre: 'Organiser son développement professionnel', court: 'Développement professionnel', maitrise: 'à définir',
    sous: [
      "Mettre en place son environnement d'apprentissage personnel",
      'Mettre en œuvre des outils et stratégies de veille informationnelle',
      'Gérer son identité professionnelle',
      'Développer son projet professionnel',
    ],
  },
];
