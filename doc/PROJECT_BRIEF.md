# PROJECT_BRIEF.md — Portfolio E5 BTS SIO SISR
*Document de passation — Source de vérité du projet*
*Généré le 17 septembre 2026 — À transmettre à Claude Code tel quel*

---

## 1. Contexte et objectif du portfolio

### Candidat

- **Nom** : Jean-Toussaint Rombaldi
- **Formation** : BTS SIO — Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
- **Établissement** : à compléter avant le développement
- **Alternance** : IPKONEKT (anciennement BugBusters) — secteur réseau, connectivité, téléphonie d'entreprise, support technique
- **Trajectoire** : BTS → BUT Réseaux & Télécommunications → école d'ingénieur

### L'épreuve E5

Épreuve orale de 40 minutes (CCF) — *Support et mise à disposition de services informatiques* :

- **10 min** : présentation du parcours de professionnalisation par le candidat, en s'appuyant sur le portfolio
- **30 min** : échange avec le jury

Le jury consulte le portfolio **avant et pendant** l'épreuve. L'accessibilité en format électronique est **obligatoire et de la seule responsabilité du candidat**.

- Portfolio inaccessible pendant l'épreuve = **−10 points**
- Absence du tableau de synthèse officiel = **−2 points**

### Rôle du portfolio

C'est le support de présentation officiel de l'épreuve E5. Il doit :

1. Retracer le parcours de professionnalisation
2. Décrire les réalisations couvrant les 6 compétences du bloc E5
3. Permettre au jury de naviguer rapidement vers chaque réalisation
4. Servir de fil conducteur pendant les 10 minutes de présentation
5. Fournir de la matière pour les 30 minutes d'échange

C'est avant tout un **document probatoire** destiné à un jury technique. La sobriété, la clarté et la navigabilité priment sur l'esthétique.

### Règle spécifique sur la première année de BTS

**Les réalisations de première année (TPs, projets de cours) ne doivent jamais figurer comme réalisations professionnelles ou personnelles dans le portfolio.**

En revanche — et c'est une nuance importante à ne pas perdre — **les compétences, connaissances et technologies acquises pendant ces TPs de première année peuvent être mobilisées dans le texte** pour expliquer :
- la progression du candidat (pourquoi il maîtrise telle techno aujourd'hui)
- ses choix techniques sur une réalisation réelle
- le contexte d'une réalisation personnelle ou professionnelle de 2ème année

Concrètement : on n'inclut jamais "TP Active Directory" comme fiche projet, mais une fiche projet de 2ème année peut dire *"j'ai pu configurer rapidement ce contrôleur de domaine grâce aux bases acquises en TP durant ma première année"*. C'est un élément de contexte/progression, jamais une réalisation à part entière.

---

## 2. Architecture globale du site

### Pages retenues (6 pages — ni plus, ni moins)

```
1. Accueil
2. Parcours
3. Compétences E5
4. Réalisations  ← page centrale
5. Veille technologique
6. Tableau de synthèse
```

### Pages volontairement exclues et motifs

| Page exclue | Motif |
|---|---|
| À propos | Redondant avec Parcours |
| Contact | Inutile — le jury a le candidat en face |
| Compétences générales | Non demandé dans le référentiel E5 |
| Projet professionnel | Intégré en 2 lignes dans Parcours |
| Blog / actualités | Hors périmètre E5 |

---

## 3. Détail de chaque page

### Page 1 — Accueil

**Objectif** : Créer une première impression professionnelle et orienter immédiatement le jury vers l'essentiel.

**Ce que le jury doit comprendre en 30 secondes** : qui est ce candidat, quelle option il prépare, comment naviguer.

**Informations à afficher (dans l'ordre)** :
1. Nom, prénom
2. BTS SIO — Option SISR — Année en cours
3. Établissement + entreprise d'alternance (IPKONEKT)
4. Une phrase d'accroche (1 ligne max — ce que le candidat sait faire, pas ce qu'il veut faire)
5. Navigation claire vers les 5 autres pages
6. **Lien direct vers le Tableau de synthèse** (raccourci prioritaire — le jury le cherchera en premier)

**Emplacement prévu pour animation** (phase design ultérieure) : animation d'introduction sobre — réseau, flux ou serveur qui s'initialise.

**À ne pas inclure** : photo, réseaux sociaux, CV téléchargeable, biographie longue.

---

### Page 2 — Parcours

**Objectif** : Contextualiser le profil en 60 secondes. Donner du sens à la trajectoire.

**Ce que le jury doit comprendre en 30 secondes** : d'où vient ce candidat, qu'a-t-il fait concrètement pendant sa formation.

**Informations à afficher (dans l'ordre)** :
1. Formation actuelle (BTS SIO SISR, dates, établissement)
2. Expériences professionnelles — pour chaque : entreprise, période, missions en 3 bullets maximum
   - IPKONEKT : réseau, téléphonie Keyyo, support technique, logistique équipements
3. Projet professionnel : 2-3 lignes max (BUT R&T, puis école d'ingénieur)
4. Environnement technologique global : liste courte des techs maîtrisées (ancrage, pas un CV)

**À ne pas inclure** : bac, collège, loisirs, centres d'intérêt, anecdotes personnelles.

**Note** : cette page doit être la plus courte. Le jury n'y stagne pas, mais elle ancre le profil.

**Rappel** : les compétences acquises en 1ère année peuvent être mentionnées ici en une phrase pour contextualiser la progression (voir section 1 — règle sur la 1ère année), mais aucun TP ne doit être listé comme une expérience.

---

### Page 3 — Compétences E5

**Objectif** : Montrer d'un seul coup d'œil que les 6 compétences du bloc sont couvertes.

**Ce que le jury doit comprendre en 30 secondes** : ce candidat a travaillé sur toutes les compétences requises.

**Informations à afficher** :
1. Les 6 compétences du référentiel, en cards ou en grille
2. Pour chaque compétence : niveau de maîtrise honnête (partielle / bonne / excellente) — **ne pas gonfler**
3. Pour chaque compétence : lien direct vers la ou les réalisations qui la démontrent
4. Indicateur visuel de couverture (toutes les compétences doivent être couvertes — pénalité sinon)

**Les 6 compétences E5 (intitulés officiels)** :
- C1 — Gérer le patrimoine informatique
- C2 — Répondre aux incidents et aux demandes d'assistance et d'évolution
- C3 — Développer la présence en ligne de l'organisation
- C4 — Travailler en mode projet
- C5 — Mettre à disposition des utilisateurs un service informatique
- C6 — Organiser son développement professionnel

**À ne pas inclure** : barres de progression en pourcentage (subjectives et non crédibles), logos technos sans contexte.

**Emplacement prévu pour animation** (phase design) : micro-icône animée par compétence, cohérente avec son domaine.

---

### Page 4 — Réalisations (page centrale)

**Objectif** : C'est la page la plus importante. Elle contient toutes les fiches projets. Le jury y passe le plus de temps.

**Ce que le jury doit comprendre en 30 secondes** : combien de réalisations, quelles compétences elles couvrent, comment accéder à chacune directement.

**Structure de la page** :
- Vue liste ou galerie de toutes les réalisations retenues
- **Filtre par compétence E5** (cliquer sur "C2" → affiche uniquement les réalisations concernées)
- **Filtre par contexte** : professionnel / personnel
- Chaque réalisation = une fiche dédiée (voir section 5 — Structure d'une fiche)

**Emplacement prévu pour animation** (phase design) : transition vers chaque fiche avec une animation thématique correspondant au type de réalisation (voir section 7).

---

### Page 5 — Veille technologique

**Objectif** : Démontrer la compétence C6 de manière concrète et régulière.

**Ce que le jury doit comprendre en 30 secondes** : ce candidat fait une veille active, structurée, avec des sources sérieuses et une réflexion personnelle.

**Informations à afficher (dans l'ordre)** :
1. Méthode de veille : outils utilisés (Feedly, flux RSS), fréquence, organisation (dossier "Veille IT")
2. Sources configurées : ANSSI, IT-Connect, BleepingComputer, Next INpact, The Register, Ars Technica
3. Thèmes surveillés : cybersécurité, infrastructure Linux, réseau, failles CVE — cohérents avec SISR
4. **Fiches de veille personnelles** : 4 à 6 articles maximum, pour chacun :
   - Titre + source + date
   - Résumé en 3-4 lignes
   - **Apport personnel** : ce que ça m'a appris, comment je l'ai appliqué ou envisage de l'appliquer

**À ne pas inclure** : flux RSS live intégré (peut bugger pendant l'oral), liste d'articles sans analyse personnelle (ne prouve rien).

**Règle jury** : la veille sans analyse personnelle vaut zéro. Le jury cherche une réflexion, pas une liste de liens.

**Emplacement prévu pour animation** (phase design) : animation de flux d'informations sobre.

---

### Page 6 — Tableau de synthèse

**Objectif** : Répondre à l'exigence officielle du référentiel. Accessible en 1 clic depuis l'accueil.

**Ce que le jury doit comprendre en 30 secondes** : toutes les réalisations listées, les compétences cochées, les périodes indiquées.

**Informations à afficher** :
1. Tableau de synthèse officiel (format conforme à l'annexe 8-1 fournie pour l'épreuve E5 2025 — document déjà transmis par le candidat en amont de ce brief)
2. Lien de téléchargement du fichier .xlsx officiel
3. URL du portfolio bien visible (exigence du référentiel)

**Colonnes du tableau officiel** (telles que fournies dans le document source) :
- Intitulé de la réalisation + documents/productions associés
- Période (JJ/MM/AA au JJ/MM/AA)
- C1 — Gérer le patrimoine informatique
- C2 — Répondre aux incidents
- C3 — Développer la présence en ligne
- C4 — Travailler en mode projet
- C5 — Mettre à disposition un service
- C6 — Organiser son développement professionnel

---

## 4. Réalisations retenues — Liste définitive

### Réalisations PRINCIPALES (à figurer obligatoirement dans le portfolio)

---

#### R1 — Déploiement et mise en service de solutions réseau fibre et backup 4G (IPKONEKT)

**Statut** : confirmée — réalisation professionnelle en cours (2ème année)

**Compétences E5** : C1, C2, C5

**Résumé** : Préparation, configuration et mise en service de routeurs fibre pour des clients entreprises. Mise en place de solutions backup 4G pour assurer la continuité de service. Vérification du fonctionnement, tests avant expédition ou mise en production. Intègre également la préparation/logistique des équipements (réception, association aux clients, vérification des configurations) — fusionnée ici plutôt qu'en fiche séparée.

**Ce qui est confirmé** :
- Mission réelle chez IPKONEKT
- Inclut : configuration routeurs, tests de bascule 4G, vérification accès Internet, association équipements/clients

**Preuves à collecter** :
- Schéma d'architecture d'une installation type (anonymisé)
- Procédure de configuration rédigée (même courte)
- Checklist de tests avant expédition (à créer si elle n'existe pas formellement)
- Capture de l'interface de configuration du routeur (anonymisée)
- Exemple documenté de test de bascule 4G : délai observé, méthode, résultat
- Attestation ou certificat de travail IPKONEKT mentionnant ces missions

**Questions jury prévisibles** :
- "Comment vous assurez-vous qu'un équipement est correctement associé au bon client avant expédition ?"
- "Comment avez-vous vérifié que le basculement 4G fonctionnait ? Quelle est la latence observée ?"
- "Quelle est la différence entre une route statique et dynamique dans ce contexte ?"

---

#### R2 — Mise en service et support de la téléphonie professionnelle Keyyo (IPKONEKT)

**Statut** : confirmée — réalisation professionnelle en cours (2ème année)

**Compétences E5** : C2, C5

**Résumé** : Configuration et mise en service à distance de téléphones fixes professionnels. Association des téléphones avec les lignes et services Keyyo. Vérification des appels entrants et sortants. Assistance lors de certaines mises en service.

**Décision de fusion — à trancher par le candidat** : cette réalisation peut être fusionnée avec R1 en une seule fiche "Déploiement et mise en service d'équipements réseau et téléphonie d'entreprise" si le volume de preuves disponibles pour R2 seule est insuffisant pour une fiche autonome. Sinon, elle reste séparée pour donner de la matière supplémentaire à l'oral (compétence 2 renforcée sur un système différent).

**Preuves à collecter** :
- Capture de l'interface Keyyo (configuration d'une ligne, association téléphone/utilisateur)
- Procédure de mise en service rédigée (une page suffit)
- Exemple de vérification d'appels documenté (entrant, sortant, transfert)
- Si possible : échange écrit avec un utilisateur ou technicien assisté

---

#### R3 — Diagnostic et résolution d'incidents réseau et téléphonie (IPKONEKT)

**Statut** : confirmée — réalisation professionnelle en cours (2ème année)

**Compétences E5** : C2

**Résumé** : Diagnostic de problèmes réseau ou téléphonie chez les clients IPKONEKT. Vérification des configurations. Recherche de causes de dysfonctionnement. Assistance aux utilisateurs et aux techniciens.

**Exigence critique** : cette fiche doit impérativement contenir au moins **un exemple d'incident documenté de bout en bout** : problème signalé → méthode de diagnostic → solution appliquée → communication avec l'interlocuteur → vérification de résolution. Sans ça, la fiche reste vague et le jury le remarquera.

**Ce qui est confirmé** :
- Mission réelle chez IPKONEKT
- Pas encore de compte-rendu formalisé existant — à créer dès maintenant

**Preuves à collecter** :
- Rédiger immédiatement une fiche d'intervention pour le prochain incident traité (date, problème signalé, diagnostic, solution, résultat)
- Procédure de diagnostic type pour un incident réseau récurrent (ex. : client sans accès Internet)
- Procédure de diagnostic type pour un incident Keyyo récurrent (ex. : téléphone non enregistré)
- Si un outil de ticketing existe chez IPKONEKT : capture d'un ticket avec le nom du candidat

---

#### R4 — Automatisation de la production de rapports PowerPoint pour un client externe (Animalis)

**Statut** : confirmée — réalisation personnelle / freelance terminée (novembre 2025)

**Compétences E5** : C4, C5

**Résumé** : Mission freelance pour un client externe (Animalis). Analyse d'un fichier Excel contenant des données de campagnes d'influence Instagram. Développement d'un script Python générant automatiquement des slides PowerPoint (une slide de synthèse + une par ville), avec respect de la charte graphique Animalis (rouge #E30613, blanc). Interface web HTML/JS pour utilisateurs non-techniques. Scripts d'installation cross-platform (install.bat / install.sh) et documentation complète (README). Développement final transféré vers Claude Code (terminal).

**Technologies** : Python, python-pptx, pandas, openpyxl, HTML/CSS/JS

**Ce qui est confirmé** :
- Réalisation terminée et livrée
- Client réel (Animalis)
- Interface web produite
- Documentation rédigée

**Preuves à collecter** :
- Mail ou message du client exprimant le besoin initial (même WhatsApp ou email informel)
- Retour du client sur le livrable (même une phrase par écrit)
- Captures du script Python en action
- Capture de l'interface web
- Exemple de fichier PowerPoint généré (anonymisé si données sensibles)
- README ou documentation rédigée
- Scripts d'installation (install.bat / install.sh)

**Point de vigilance** : le jury va demander à voir le livrable fonctionner. Avoir une version démontrable est indispensable — sans démo, la réalisation perd beaucoup de sa valeur probatoire.

---

#### R5 — Mise en place d'un système de veille technologique orienté cybersécurité et infrastructure

**Statut** : confirmée — réalisation personnelle en cours

**Compétences E5** : C6

**Résumé** : Setup Feedly avec compte dédié (non étudiant, pour éviter la perte d'accès en fin de formation), dossier "Veille IT", sources SISR configurées (ANSSI, IT-Connect, BleepingComputer, Next INpact, The Register, Ars Technica). Rédaction de fiches de veille personnelles avec analyse.

**Ce qui est confirmé** :
- Feedly configuré avec sources sérieuses
- Dossier "Veille IT" créé

**Ce qui reste à faire** :
- Rédiger 4 à 6 fiches de veille personnelles avec analyse (voir format page 5)
- Thèmes prioritaires : sécurité réseau, Linux, virtualisation, protocoles, failles CVE, infrastructures

---

### Réalisations SECONDAIRES (fortement recommandées — conditionnées à leur réalisation effective)

---

#### R6 — Déploiement d'un dashboard de cybersécurité sur infrastructure personnelle

**Statut** : en cours — conditionnée à R7 (homelab)

**Compétences E5** : C5, C6

**Résumé** : Application web Flask avec interface dark theme centralisant 3 outils cybersécurité : géolocalisation d'IPs (ipinfo.io), vérification DNS (Google DoH), réputation d'URLs (VirusTotal v3). 3 onglets, déployée sur VM Debian. Développée à partir de 5 TPs Python de 1ère année (les TPs eux-mêmes ne sont **pas** inclus dans le portfolio — seul le dashboard final, en tant que projet perso assemblé, constitue la réalisation, conformément à la règle de la section 1).

**Technologies** : Python, Flask, python-dotenv, APIs REST (ipinfo.io, Google Public DNS, VirusTotal v3)

**Condition d'inclusion** : le service doit être déployé et accessible via une URL publique au moment de l'oral. S'il tourne uniquement en local sur une machine, il ne peut pas être défendu de manière crédible.

**Preuves à collecter (dès que le homelab existe)** :
- URL d'accès au dashboard (IP publique avec port ou nom de domaine)
- Captures des 3 onglets fonctionnels avec de vraies clés API configurées
- Schéma d'architecture du déploiement (VM, port forwarding, reverse proxy si applicable)
- Rapport de tests basique : 5 IPs testées, 5 URLs testées, résultats

---

#### R7 — Administration d'un serveur Linux personnel (Homelab)

**Statut** : projet planifié — matériel non encore acheté au moment de rédaction de ce brief

**Compétences E5** : C1, C5, C6

**Résumé** : Achat d'un PC portable d'occasion (~150€), installation de Linux bare metal (remplacement complet du système), déploiement de services : dashboard Flask cybersécurité (R6), cloud photo/vidéo personnel (type Nextcloud avec sync automatique et chargement à la demande), accès distant sécurisé depuis n'importe quel appareil via ouverture de port et sécurisation.

**Technologies envisagées** : Linux, probablement Docker, reverse proxy (Nginx ou Caddy), Nextcloud ou solution custom, port forwarding sécurisé, SSH, fail2ban, HTTPS

**Condition d'inclusion** : le serveur doit exister et fonctionner avant l'oral. C'est la priorité n°1 de la 2ème année.

**À ne pas inventer** : aucun contenu, capture ou schéma relatif à ce projet ne doit figurer dans le portfolio tant que le matériel n'est pas en place et fonctionnel.

**Preuves à collecter dès que le matériel est en place** :
- Photo du serveur physique
- Capture de `uname -a`, `df -h`, `systemctl list-units`
- Schéma d'architecture réseau du homelab (serveur, box, port forwarding, services exposés)
- Procédure d'accès distant documentée (SSH, VPN ou autre)
- Politique de sauvegarde rédigée + preuve d'une sauvegarde réalisée
- Capture du cloud photo/vidéo fonctionnel depuis un appareil externe

---

#### R8 — Contribution à la présence numérique d'une organisation

**Statut** : à construire — priorité absolue pour la 2ème année

**Compétences E5** : C3

**Contexte** : C3 est la seule compétence sans aucune couverture dans le profil actuel. La laisser vide expose à une évaluation "non évaluable" sur cette compétence, ce qui plafonne la note globale.

**Options concrètes pour créer cette réalisation** :

- **Option A (prioritaire)** : Via IPKONEKT — proposer de contribuer à leur site web ou page de services. Même une mise à jour de contenu, l'ajout d'une page, ou la vérification des mentions légales suffit si c'est documenté.
- **Option B** : Via le portfolio lui-même — documenter sa mise en ligne comme réalisation : hébergeur, configuration DNS, HTTPS, accessibilité, mentions légales. Défendable si rigoureux.
- **Option C** : Créer une page web simple pour un projet perso avec domaine, SSL, hébergement documenté.

**Preuves à collecter selon l'option choisie** :
- Captures avant/après si modification d'un site existant
- Configuration DNS documentée
- Certificat SSL visible (HTTPS dans l'URL)
- Mentions légales rédigées et accessibles
- Rapport de visibilité basique (Google Search Console ou équivalent si applicable)

---

### Réalisations EXCLUES (décision définitive)

| Réalisation | Motif d'exclusion |
|---|---|
| TPs de cours de 1ère année (GLPI, Active Directory, RAID, Cybersécurité, Minecraft/Paper) | Exercices guidés — non recevables comme réalisations E5. Les compétences acquises restent mobilisables en contexte (voir section 1) |
| Script D4 (automatisation alternance) | Non livré, aucune compétence démontrable |
| Jeu Roblox / Dream Game | Hors référentiel technologique SISR, aucun livrable |
| Outil achat/revente Vinted | Zéro code fonctionnel — à reconsidérer uniquement si code existant avant l'oral |
| Logistique technique IPKONEKT (réception/expédition) | Fusionnée dans R1 — ne justifie pas une fiche séparée |

---

## 5. Structure d'une fiche projet (modèle réutilisable)

Chaque réalisation doit suivre ce modèle. Les rubriques sont marquées **[OBL]** (obligatoire) ou **[OPT]** (optionnel).

```
[OBL] EN-TÊTE
- Titre de la réalisation
- Contexte : professionnel / personnel / freelance
- Période
- Compétences E5 mobilisées (badges cliquables → filtres page Réalisations)

[OBL] 1. Contexte
Pourquoi ce projet existe. 2-3 lignes max.

[OBL] 2. Besoin / Problématique
Quel problème concret était à résoudre. Le jury cherche : est-ce que le candidat comprend le besoin avant de foncer sur la technique ?

[OBL] 3. Objectifs
Ce qui devait être produit/livré. En bullets, pas en prose.

[OBL] 4. Environnement technique
Matériel, OS, logiciels, langages, protocoles. En liste ou tags. Doit être cohérent avec l'annexe II.E du diplôme.

[OBL si réseau/infra, OPT sinon] 5. Architecture / Schéma
Un schéma vaut mille mots pour un jury SISR. Même simple, il montre que l'architecture a été pensée avant d'être construite.
Emplacement prévu pour animation thématique (phase design).

[OBL] 6. Étapes réalisées
Ce que le candidat a fait concrètement, dans l'ordre. Pas ce que le projet fait — ce que lui a fait. Rubrique la plus importante pour isoler la contribution personnelle.

[OBL] 7. Difficultés rencontrées
2-3 problèmes concrets. Un candidat sans difficultés perd en crédibilité.

[OBL] 8. Solutions apportées
Comment chaque difficulté a été résolue. Montre la démarche de résolution de problème.

[OBL] 9. Compétences E5 mobilisées
Pour chaque compétence cochée : une phrase courte expliquant concrètement comment elle a été mobilisée. Pas juste une case cochée.

[OBL] 10. Preuves / Captures d'écran
Minimum 2-3 captures annotées. Sans preuves, la réalisation n'est pas crédible.
Captures de : configuration, résultat, console, interface, etc.

[OPT] 11. Documentation produite
Si un README, compte-rendu, rapport a été produit : lien ou intégration.

[OBL] 12. Bilan personnel
Ce qui a été appris. Ce qui serait fait différemment. Niveau de maîtrise honnête.
C'est ce qui distingue un candidat qui a exécuté d'un candidat qui a réfléchi.
Peut mentionner ici, brièvement, les bases acquises en 1ère année qui ont facilité la réalisation (voir section 1) — sans jamais présenter le TP correspondant comme une réalisation.
```

**À ne jamais inclure dans une fiche** :
- Code source complet (trop long, pas lisible — mettre un lien GitHub si nécessaire)
- Tutoriels recopiés
- Captures sans annotation

---

## 6. Contraintes liées aux preuves, à l'anonymisation et aux données professionnelles

### Anonymisation

- Toutes les captures d'écran issues d'environnements clients IPKONEKT doivent être **anonymisées** : noms de clients, adresses IP publiques réelles, numéros de série, coordonnées.
- Les schémas réseau doivent utiliser des adresses IP génériques (ex. : 192.168.x.x) ou masquer les identifiants spécifiques.
- Les interfaces Keyyo montrant des numéros de téléphone clients doivent être floutées.

### Ce qui ne doit jamais être inventé

- Aucun schéma, capture, procédure ou document ne doit être inventé ou reconstitué de mémoire.
- Si une preuve n'existe pas encore, la section correspondante reste vide avec la mention "à compléter" plutôt qu'un contenu fictif.
- Les niveaux de maîtrise des compétences doivent être honnêtes — ne pas gonfler.
- Un projet non réalisé (R7 tant que le matériel n'existe pas) ne doit jamais être présenté comme une réalisation actuelle.

### Ce qui est confirmé vs à compléter

| Réalisation | Statut des preuves |
|---|---|
| R1 — Routeurs fibre + backup 4G | À constituer — schéma et checklist à créer |
| R2 — Téléphonie Keyyo | À constituer — procédure à rédiger |
| R3 — Support technique | À constituer — fiche d'intervention à rédiger dès maintenant |
| R4 — Animalis | Partiellement disponible — retrouver le retour client |
| R5 — Veille | À compléter — fiches d'analyse à rédiger |
| R6 — Dashboard Flask | À constituer — conditionné au déploiement sur homelab |
| R7 — Homelab | Rien à ce stade — matériel non encore acheté |
| R8 — Présence en ligne | Rien à ce stade — réalisation à créer |

---

## 7. Animations et visualisations prévues (phase design ultérieure)

**Intention générale** : des animations 3D ou interactives ciblées, uniquement si elles servent le propos. Professionnelles, fluides, bien définies. Pas d'effet gadget. Le portfolio doit rester crédible pour un jury technique.

**La stack technique et le design final seront choisis avec Claude Code — ne pas décider ici.**

### Animations envisagées par contexte

| Page / transition | Animation envisagée |
|---|---|
| Accueil | Animation d'introduction sobre : réseau, flux ou serveur qui s'initialise |
| Transition → réalisation câblage/réseau (R1) | Câbles Ethernet qui se branchent proprement dans une baie réseau |
| Transition → réalisation serveur/virtualisation (R6, R7) | Serveur ou rack qui s'allume progressivement |
| Transition → réalisation réseau | Visualisation animée d'un schéma réseau avec flux de données |
| Transition → réalisation sécurité | Flux réseau, effet pare-feu ou verrouillage |
| Page Veille | Animation de flux d'informations, sobre |
| Page Compétences E5 | Micro-icônes animées par compétence |

### Contraintes sur les animations

- Ne jamais nuire à la lisibilité du contenu
- Temps de chargement acceptable (jury en déplacement avec connexion variable)
- Désactivables si elles posent problème technique
- Ne doivent pas ralentir la navigation entre les pages
- Restent une intention, pas une obligation — l'implémentation peut être partielle selon les délais

---

## 8. Contraintes UX importantes pour le jury

1. **Navigabilité en moins de 3 clics** : depuis n'importe quelle page, le jury doit pouvoir atteindre n'importe quelle réalisation en maximum 3 clics.
2. **Lien direct vers le Tableau de synthèse** accessible depuis l'accueil (raccourci visible, pas enfoui dans la navigation).
3. **Filtres sur la page Réalisations** : par compétence E5 et par contexte (professionnel / personnel).
4. **Responsive obligatoire** : le jury peut consulter le portfolio sur n'importe quel appareil (ordinateur du centre d'examen, tablette, téléphone).
5. **Aucun compte requis** : le portfolio est public et accessible sans authentification.
6. **URL stable** : l'URL ne doit pas changer entre la déclaration au jury et le jour de l'épreuve.
7. **Temps de chargement** : chaque page doit s'afficher en moins de 3 secondes sur une connexion standard.
8. **Contenu affiché sans interaction excessive** : pas de scroll infini obligatoire, pas de contenu caché derrière des hover non évidents.
9. **Lisibilité du texte** : taille de police minimale 16px pour le corps du texte. Contraste suffisant (WCAG AA minimum).
10. **Captures d'écran annotées** : chaque capture doit être accompagnée d'une légende et, si nécessaire, d'annotations visuelles (flèches, encadrés) pour guider le regard du jury.

---

## 9. Fonctionnalités nécessaires

### Fonctionnalités obligatoires

- Navigation entre les 6 pages
- Filtres sur la page Réalisations (par compétence E5, par contexte)
- Lien de téléchargement du tableau de synthèse (.xlsx)
- Affichage des captures d'écran avec zoom possible
- Affichage des schémas réseau/architecture
- Badges de compétences cliquables sur chaque fiche (lien vers la page Compétences)
- Indicateur de couverture des compétences (page Compétences E5)

### Fonctionnalités souhaitables

- Ancre directe vers chaque réalisation depuis la page Compétences (ex. : cliquer sur C2 → liste des fiches R1, R2, R3)
- Mode impression / export PDF de chaque fiche (pour remettre au jury si demandé)
- Animations thématiques sur les transitions (voir section 7)

### Fonctionnalités hors périmètre (à ne pas implémenter)

- Formulaire de contact
- Système de commentaires
- Authentification
- Back-office ou CMS
- Statistiques de visite (sauf si utile pour R8 — présence en ligne)

---

## 10. Stratégie de l'oral (déroulé des 10 minutes)

| Timing | Page affichée | Contenu |
|---|---|---|
| 0:00 – 1:00 | Accueil | Se présenter en une phrase. Annoncer le plan des 10 minutes. Prendre le contrôle de la navigation. |
| 1:00 – 2:00 | Parcours | 30 sec sur la formation, 30 sec sur l'alternance IPKONEKT. Ne pas s'attarder. |
| 2:00 – 4:00 | Réalisation R4 (Animalis) | Projet le plus abouti, client réel, livrable réel. Pose la crédibilité. |
| 4:00 – 6:00 | Réalisation R1 (Routeurs + backup 4G) | Compétence SISR cœur de métier. Technique réseau. |
| 6:00 – 8:00 | Réalisation R6 ou R7 (Dashboard / Homelab) | Initiative personnelle, démarche autonome SISR. |
| 8:00 – 9:00 | Veille technologique | 1-2 sujets de veille cités avec analyse personnelle. |
| 9:00 – 10:00 | Compétences E5 ou Accueil | Rappel couverture des compétences. Ouverture sur BUT R&T. Rendre la parole au jury. |

**Règle d'or** : présenter 3 réalisations maximum à l'oral (pas toutes). Choisies pour leur complémentarité sur les compétences E5.

**Format de présentation de chaque réalisation (2 minutes)** :
- Contexte (15 sec)
- Ce que j'ai fait concrètement (45 sec)
- Difficultés rencontrées et solutions (30 sec)
- Compétences mobilisées (15 sec)

---

## 11. Couverture finale des compétences E5

| Compétence | Réalisations qui la couvrent | Niveau de couverture |
|---|---|---|
| C1 — Patrimoine informatique | R1, R7 | Solide si homelab réalisé avant l'oral |
| C2 — Incidents et assistance | R1, R2, R3 | Très solide |
| C3 — Présence en ligne | R8 | **À construire — critique** |
| C4 — Mode projet | R4 | Solide (Animalis) |
| C5 — Mise à disposition service | R1, R2, R4, R6, R7 | Très solide |
| C6 — Développement professionnel | R5, R6, R7 | Solide si fiches de veille rédigées |

---

## 12. Questions et décisions restantes

### Décisions à prendre avant de commencer le développement

1. **Stack technique** : à décider avec Claude Code. Aucune contrainte imposée ici — le choix doit prioriser la stabilité, la rapidité de chargement et la facilité de mise à jour du contenu.

2. **Hébergement** : à décider. L'URL doit être stable et accessible pendant toute la durée de la formation. Options possibles : GitHub Pages, Vercel, Netlify, VPS propre (si homelab disponible). Ne pas utiliser un hébergement qui expire avant la date de l'épreuve.

3. **Nom de domaine** : à décider. Un domaine personnalisé est un plus (cohérence professionnelle, facilité de communication au jury). Non obligatoire mais recommandé.

4. **Fusion R1/R2** : décider si les réalisations routeurs fibre (R1) et téléphonie Keyyo (R2) sont présentées comme deux fiches distinctes ou fusionnées. Dépend du volume de preuves disponibles pour R2.

5. **Option retenue pour R8 (présence en ligne)** : choisir entre Option A (contribution IPKONEKT), Option B (portfolio lui-même documenté), Option C (page web projet perso). Cette décision conditionne le contenu à produire.

6. **Niveau de réalité des animations** : confirmer avec Claude Code ce qui est techniquement faisable dans les délais sans alourdir le site. Les animations sont souhaitées mais jamais au détriment de la performance ou de la stabilité.

### Informations manquantes à compléter avant ou pendant le développement

- Nom de l'établissement (lycée / CFA)
- Dates précises de l'alternance IPKONEKT
- URL définitive du portfolio (à renseigner dans le tableau de synthèse officiel)
- Contenu des fiches de veille personnelles (à rédiger)
- Preuves R1, R2, R3 (à collecter chez IPKONEKT)
- Retour client Animalis (à retrouver pour R4)
- Statut du homelab (R7) et du dashboard Flask (R6) au moment du développement

### Avertissements pour Claude Code

- **Ne jamais inventer de contenu** pour une réalisation dont les preuves ne sont pas encore disponibles. Laisser un placeholder explicite.
- **Ne pas inclure les TPs de 1ère année** dans aucune section du portfolio en tant que réalisations — les connaissances acquises restent mobilisables comme contexte de progression (voir section 1), jamais comme fiche à part entière.
- **Ne pas présenter R7 (homelab) comme une réalisation existante** tant que le matériel n'est pas en place.
- **Le design final n'a pas encore été décidé** — ne pas faire de choix de couleurs, typographies ou identité visuelle sans validation du candidat.
- **Les animations sont une intention, pas une contrainte** — elles peuvent être implémentées progressivement ou partiellement selon les délais.

---

*Fin du PROJECT_BRIEF.md*
*Ce document est la source de vérité du projet. Toute décision prise lors du développement qui contredit ce brief doit être documentée et validée.*
