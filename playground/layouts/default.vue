<template>
	<header>
		<menu>
			<NuxtLink to="/">index</NuxtLink>
			<NuxtLink to="/about">about</NuxtLink>
			<NuxtLink to="/contacts">contacts</NuxtLink>
			<NuxtLink to="/error">error</NuxtLink>
		</menu>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<button @click="initializePixel">Init pixel</button> - @hiperf/pixel playground
	</footer>
</template>

<script setup>
import pixelRouteRunner from '@hiperf/pixel/pixelRouteRunner';

const nuxtApp = useNuxtApp();
const config = useRuntimeConfig();
const { $initPixel, $pixel } = useNuxtApp();

if (import.meta.client) {
	watch($pixel, (v) => {
		console.log('watch $pixel', v);
	}, {immediate: true});
}

function initializePixel() {
	$initPixel(config.public.pixelId);
	$pixel.value('track', 'PageView');
}

onMounted(() => {
	$initPixel(4000);
	$initPixel(3000);

	$pixel.value.disablePushState = true;

	pixelRouteRunner(nuxtApp, [
		{
			route: /^\/contacts$/,
			args: [
				'trackSingleCustom',
				'4000', // id should be a string
				'MyCustomEvent',
				{
					some: 'params'
				}
			]
		},
		{
			route: /^\/about$/,
			args: [
				'trackSingle',
				'3000', // id should be a string
				'PageView',
				{
					some: 'params'
				}
			]
		},
	]);
});
</script>

<style>
body {
	margin: 0;
	padding: 1rem;
	color: #000;
}

a { color: inherit; }
menu { padding: 0; }
menu a { margin-right: 1rem; }
menu a.router-link-active {
	opacity: 1;
	color: #007b48;
}

main {
	padding: 1rem 0;
}

h1 {
	margin: 0 0 1rem 0;
}
</style>
