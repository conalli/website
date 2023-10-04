import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  experimental: {},
  integrations: [react(), tailwind()],
  adapter: vercel(),
});
