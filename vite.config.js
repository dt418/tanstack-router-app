/// <reference types="vitest/config" />

import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "node:path";
import { federation } from "@module-federation/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federationConfig from "./module-federation.config.js";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		viteReact(),
		tsconfigPaths(),
		tailwindcss(),
		federation(federationConfig),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: ['node_modules', 'dist', 'build'],
		coverage: {
		  exclude: [
			'node_modules/**',
			'dist/**',
			'build/**',
			'**/*.d.ts',
			'**/*.test.{js,jsx,ts,tsx}',
			'**/types/**',
		  ],
		  reporter: ['text', 'json', 'html'],
		  all: true,
		},
		// Include setup files for vitest
		setupFiles: ['./src/setup-test.ts'],
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
