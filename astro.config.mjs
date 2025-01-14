import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';


export default defineConfig({
  integrations: [tailwind(),mdx()],
  content: {
    collections: {
      trips: {
        schema: {
          name: "string",
          imgSrc: "string",
          description: "string",
          dates: "string",
          price: "string",
        },
      },
    },
  },
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