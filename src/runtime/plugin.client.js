import { defineNuxtPlugin } from '#app';
import { shallowRef } from 'vue';
import { addScript } from './utils';

export default defineNuxtPlugin((nuxtApp) => {
	let pixel = shallowRef(null);
	let initialized = {};
	let scriptInstalled = false;

	/**
	 * initPixel
	 * @param {string|number} id - pixel id
	 * @param {object} [options] - pixel options
	 * @param {string} [name] - pixel name
	 */
	function initPixel(id) {
		if (id in initialized) return;

		// Add Meta Pixel script if it's not installed yet
		if (!scriptInstalled) {
			pixel.value = addScript(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
			scriptInstalled = true;
		}

		// Init
		pixel.value.apply(null, ['init', ...arguments]);
		initialized[id] = 1;
	}
	
	return {
		provide: {
			initPixel,
			pixel
		}
	};
});