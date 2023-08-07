// todo: test props drilling

import { toRgbString } from '@/lib/test/util'

import * as Switch from '..'

import { theme } from '@hiperionui/theme'

describe('<Switch />', () => {
	describe('Full', () => {
		it('should render switch component', () => {
			cy.mount(<Switch.Full />)

			cy.get('.hiperion-switch').should(
				'have.css',
				'background-color',
				toRgbString(theme.colors.gray[500])
			)
			cy.get('.hiperion-switch').click()
			cy.get('.hiperion-switch')
				.should('have.attr', 'data-state', 'checked')
				.and(
					'have.css',
					'background-color',
					toRgbString(theme.colors.main[500])
				)
			cy.get('.hiperion-switch-thumb').should(
				'have.css',
				'transform',
				'matrix(1, 0, 0, 1, 28, 0)'
			)
		})

		it('should render switch component with label text', () => {
			cy.mount(<Switch.Full label='Switch' id='switch' />)
			cy.contains('Switch')
		})

		it('should render switch component with label text ed', () => {
			cy.mount(<Switch.Full label='Switch' revert id='switch' />)
			cy.contains('Switch').should('have.css', 'order', '1')
		})
	})
})
