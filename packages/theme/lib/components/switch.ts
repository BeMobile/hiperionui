import plugin from 'tailwindcss/plugin'

import { addPrefix } from '../util'

function switch_() {
	return plugin(({ addComponents }) => {
		addComponents(
			addPrefix({
				switch: {
					/*tw*/ '@apply data-[state=checked]:bg-main-500 relative h-[32px] w-[56px] cursor-pointer rounded-full bg-gray-500 outline-none transition-colors duration-700':
						{},

					'&-container': {
						/*tw*/ '@apply flex items-center gap-4': {},
					},

					'&-thumb': {
						/*tw*/ '@apply block h-[24px] w-[24px] translate-x-1 rounded-full bg-white transition-transform duration-700 will-change-transform data-[state=checked]:translate-x-[28px]':
							{},
					},

					'&-label': {
						/*tw*/ '@apply text-black-600 text-base': {},
					},
				},
			})
		)
	})
}

export { switch_ as switch }
