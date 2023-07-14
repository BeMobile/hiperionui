/// <reference types="cypress" />

import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'
import '@frsource/cypress-plugin-visual-regression-diff'

const browser = Cypress.browser

const isFirefox = browser.name === 'firefox'

Cypress.Commands.add(
	'checkButtonStyles',
	({ titlePrefix, colorScheme = 'main', size = 'big', variant = 'solid' }) => {
		const buttonClassBase = `.${ButtonClass.BASE}`

		cy.get(buttonClassBase).matchImage({
			title: `${titlePrefix}-${variant}-${colorScheme}-${size}-${Cypress.browser.name}`,
		})

		cy.get(buttonClassBase).should('have.css', 'cursor', 'pointer')

		if (variant === 'solid' && colorScheme === 'main') {
			// the real events library doesn't work on firefox
			if (isFirefox) return

			cy.get(buttonClassBase).realHover()
			cy.get(buttonClassBase)
				.should(
					'have.css',
					'border',
					`3px solid ${toRgbString(theme.colors.main[100])}`
				)
				.and(
					'have.css',
					'background-color',
					toRgbString(theme.colors.main[600])
				)
		}
	}
)
