import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  experimental: {
    assets: true,
  },
  integrations: [react(), tailwind()],
  adapter: node({
    mode: "standalone",
  }),
});
