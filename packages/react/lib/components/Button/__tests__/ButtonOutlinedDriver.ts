import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

interface ButtonOutlinedDriverProps {
	buttonClassBase: string
	browser: Cypress.Browser
}

export class ButtonOutlinedDriver {
	private buttonClassBase: ButtonOutlinedDriverProps['buttonClassBase']
	private browser: ButtonOutlinedDriverProps['browser']

	constructor({ buttonClassBase, browser }: ButtonOutlinedDriverProps) {
		this.buttonClassBase = buttonClassBase
		this.browser = browser
	}

	private get isFirefox() {
		return this.browser.name === 'firefox'
	}

	private assertVariant() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'border-width', '2px')
			.and('have.css', 'background-color', toRgbString('transparent'))
	}

	assertMainColor() {
		this.assertVariant()

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

	assertMainColorAndBigSizeClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.OUTLINED)
			.and('have.class', ButtonClass.OUTLINED_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.SOLID)
	}

	assertSecondaryColor() {
		this.assertVariant()

		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'border-color',
				toRgbString(theme.colors.secondary[500])
			)
			.and('have.css', 'color', toRgbString(theme.colors.secondary[500]))

		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'border',
				`2px solid ${toRgbString(theme.colors.secondary[700])}`
			)
			.and('have.css', 'color', toRgbString(theme.colors.secondary[800]))
	}

	assertSecondaryColorAndBigSizeClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.OUTLINED)
			.and('have.class', ButtonClass.OUTLINED_SECONDARY)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.SOLID)
	}
}
