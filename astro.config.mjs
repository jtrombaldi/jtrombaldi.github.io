// @ts-check
import { defineConfig } from 'astro/config';

// URL publique. À remplacer par le domaine personnalisé quand il sera acheté.
export default defineConfig({
  site: 'https://jtrombaldi.github.io',
  trailingSlash: 'never',
  build: { format: 'file' },
});
