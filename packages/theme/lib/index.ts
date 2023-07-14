import * as colors from './theme/colors'
import { borderRadius } from './theme/borderRadius'
import { boxShadow } from './theme/boxShadow'
import { spacing } from './theme/spacing'

import { button } from './components/button'

export const theme = {
	colors,
	borderRadius,
	boxShadow,
	spacing,
}

const _plugins = {
	button,
}

type Plugin = keyof typeof _plugins

export const plugins = {
	select: (...pluginsToSetup: Array<Plugin>) => {
		const pluginsSet: Set<Plugin> = new Set(pluginsToSetup)

		return Array.from(pluginsSet).map((plugin) => _plugins[plugin]())
	},
	all: () => Object.values(_plugins).map((plugin) => plugin()),
}
