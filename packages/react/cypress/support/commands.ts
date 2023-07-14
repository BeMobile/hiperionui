/// <reference types="cypress" />

import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'
import '@frsource/cypress-plugin-visual-regression-diff'

Cypress.Commands.add('checkButtonStyles', (props) => {
	const buttonClassBase = `.${ButtonClass.BASE}`

	const { colorScheme, size, variant } = props || {
		variant: 'solid',
		colorScheme: 'main',
		size: 'big',
	}

	cy.get(buttonClassBase).matchImage({
		title: `button-default-${variant}-${colorScheme}-${size}-${Cypress.browser.name}`,
	})

	cy.get(buttonClassBase).should('have.css', 'cursor', 'pointer')

	if (variant === 'solid' && colorScheme === 'main') {
		cy.get(buttonClassBase).realHover()
		cy.get(buttonClassBase)
			.should(
				'have.css',
				'border',
				`3px solid ${toRgbString(theme.colors.main[100])}`
			)
			.and('have.css', 'background-color', toRgbString(theme.colors.main[600]))
	}
})
