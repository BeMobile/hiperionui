import { CSSRuleObject } from 'tailwindcss/types/config'

export function addClassPrefix(object: Record<string, unknown>) {
	const objectEntries = Object.entries(object).map(([key, value]) => {
		let newKey = key

		if (!key.includes('hiperion-')) {
			const [oldKey] = key.split('.')

			newKey = `.hiperion-${oldKey}`
		}

		return { [newKey]: value }
	})

	return objectEntries.reduce((acc, value) => {
		return { ...acc, ...value }
	}, {}) as CSSRuleObject
}
