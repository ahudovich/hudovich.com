import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  integrations: [mdx(), sitemap()],

  site:
    process.env.VERCEL_ENV === "preview"
      ? `https://${process.env.VERCEL_URL}`
      : process.env.PUBLIC_BASE_URL,

  env: {
    validateSecrets: true,
    schema: {
      PUBLIC_ENV: envField.enum({
        context: "server",
        access: "secret",
        values: ["development", "preview", "production"],
      }),
      PUBLIC_POSTHOG_HOST: envField.string({
        context: "client",
        access: "public",
        url: true,
      }),
      PUBLIC_POSTHOG_KEY: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
