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
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '40px')
			.should('have.css', 'padding-right', '40px')
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '19.2px')
	}

	assertMediumSize() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '32px')
			.should('have.css', 'padding-right', '32px')
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

	private assertSolidVariant() {
		cy.get(this.buttonClassBase)
			.and('have.css', 'color', toRgbString('#ffffff'))
			.and('have.css', 'border-color', toRgbString('transparent'))
	}

	private assertOutlinedVariant() {
		cy.get(this.buttonClassBase).should('have.css', 'border-width', '1px')
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

	assertOutlinedVariantAndMainColor() {
		this.assertOutlinedVariant()

		cy.get(this.buttonClassBase)
			.should('have.css', 'border-color', toRgbString(theme.colors.main[500]))
			.and('have.css', 'color', toRgbString(theme.colors.main[500]))
	}
}
