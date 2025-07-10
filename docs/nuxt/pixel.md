# $pixel

``$pixel`` is a ``shallowRef`` object that is equal to Meta Pixel (Facebook Pixel) ``fbq`` object.
You can work with it in the same way as with the original ``fbq``.

### Example

```vue
<script setup>
const { $pixel } = useNuxtApp();

onMounted(() => {
	$pixel.value('trackCustom', 'ShareDiscount', {promotion: 'share_discount_10%'});
	$pixel.value('trackSingle', 'PIXEL_A', 'Purchase', {
		value: 4,
		currency: 'USD'
	});
});
</script>
```
