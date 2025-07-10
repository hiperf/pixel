# Multiple pixels

You can load as much meta pixels as you want.

### Example

```vue
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	$initPixel('YOUR-PIXEL-ID-1');
	$initPixel('YOUR-PIXEL-ID-2');
	$initPixel('YOUR-PIXEL-ID-3', {'external_id': 12345}, 'Pixel-3');

	// track PageView on every trackers
	$pixel.value('track', 'PageView');

	// track MyCustomEvent on YOUR-PIXEL-ID-2 tracker
	$pixel.value('trackSingleCustom', 'YOUR-PIXEL-ID-2', 'MyCustomEvent', {
		userType: 'beta',
		level: 3
	});

	// track SomeCustomEvent on 'Pixel-3' using tracker name
	$pixel.value('trackSingleCustom', 'Pixel-3', 'SomeCustomEvent', {
		category: 'signup',
		source: 'homepage'
	});
});
</script>
```
