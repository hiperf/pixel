export default defineNuxtConfig({
	modules: [
		['../src/module']
	],
	runtimeConfig: {
		public: {
			pixelId: '123'
		}
	},
    devtools: { enabled: true },
});
