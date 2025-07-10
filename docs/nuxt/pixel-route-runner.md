# Route runner

You can use ``pixelRouteRunner`` helper to easy configure trackers by route.

### Example
```vue
<script setup>
import pixelRouteRunner from '@hiperf/pixel/pixelRouteRunner';

const nuxtApp = useNuxtApp();
const { $initPixel, $pixel } = nuxtApp;

onMounted(() => {
	// Init all needed trackers
	$initPixel('PIXEL_A');
	$initPixel('PIXEL_B');
	$initPixel('PIXEL_C');

	// You can disable fbq URL push state tracking 
	// to prevent unwanted automatic events (PageView for example) 
	// that fbq can send by default
	$pixel.value.disablePushState = true;

	pixelRouteRunner(nuxtApp, [
		// Tracker will run on /products/** routes
		{ 	
			route: /^\/products(?:\/.*)?$/, // Regular expresion that match needed routes
			args: ['track', 'PageView', 'PIXEL_A'] // Same arguments that you would pass in fbq, example: fbq('track', 'PageView', 'PIXEL_A');
		},

		// Tracker will run on all routes except /products/**
		{
			route: /^(?!\/products(?:\/|$)).+/, 
			args: ['track', 'PageView', 'PIXEL_B']
		},

		// Tracker will run on /contacts route
		{
			route: /^\/contacts$/,
			args: [
				'trackSingleCustom',
				'PIXEL_C',
				'MyCustomEvent',
				{
					some: 'params'
				}
			]
		},
	]);
});
</script>
```

You can also implement it manualy by using ``vue-router`` (useRouter).

### Type

```js
type PixelRouteRunnerConfigItem = {
	route: RegExp;
	args: unknown[];
};

interface PixelRouteRunner {
	(nuxtApp: NuxtApp, config: PixelRouteRunnerConfigItem[]): void;
}
```