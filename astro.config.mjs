// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
});
