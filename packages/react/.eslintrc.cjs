module.exports = {
	root: true,
	plugins: ['import'],
	extends: [
		'plugin:eslint-plugin-be-kit/react-ts',
		'plugin:import/recommended',
		'plugin:cypress/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'react/prop-types': 'off',
		'import/no-cycle': 'error',
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: __dirname,
			},
		},
	},
}
