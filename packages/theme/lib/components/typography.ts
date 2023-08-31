import plugin from 'tailwindcss/plugin'

import { addClassPrefix } from '../util'

export function typography() {
	return plugin(({ addComponents }) => {
		addComponents(
			addClassPrefix({
				title: {
					'&-1': {
						/*tw*/ '@apply text-[50px] font-semibold leading-[60px] text-black-900':
							{},
					},

					'&-2': {
						/*tw*/ '@apply text-[40px] font-semibold leading-[48px] text-black-900':
							{},
					},

					'&-3': {
						/*tw*/ '@apply text-[32px] font-semibold leading-[38px] text-black-900':
							{},
					},

					'&-4': {
						/*tw*/ '@apply text-[28px] font-semibold leading-[36px] text-black-900':
							{},
					},
				},

				subtitle: {
					'&-1': {
						/*tw*/ '@apply text-[24px] font-medium leading-[32px] text-black-900':
							{},
					},

					'&-2': {
						/*tw*/ '@apply text-[20px] font-semibold leading-[28px] text-black-900':
							{},
					},

					'&-3': {
						/*tw*/ '@apply text-[16px] font-semibold leading-[24px] tracking-[0.2px] text-black-900':
							{},
					},
				},

				body: {
					'&-1': {
						/*tw*/ '@apply text-[24px] font-light leading-[33px] text-black-900':
							{},
					},

					'&-2': {
						/*tw*/ '@apply text-[18px] font-normal leading-[28px] text-black-900':
							{},
					},

					'&-3': {
						/*tw*/ '@apply text-[16px] font-normal leading-[24px] text-black-900':
							{},
					},

					'&-4': {
						/*tw*/ '@apply text-[14px] font-normal leading-[21px] text-black-900':
							{},
					},

					'&-5': {
						/*tw*/ '@apply text-[12px] font-normal leading-[18px] tracking-[0.2px] text-black-900':
							{},
					},
				},

				label: {
					'&-1': {
						/*tw*/ '@apply text-[12px] font-medium leading-[18px] text-black-900':
							{},
					},

					'&-2': {
						/*tw*/ '@apply text-[12px] font-normal leading-[15px] text-black-900':
							{},
					},

					'&-3': {
						/*tw*/ '@apply text-[10px] font-medium leading-[15px] text-black-900':
							{},
					},
				},
			})
		)
	})
}
