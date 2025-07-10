# $initPixel

No *Meta Pixel* (*Facebook Pixel*) code are injected untill you call ``$initPixel``.

``$initPixel`` is a wrapper for original ``fbq('init', 'PIXEL_ID')`` method, and can take the same parameters.

``$initPixel`` inject *Meta Pixel* (*Facebook Pixel*) script if it has not been included yet, and call *fbq* [``init``](https://developers.facebook.com/docs/meta-pixel/get-started/) method.

### Example

```vue
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	$initPixel('PIXEL_ID');
	$pixel.value('track', 'PageView'); // Start tracking
});
</script>
```

Additional parameters:

```vue
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	$initPixel('PIXEL_ID', {'external_id': 12345}, 'myPixelName');
	$pixel.value('track', 'PageView'); // Start tracking
});
</script>
```

### Type

```js
interface $initPixel {
	(id: string, options?: object, name?: string): void;
}
```
