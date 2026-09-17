# DESIGN_SYSTEM.md — Portfolio E5
*Verrouillé le 17 septembre 2026 — Étape 3 de la conception. Complète PROJECT_BRIEF.md (qui reste la source de vérité fonctionnelle).*

Aperçu rendu : `prototype/conception/design-system.html` (servi sur http://localhost:8765 via `.claude/launch.json` → config `conception`).

## Direction retenue
**Hybride** = palette « Signal bleu » (B2) + typographie « Developer Mono » (B1).
Style : Minimalism & Swiss. Mode sombre uniquement (pas d'impression prévue). Motion-Driven écarté ; le mouvement est une couche optionnelle.

## Tokens CSS (à copier tels quels)
```css
:root{
  /* couleurs */
  --bg:#020617; --card:#0E1223; --muted:#1A1E2F; --border:#283047;
  --fg:#F8FAFC; --muted-fg:#94A3B8;
  --primary:#F8FAFC; --on-primary:#020617;
  --accent:#0EA5E9; --accent-text:#38BDF8; --on-accent:#020617; --accent-soft:#0B2A3A;
  --success:#4ADE80; --warning:#F59E0B; --destructive:#EF4444; --ring:#38BDF8;
  --ctx-pro:#38BDF8; --ctx-perso:#C084FC;
  /* typo */
  --font-mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  --font-sans:"IBM Plex Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --fs-display:2.5rem; --fs-h1:2rem; --fs-h2:1.5rem; --fs-h3:1.25rem;
  --fs-body:1rem; --fs-small:.875rem; --fs-label:.75rem;
  --lh-tight:1.15; --lh-body:1.55;
  /* espacements (base 4px) */
  --sp-1:4px; --sp-2:8px; --sp-3:12px; --sp-4:16px; --sp-6:24px; --sp-8:32px;
  --sp-12:48px; --sp-16:64px; --sp-24:96px;
  /* arrondis */
  --r-badge:6px; --r-btn:8px; --r-card:10px; --r-pill:999px;
  /* mouvement */
  --dur-fast:150ms; --dur-base:200ms; --dur-slow:350ms; --ease:cubic-bezier(.2,.8,.2,1);
  /* layout */
  --container:1120px; --nav-h:64px; --touch:44px;
}
@media (prefers-reduced-motion: reduce){ :root{--dur-fast:0ms;--dur-base:0ms;--dur-slow:0ms} }
html[data-motion="off"]{ --dur-fast:0ms; --dur-base:0ms; --dur-slow:0ms }
```
Polices (Google Fonts) : `IBM+Plex+Sans:wght@400;500;600;700` · `JetBrains+Mono:wght@400;500;600;700`.

## Règle mono / sans (évite le piège des titres longs)
- **JetBrains Mono** → uniquement le *court* : nom, titres de page (1-2 mots), labels de section (uppercase, +0.14em), identifiants `R1`/`C2`, badges, kickers, valeurs techniques.
- **IBM Plex Sans** → tout le *long* : titres de fiches/cards, rubriques, corps, descriptions.
- Corps ≥ 16px · small ≥ 14px · rien < 12px · line-height corps 1.55.

## Contrastes (WCAG, vérifiés)
Tous les couples ≥ AA (exigence brief). 11/12 ≥ AAA. Le plus bas : badge Cx (`--accent-text` sur `--accent-soft`) = 6.97:1.

## Composants
- **Nav** sticky 64px, `body{padding-top:var(--nav-h)}`, 5 liens + bouton accent « Tableau de synthèse ». Menu ☰ sous 768px.
- **Boutons** min 44px, `--r-btn`, focus visible `outline:2px solid var(--ring)`.
- **Chips filtre** pill, wrap autorisé (jamais clippées), état actif = `--primary`.
- **Badges compétence** mono, `--accent-soft`/`--accent-text`, cliquables → page Compétences.
- **Card réalisation** `--card` + `--border`, hover = bordure accent + translateY(-2px). Placeholder = bordure pointillée + opacité .7 + tag `--warning`.
- **Fiche** : fil d'Ariane compact `Réalisations › R1 — titre` (le mot « Réalisations » est le retour) + précédent/suivant. Pas de galerie de captures.

## Mouvement
Couche optionnelle. Tokens `--dur-*`/`--ease`. `prefers-reduced-motion` et `html[data-motion="off"]` mettent tout à 0. Uniquement `opacity`/`transform`. Slots réservés : fond du hero Accueil, zone schéma des fiches, micro-icônes Compétences, flux Veille.

## Journal des décisions de conception
| Date | Décision | Motif |
|---|---|---|
| 17/09/26 | Architecture plate, fiches en pages dédiées (routes) | URL stable, deep-link depuis Compétences, ≤ 3 clics |
| 17/09/26 | Aucune capture d'écran | Choix du candidat — le schéma d'architecture + rubrique 9 portent la preuve |
| 17/09/26 | Micro-animations seulement, grosses transitions = bonus tardif | Choix du candidat, cohérent brief §7/§8 |
| 17/09/26 | Fil d'Ariane fusionné avec le retour | Site à 2 niveaux : breadcrumb seul serait redondant |
| 17/09/26 | Style Motion-Driven écarté | Contredit sobriété, chargement < 3 s, contenu visible sans interaction |
| 17/09/26 | Mode sombre, hybride B2 couleurs + B1 typo | Choix du candidat ; pas d'impression nécessaire |
| 17/09/26 | Tableau de synthèse en HTML natif, lignes cliquables vers les fiches | Fiabilité (−2 pts si absent), accessibilité, porte d'entrée |
| — | Fusion R1/R2, option R8, ligne 1ʳᵉ année du tableau, niveaux de maîtrise | **En attente** — décisions de contenu du candidat |
