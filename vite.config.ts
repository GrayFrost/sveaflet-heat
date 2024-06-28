import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import examples from 'mdsvexamples/vite';

export default defineConfig({
	plugins: [sveltekit(), examples],
	resolve: {
		alias: {
      'sveaflet-heat': path.resolve(process.cwd(), './src/lib/index.ts')
    }
	},
});
