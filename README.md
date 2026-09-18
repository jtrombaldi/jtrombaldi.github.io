# Portfolio E5 — BTS SIO SISR

Portfolio professionnel de **Jean-Toussaint Rombaldi**, support officiel de l'épreuve E5 (BTS SIO, option SISR, session 2026).

🌐 En ligne : https://jtrombaldi.github.io

## Organisation du dépôt

| Dossier | Contenu |
|---|---|
| `doc/` | Source de vérité : `PROJECT_BRIEF.md` (fonctionnel), `DESIGN_SYSTEM.md` (charte + journal des décisions), `STACK.md` (choix techniques), `R8-PREUVES.md` (journal de preuves C3), annexe VI-1 officielle, et `conception/` (livrables HTML des étapes de conception) |
| `src/content/realisations/` | **Une réalisation = un fichier Markdown** (`r1.md` → `r8.md`). L'en-tête pilote les filtres, la page Compétences et le tableau de synthèse |
| `src/content/veille/` | Fiches de veille (une par fichier) |
| `src/data/` | Informations du candidat, référentiel des 6 compétences E5 |
| `src/pages/`, `src/components/`, `src/layouts/` | Les 6 pages du site et le gabarit de fiche (Astro) |
| `src/styles/` | `tokens.css` (design system), `global.css`, `motion.css` |
| `src/scripts/motion.ts` | Couche d'animation (GSAP), désactivable |
| `public/` | Tableau de synthèse officiel `.xlsx` |
| `.github/workflows/` | Publication automatique sur GitHub Pages à chaque `push` |

## Mettre à jour une réalisation

Ouvrir `src/content/realisations/rX.md`, modifier l'en-tête (`statut`, `periode`, `competences`…) et remplacer les rubriques « À compléter ». Enregistrer, puis :

```bash
git add -A && git commit -m "R1 : étapes réalisées" && git push
```

Le site est reconstruit et publié en ~40 secondes. Les commentaires `<!-- … -->` en tête de chaque fiche listent les preuves à collecter et les questions jury probables : ils ne s'affichent jamais sur le site.

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site statique dans dist/
```

## Règles du projet

- Rien n'est inventé : une rubrique sans matière reste marquée « à compléter », une réalisation non faite reste un placeholder explicite.
- Pas de captures d'écran : les schémas d'architecture (SVG) et le texte portent la preuve.
- Contrastes WCAG AA minimum, corps de texte ≥ 16 px, navigation ≤ 3 clics.
- Les animations sont une couche optionnelle, coupée par le bouton « animations : off » et par le réglage système « réduire les animations ».
