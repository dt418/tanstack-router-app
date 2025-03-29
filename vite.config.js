import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "node:path";
import { federation } from "@module-federation/vite";
import federationConfig from "./module-federation.config.js";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [viteReact(), tailwindcss(), federation(federationConfig)],
	test: {
		globals: true,
		environment: "jsdom",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
