import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          includePaths: ['./src/styles'],
        },
      },
    },
  },
});