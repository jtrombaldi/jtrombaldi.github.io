# R8-PREUVES.md — Journal de preuves pour l'option B (C3 : présence en ligne)
*Tenu « comme si » l'option B était retenue. Si elle ne l'est pas, ce fichier est simplement ignoré. Rien n'est inventé : chaque ligne est cochée uniquement quand la preuve existe réellement.*

Réalisation candidate : **« Conception, mise en ligne et sécurisation du portfolio professionnel »** — C3 (+ C5 mise à disposition d'un service, + C4 mode projet selon la rédaction).

| # | Preuve | Où / comment | Statut |
|---|---|---|---|
| 1 | Brief fonctionnel + conception documentée | `doc/PROJECT_BRIEF.md`, `doc/conception/` | ✅ existe |
| 2 | Charte et design system avec contrastes WCAG vérifiés | `doc/DESIGN_SYSTEM.md` | ✅ existe |
| 3 | Dépôt git daté (historique du projet) | `git init` le 17/09/26, 1er commit `26cd5be` | ✅ existe |
| 4 | Achat du nom de domaine (facture / capture registrar) | OVH ou Gandi | ⏳ décision candidat |
| 5 | Configuration DNS faite par le candidat (enregistrements A / CNAME) | interface du registrar | ⏳ |
| 6 | Certificat HTTPS actif | https://jtrombaldi.github.io (HTTPS forcé) — à refaire sur le domaine perso | ✅ partiel |
| 7 | Déploiement automatisé (push → mise en ligne) | `.github/workflows/deploy.yml`, 1er déploiement 17/09/26, run #35266265681 | ✅ existe |
| 8 | Rapport Lighthouse (performance, accessibilité, SEO) | Chrome DevTools, export HTML | ⏳ |
| 9 | Mentions légales rédigées et accessibles | lien pied de page | ⏳ |
| 10 | Référencement de base : `robots.txt`, `sitemap.xml`, balises meta | fichiers du site | ⏳ |
| 11 | Mesure de visibilité (Google Search Console) | inscription + rapport | ⏳ optionnel |
| 12 | Surveillance de disponibilité (UptimeRobot) | historique uptime | ⏳ optionnel |
| 13 | Site consultable hors-ligne (service worker) | test réseau coupé | ⏳ |

Note : le candidat a choisi de ne pas mettre de captures d'écran dans les fiches. Pour R8-B, les preuves 4-6 sont par nature des éléments d'interface (registrar, certificat) — à trancher le moment venu : les décrire textuellement, ou faire une exception ciblée.
