import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind({
    config: { applyBaseStyles: false},
  })],
  vite: {
    ssr: {
      external: ['svgo']
    },
    build: {
      rollupOptions: {
        external: ["astro-icon"]
      }
    }
  }
});