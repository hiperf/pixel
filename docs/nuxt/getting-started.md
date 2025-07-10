# Getting started

## Installation

### Package install

Install `@hiperf/pixel` with your favorite package manager:

::: code-group

```sh [npm]
npm i @hiperf/pixel
```

```sh [yarn]
yarn add @hiperf/pixel
```

```sh [pnpm]
pnpm i @hiperf/pixel
```

```sh [bun]
bun add @hiperf/pixel
```

:::

### Add module to `nuxt.config`

```js
export default defineNuxtConfig({
    modules: ['@hiperf/pixel'],
});
```

## Usage
No Meta Pixel (Facebook Pixel) code are injected untill you call ``$initPixel``

```vue
<!-- layouts/default.vue or app.vue -->
<script setup>
const { $initPixel, $pixel } = useNuxtApp();

onMounted(() => {
	// Add Meta Pixel (Facebook Pixel) tracker code and initialize your tracker
	$initPixel('YOUR-PIXEL-ID');

	// Start PageView tracking
	$pixel.value('track', 'PageView');
});
</script>
```
