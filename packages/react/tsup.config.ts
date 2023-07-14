import autoprefixer from 'autoprefixer'
import postCssPlugin from 'esbuild-style-plugin'
import tailwind from 'tailwindcss'
import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['lib/index.ts'],
	format: ['esm'],
	clean: true,
	dts: true,
	esbuildPlugins: [
		postCssPlugin({
			postcss: {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				plugins: [tailwind, autoprefixer as any],
			},
		}),
	],
})
