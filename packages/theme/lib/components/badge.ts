import plugin from 'tailwindcss/plugin'

import { addClassPrefix } from '../util'

export function badge() {
	return plugin(({ addComponents }) => {
		addComponents(
			addClassPrefix({
				badge: {
					/*tw*/ '@apply box-border flex items-center justify-center rounded-full font-normal leading-normal text-white':
						{},

					//variants
					'&-outlined': {
						/*tw*/ '@apply border border-solid border-white': {},
					},

					//  colors
					'&-gray': {
						/*tw*/ '@apply bg-gray-500': {},
					},

					'&-red': /*tw*/ {
						'@apply bg-red-500': {},
					},

					'&-orange': {
						/*tw*/ '@apply bg-orange-500': {},
					},

					'&-green': {
						/*tw*/ '@apply bg-green-500': {},
					},

					// sizes
					'&-big': {
						/*tw*/ '@apply h-8 w-8 text-[18px]': {},
					},

					'&-medium': {
						/*tw*/ '@apply h-6 w-6 text-[16px]': {},
					},

					'&-small': {
						/*tw*/ '@apply h-4 w-4 text-[14px]': {},
					},
				},
			})
		)
	})
}
