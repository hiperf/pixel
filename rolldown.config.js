import { defineConfig } from 'rolldown';

export default defineConfig({
	input: 'src/helpers/pixelRouteRunner.js',
	output: {
		file: 'dist-helpers/pixelRouteRunner.mjs',
		format: 'es',
		minify: true
	},
});