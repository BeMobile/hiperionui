export function addPrefix<T extends Record<string, unknown>>(object: T) {
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
	}, {}) as T
}
