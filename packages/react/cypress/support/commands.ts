/// <reference types="cypress" />

import { ButtonClass } from '@/lib/test/constants'
import { remToPx, toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

Cypress.Commands.add('checkButtonStyles', (props) => {
	const buttonClassBase = `.${ButtonClass.BASE}`

	const { colorScheme, size, variant } = props || {
		variant: 'solid',
		colorScheme: 'main',
		size: 'big',
	}

	cy.get(buttonClassBase)
		.should('have.css', 'cursor', 'pointer')
		.and('have.css', 'border-radius', theme.borderRadius.pill)

	if (size === 'big') {
		cy.get(buttonClassBase)
			.and('have.css', 'padding-left', remToPx(2.5))
			.and('have.css', 'padding-right', remToPx(2.5))
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
	}

	if (variant === 'solid' && colorScheme === 'main') {
		cy.get(buttonClassBase)
			.should('have.css', 'color', toRgbString('#fff'))
			.and('have.css', 'background-color', toRgbString(theme.colors.main[500]))

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
