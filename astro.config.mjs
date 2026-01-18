import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://themikemoniker.github.io',
  base: '/real-estate-static-site-sample',
  integrations: [tailwind()],
  output: 'static',
});
