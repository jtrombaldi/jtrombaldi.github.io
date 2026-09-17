import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const COMPETENCES = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'] as const;

// Une réalisation = un fichier Markdown dans src/content/realisations/.
// L'en-tête pilote les filtres, la page Compétences et le tableau de synthèse.
const realisations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/realisations' }),
  schema: z.object({
    titre: z.string(),
    organisation: z.string().optional(),
    contexte: z.enum(['pro', 'perso']),
    precision: z.string().optional(), // ex. "freelance"
    periode: z.string().default('à compléter'), // "JJ/MM/AA au JJ/MM/AA"
    annee: z.union([z.literal(1), z.literal(2)]).default(2),
    competences: z.array(z.enum(COMPETENCES)).min(1),
    statut: z.enum(['placeholder', 'en-cours', 'termine']),
    resume: z.string(),
    technologies: z.array(z.string()).default([]),
    ordre: z.number(),
  }),
});

// Une fiche de veille = un fichier Markdown dans src/content/veille/.
const veille = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/veille' }),
  schema: z.object({
    titre: z.string(),
    source: z.string(),
    url: z.string().url().optional(),
    date: z.string(),
    resume: z.string(),
    ordre: z.number(),
  }),
});

export const collections = { realisations, veille };
