import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const config = { plugins: [sveltekit()] };
	if (mode === "development") {
		config.server = {
			proxy: {
				"/api": { secure: false, target: env.VITE_API_URL, changeOrigin: true, prependPath: false },
			},
			host: "0.0.0.0",
			port: 5173,
		};
	}
	config.build = {
		target: "esnext", //browsers can handle the latest ES features
	};
	config.base = env.VITE_FE_PATH;
	return defineConfig(config);
};
