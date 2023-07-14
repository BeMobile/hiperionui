import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['./lib'],
	dts: true,
	format: ['esm', 'cjs'],
	clean: true,
})
