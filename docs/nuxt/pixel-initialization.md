# Pixel initialization

No *Meta Pixel* (*Facebook Pixel*) code are injected untill you call ``$initPixel``.

``$initPixel`` inject *Meta Pixel* (*Facebook Pixel*) script if it has not been included yet, and call *fbq* [``init``](https://developers.facebook.com/docs/meta-pixel/get-started/) method.

### Example

```vue
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	$initPixel('123'); // Your Pixel id
	$pixel.value('track', 'PageView'); // Start tracking
});
</script>
```

To comply with *GDPR* requirements you call ``$initPixel`` only after receiving the necessary permissions from the user.

```vue
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	// User code to verify consent to use Meta Pixel (Facebook Pixel)
	if (cookies.marketing) {
		$initPixel('123'); // Your Pixel id
		$pixel.value('track', 'PageView'); // Start tracking
	}
});
</script>
```

### Type

```js
$initPixel(id: string): void
```
