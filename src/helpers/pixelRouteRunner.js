/**
 * @param {import('@nuxt/schema').NuxtApp} nuxtApp
 */
export default (nuxtApp, config) => {
	function checkRoutes(path) {
		for (const item of config) {
			try {
				if (item.route.test(path))
					nuxtApp.$pixel.value.apply(null, item.args);
			} catch(err) {
				console.error('pixelRouteRunner: route check error', err);
			}
		}
	}

	// Check path on change
	nuxtApp.$router.afterEach((to, _, failure) => {
		if (failure) return;

		checkRoutes(to.path);
	});

	// Check current path
	checkRoutes(nuxtApp.$router.currentRoute.value.path);
}