import { defineConfig } from "astro/config";
// https://astro.build/config
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  experimental: {},
  integrations: [react()],
  adapter: vercel({}),
  vite: {
    plugins: [tailwindcss()],
  },
});
