import plugin from 'tailwindcss/plugin'

import { addPrefix, defaultHoverDuration } from '../util'

export function button() {
	return plugin(({ addComponents }) => {
		addComponents(
			addPrefix({
				btn: {
					/*tw*/ '@apply rounded-pill cursor-pointer': {},
				},

				'btn-solid': {
					/*tw*/ '@apply text-white border-[3px] border-solid border-transparent':
						{},

					transition: `background ${defaultHoverDuration} linear, color ${defaultHoverDuration} linear, border-color ${defaultHoverDuration} ease-in-out`,

					'&-main': {
						/*tw*/ '@apply bg-main-500 hover:bg-main-600 hover:border-main-100':
							{},
					},

					'&-secondary': {
						/*tw*/ '@apply bg-secondary-500': {},
					},
				},

				'btn-big': {
					/*tw*/ '@apply px-10 py-[14px] text-lg font-medium': {},
				},

				'btn-medium': {
					/*tw*/ '@apply px-8 py-[14px]': {},
				},

				'btn-small': {
					/*tw*/ '@apply px-4 py-2': {},
				},

				'btn-outlined': {
					/*tw*/ '@apply bg-transparent border-solid border-2': {},

					'&-main': {
						/*tw*/ '@apply border-main-500 text-main-500': {},
					},

					'&-secondary': {
						/*tw*/ '@apply border-secondary-500 text-secondary-500': {},
					},
				},
			})
		)
	})
}
