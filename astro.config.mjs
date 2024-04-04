import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
// https://astro.build/config

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [
    tailwind(),
  ],
})
