import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
]);
