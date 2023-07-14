import { theme, plugins } from '@hiperionui/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./lib/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			...theme,
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [...plugins.all()],
}
