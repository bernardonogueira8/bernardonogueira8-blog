// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "https://bernardonogueira8.github.io",
    output: "server",
    adapter: vercel(),
    integrations: [
        preact(),
        icon({
            include: {
                ph: ["*"],
            },
        }),
        sitemap({
            filter: (page) =>
                !page.includes("/blog/tags") && !page.includes("/blog/techs") && !page.includes("/admin"),
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
    },
});

