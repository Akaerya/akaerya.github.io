// @ts-check
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://akaerya.github.io",
	// base: "/yuko",
	integrations: [
		react(),
		sanity({
			projectId: "q1u16tf6",
			dataset: "production",
			useCdn: false,
			studioBasePath: "/admin",
			studioRouterHistory: "hash",
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
