import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

export class __ButtonDriver__ {
	readonly buttonClassBase = `.${ButtonClass.BASE}`
	private browser = Cypress.browser

	get isFirefox() {
		return this.browser.name === 'firefox'
	}

	assertBigSize() {
		cy.get(this.buttonClassBase).should('have.css', 'padding-left', '40px')
		cy.and('have.css', 'padding-right', '40px')
		cy.and('have.css', 'padding-top', '14px')
		cy.and('have.css', 'padding-bottom', '14px')
	}

	assertMediumSize() {
		cy.get(this.buttonClassBase).should('have.css', 'padding-left', '32px')
		cy.and('have.css', 'padding-right', '32px')
		cy.and('have.css', 'padding-top', '14px')
		cy.and('have.css', 'padding-bottom', '14px')
	}

	assertSmallSize() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '16px')
			.and('have.css', 'padding-right', '16px')
			.and('have.css', 'padding-top', '8px')
			.and('have.css', 'padding-bottom', '8px')
	}

	private assertSolidVariant() {
		cy.get(this.buttonClassBase)
			.and('have.css', 'color', toRgbString('#ffffff'))
			.and('have.css', 'border-color', toRgbString('transparent'))
	}

	assertSolidVariantAndMainColor() {
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
}
