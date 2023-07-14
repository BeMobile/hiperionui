import { viteConfig } from '@be-kit/vite-config'
import path from 'path'
import istanbul from 'vite-plugin-istanbul'

export default viteConfig({
	plugins: [
		istanbul({
			cypress: true,
			requireEnv: false,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
})
