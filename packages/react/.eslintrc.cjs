module.exports = {
	root: true,
	extends: [
		'plugin:eslint-plugin-be-kit/react-ts',
		'plugin:cypress/recommended',
	],
	rules: {
		'react/prop-types': 'off',
	},
}
