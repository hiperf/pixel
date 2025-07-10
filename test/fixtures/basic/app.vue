<template>
	<div>@hiperf/pixel test</div>
	<button id="button-pixel-initialiation" @click="pixelInitialiation">Init Meta Pixel</button>
</template>

<script setup>
import { useNuxtApp } from 'nuxt/app';

const { $initPixel, $pixel } = useNuxtApp();

function pixelInitialiation() {
	$initPixel('123');
	$pixel.value('track', 'PageView'); // Enable page view tracking (track every page navigation)
}
</script>
