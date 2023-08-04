import * as components from './components'
import * as themeConfig from './theme'

export const theme = themeConfig

const _plugins = {
	...components,
}

type Plugin = keyof typeof _plugins

export const plugins = {
	select: (...pluginsToSetup: Array<Plugin>) => {
		const pluginsSet: Set<Plugin> = new Set(pluginsToSetup)

		return Array.from(pluginsSet).map((plugin) => _plugins[plugin]())
	},
	all: () => Object.values(_plugins).map((plugin) => plugin()),
}
