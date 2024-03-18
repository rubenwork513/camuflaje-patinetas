import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import { SITE } from "./src/config.ts";
// https://astro.build/config
export default defineConfig({
    site: SITE.siteUrl,
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [remarkToc, remarkReadingTime]
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"]
        },
        ssr: {
            external: ["svgo"]
        }
    },
    integrations: [
        mdx(),
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp"
        }),
        prefetch(),
        react()
    ]
});
