# STACK.md — Décisions techniques
*Étape 4 de la conception — 17 septembre 2026. Répond aux décisions 1, 2, 3 et 6 du PROJECT_BRIEF.md §12.*

## Contrainte directrice
Le portfolio doit être **en ligne dès maintenant et vivant toute l'année** : les réalisations de 2ᵉ année se bouclent au fil des mois. Chaque fiche naît en placeholder honnête et se remplit **sans toucher au code**. Tout le reste découle de ça.

## 1. Stack : Astro + Markdown + CSS natif
| Choix | Pourquoi |
|---|---|
| **Astro** (générateur de site statique) | Sortie = fichiers HTML/CSS purs → rien ne peut planter le jour J, chargement < 1 s. Zéro JavaScript par défaut ; on ajoute des « îlots » (filtres, animations) uniquement là où il en faut. Transitions de page natives intégrées. UI UX Pro Max a un profil `--stack astro`. |
| **Contenu en Markdown** (« content collections ») | Une réalisation = un fichier `r1.md` avec un en-tête typé : `statut`, `competences: [C1, C2, C5]`, `contexte: pro`, `periode`. Les filtres, la page Compétences, la couverture et le **tableau de synthèse se génèrent automatiquement** depuis ces en-têtes. Boucler un projet = éditer un fichier texte. |
| **CSS natif avec les tokens** du DESIGN_SYSTEM.md | Pas de Tailwind ni de framework : moins de dépendances, le design system est déjà écrit en variables CSS. |
| **Polices auto-hébergées** (Fontsource) | Aucune dépendance à Google le jour de l'oral. |
| **Service worker** (site consultable hors-ligne après 1ʳᵉ visite) | Filet contre une panne réseau au centre d'examen (−10 pts). |

Écartés : HTML pur (pas de modèle de contenu → 8 fiches + tableau ingérables à la main) · Next.js/React (JS lourd, complexité serveur inutile) · WordPress/CMS (exclu par le brief, risque d'hébergement).

Couche animation (plus tard, additive) : GSAP · Lottie · SVG/CSS pour les schémas · View Transitions. Voir DESIGN_SYSTEM.md §Mouvement.

## 2. Hébergement : GitHub Pages
| Critère brief | Réponse |
|---|---|
| URL stable toute l'année | Gratuit, sans date d'expiration, aucun changement de plan à craindre |
| Chargement < 3 s | CDN mondial, site statique |
| Facilité de mise à jour | `git push` → site republié automatiquement en ~1 min |
| Preuves R8-B | Historique git daté, certificat HTTPS émis pour ton domaine, config DNS faite par toi |
| Un seul compte | GitHub sert au code **et** à l'hébergement — un point de défaillance en moins |

Point d'attention : GitHub Pages gratuit exige un **dépôt public**. Le contenu est anonymisé de toute façon (brief §6) et le site est public par nature. Alternative si tu préfères un dépôt privé : **Cloudflare Pages** (gratuit, mêmes garanties).

Filets supplémentaires : **UptimeRobot** (alerte mail si le site tombe) · **copie locale** du site sur ton portable (`npx serve dist` marche sans réseau).

## 3. Nom de domaine : recommandé, à acheter par toi
- Format conseillé : `prenom-nom.fr` ou `jtrombaldi.fr` (~8 €/an chez OVH ou Gandi, registrars français).
- Pourquoi : cohérence pro, facile à dicter au jury, et **la config DNS + HTTPS que tu feras toi-même est une preuve C3 directe** (R8-B).
- Tu achètes, je te guide pour les enregistrements DNS (un `CNAME` + quatre `A`). Sans domaine, l'URL `pseudo.github.io/portfolio` fonctionne aussi — moins élégant, mais valide.

## 4. Animations : couche optionnelle (décision 6 du brief)
Slots réservés et tokens de mouvement déjà dans le design system. Interrupteur global `data-motion="off"` + `prefers-reduced-motion` dès le jour 1. Ordre d'ajout si le temps le permet : micro-interactions → fond du hero → flux SVG dans les schémas → transitions thématiques → 3D (seulement en dernier).

## Structure du projet (cible)
```
portfolio/
├── doc/                     brief, design system, stack, journal R8
├── prototype/conception/    livrables des étapes 1-3
├── src/
│   ├── content/
│   │   ├── realisations/    r1.md … r8.md   (statut: placeholder | en-cours | termine)
│   │   └── veille/          fiche-01.md …
│   ├── pages/               accueil, parcours, competences, realisations/[id], veille, synthese
│   ├── components/          nav, card, badge, filtres, tableau…
│   ├── styles/tokens.css    ← copie du DESIGN_SYSTEM.md
│   └── assets/schemas/      SVG exportés de draw.io
└── public/                  tableau .xlsx officiel, polices, manifest hors-ligne
```

## À installer, dans l'ordre (je le dis au fur et à mesure)
1. **Maintenant** : Node.js LTS — https://nodejs.org (ou `brew install node`). Git est déjà présent.
2. **Quand tu veux mettre en ligne** : un compte GitHub (gratuit).
3. **Quand tu veux le domaine** : achat chez OVH/Gandi (~8 €).
4. **Quand on attaque les schémas** : draw.io (web, rien à installer).
5. **Avant l'oral** : plugin Design de Claude (audit accessibilité).
