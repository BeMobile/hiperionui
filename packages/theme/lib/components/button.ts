import plugin from 'tailwindcss/plugin'

import { addClassPrefix, defaultHoverDuration } from '../util'

export function button() {
	return plugin(({ addComponents }) => {
		addComponents(
			addClassPrefix({
				btn: {
					/*tw*/ '@apply rounded-pill cursor-pointer box-border': {},

					//variants
					'&-solid': {
						/*tw*/ '@apply text-white border-[3px] border-solid border-transparent disabled:bg-gray-400 disabled:cursor-not-allowed':
							{},

						transition: `background ${defaultHoverDuration} linear, color ${defaultHoverDuration} linear, border-color ${defaultHoverDuration} ease-in-out`,

						'&-main': {
							/*tw*/ '@apply bg-main-500 hover:bg-main-600 hover:border-main-100':
								{},
						},

						'&-secondary': {
							/*tw*/ '@apply bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-100':
								{},
						},
					},

					'&-outlined': {
						/*tw*/ '@apply bg-transparent border-solid border-2 transition-colors':
							{},

						'&-main': {
							/*tw*/ '@apply border-main-500 text-main-500 hover:bg-main-500 hover:text-white':
								{},
						},

						'&-secondary': {
							/*tw*/ '@apply border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white':
								{},
						},
					},

					'&-ghost': {
						/*tw*/ '@apply bg-transparent transition-colors': {},

						'&-main': {
							/*tw*/ '@apply text-main-500 hover:text-main-600': {},
						},

						'&-secondary': {
							/*tw*/ '@apply text-secondary-500 hover:text-secondary-600': {},
						},
					},

					// sizes
					'&-big': {
						/*tw*/ '@apply px-10 py-[14px] text-lg font-medium leading-[19.2px]':
							{},
					},

					'&-medium': {
						/*tw*/ '@apply px-8 py-[14px] text-lg font-medium leading-[19.2px]':
							{},
					},

					'&-small': {
						/*tw*/ '@apply px-4 py-2 text-base font-medium leading-[24px] tracking-[0.2px]':
							{},
					},
				},
			})
		)
	})
}
