import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  integrations: [mdx(), sitemap()],

  site:
    process.env.VERCEL_ENV === "preview"
      ? `https://${process.env.VERCEL_URL}`
      : process.env.PUBLIC_BASE_URL,
});
