import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

import { ButtonVariantProps } from '..'

export class ButtonDriver {
	readonly buttonClassBase = `.${ButtonClass.BASE}`
	readonly browser = Cypress.browser

	constructor(private config: Required<ButtonVariantProps>) {}

	get isFirefox() {
		return this.browser.name === 'firefox'
	}

	private assertSolidVariant() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'color', toRgbString('#ffffff'))
			.and('have.css', 'border-color', toRgbString('transparent'))
	}

	private assertOutlinedVariant() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'border-width', '2px')
			.and('have.css', 'background-color', toRgbString('transparent'))
	}

	assertCommonStyles() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'border-radius', theme.borderRadius.pill)
			.and('have.css', 'cursor', 'pointer')
	}

	assertSolidMainBigButtonClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.SOLID)
			.and('have.class', ButtonClass.SOLID_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.OUTLINED)
	}

	assertOutlinedMainBigButtonClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.OUTLINED)
			.and('have.class', ButtonClass.OUTLINED_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.SOLID)
	}

	assertBigSizeStyles() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '40px')
			.and('have.css', 'padding-right', '40px')
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '19.2px')
	}

	assertMediumSize() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '32px')
			.and('have.css', 'padding-right', '32px')
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '19.2px')
	}

	assertSmallSize() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '16px')
			.and('have.css', 'padding-right', '16px')
			.and('have.css', 'padding-top', '8px')
			.and('have.css', 'padding-bottom', '8px')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '24px')
			.and('have.css', 'letter-spacing', '0.2px')
	}

	assertSolidVariantAndMainColorStyles() {
		this.assertSolidVariant()

		cy.get(this.buttonClassBase).should(
			'have.css',
			'background-color',
			toRgbString(theme.colors.main[500])
		)

		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'border',
				`3px solid ${toRgbString(theme.colors.main[100])}`
			)
			.and('have.css', 'background-color', toRgbString(theme.colors.main[600]))
	}

	assertOutlinedVariantAndMainColorStyles() {
		this.assertOutlinedVariant()

		cy.get(this.buttonClassBase)
			.should('have.css', 'border-color', toRgbString(theme.colors.main[500]))
			.and('have.css', 'color', toRgbString(theme.colors.main[500]))

		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'border',
				`2px solid ${toRgbString(theme.colors.main[700])}`
			)
			.and('have.css', 'color', toRgbString(theme.colors.main[800]))
	}

	assertImageSnapshot(titlePrefix: string) {
		cy.get(this.buttonClassBase).matchImage({
			title: `${titlePrefix}-${this.config.variant}-${this.config.colorScheme}-${this.config.size}`,
		})
	}
}
