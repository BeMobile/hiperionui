import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['./lib'],
	dts: true,
	format: ['esm'],
	clean: true,
})
