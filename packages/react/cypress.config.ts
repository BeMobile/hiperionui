import codeCoverage from '@cypress/code-coverage/task'
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins'
import { defineConfig } from 'cypress'

export default defineConfig({
	env: {
		codeCoverage: {
			exclude: 'cypress/**/*.*',
		},
	},
	component: {
		setupNodeEvents(on, config) {
			codeCoverage(on, config)
			initPlugin(on, config)

			return config
		},
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
	e2e: {
		setupNodeEvents() {
			// implement node event listeners here
		},
	},
})
