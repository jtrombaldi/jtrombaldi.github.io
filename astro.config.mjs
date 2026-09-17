// @ts-check
import { defineConfig } from 'astro/config';

// `site` sera remplacé par l'URL définitive (domaine) avant la mise en ligne.
export default defineConfig({
  site: 'https://portfolio.example',
  trailingSlash: 'never',
  build: { format: 'file' },
});
