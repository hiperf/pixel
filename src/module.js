import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

/**
 * @typedef {Object} PixelModuleDefaultsTracker
 * @property {string|number} id
 * @property {'auto'|'manual'} [initMode]
 */

/**
 * @typedef {Object} PixelModuleDefaults 
 * @property {PixelModuleDefaultsTracker[]} trackers
 */

/** @type PixelModuleDefaults */
const defaults = {
	trackers: []
};

export default defineNuxtModule({
    meta: {
        name: 'pixel',
        configKey: 'pixel',
    },
    defaults,
    setup(options, nuxt) {
        const resolver = createResolver(import.meta.url);

		nuxt.options.runtimeConfig.public.pixel = options;

        addPlugin(resolver.resolve('./runtime/plugin.client'));
    },
});
