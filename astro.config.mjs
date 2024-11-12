// @ts-check
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "toc", maxDepth: 3 }]],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
