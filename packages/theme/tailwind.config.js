import { theme } from './lib'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./lib/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			...theme,
		},
	},
}
