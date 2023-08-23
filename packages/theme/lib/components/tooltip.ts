import plugin from 'tailwindcss/plugin'

import { addClassPrefix } from '../util'

export function tooltip() {
	return plugin(({ addComponents }) => {
		addComponents(
			addClassPrefix({
				tooltip: {
					/*tw*/ '@apply select-none rounded bg-gray-700 px-2 py-1 text-[10px] font-medium leading-[15px] text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-tooltipSlideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-tooltipSlideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-tooltipSlideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-tooltipSlideUpAndFade':
						{},

					'&-top': {
						/*tw*/ '@apply data-[state=delayed-open]:data-[side=top]:animate-tooltipSlideDownAndFade':
							{},
					},

					'&-right': {
						/*tw*/ '@apply data-[state=delayed-open]:data-[side=right]:animate-tooltipSlideLeftAndFade':
							{},
					},

					'&-left': {
						/*tw*/ '@apply data-[state=delayed-open]:data-[side=left]:animate-tooltipSlideRightAndFade':
							{},
					},

					'&-bottom': {
						/*tw*/ '@apply data-[state=delayed-open]:data-[side=bottom]:animate-tooltipSlideUpAndFade':
							{},
					},
				},
			})
		)
	})
}
