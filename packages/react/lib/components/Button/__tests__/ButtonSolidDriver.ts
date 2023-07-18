import { ButtonClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

interface ButtonSolidDriverProps {
	buttonClassBase: string
	browser: Cypress.Browser
}

export class ButtonSolidDriver {
	private buttonClassBase: ButtonSolidDriverProps['buttonClassBase']
	private browser: ButtonSolidDriverProps['browser']

	constructor({ buttonClassBase, browser }: ButtonSolidDriverProps) {
		this.buttonClassBase = buttonClassBase
		this.browser = browser
	}

	private get isFirefox() {
		return this.browser.name === 'firefox'
	}

	private assertVariant() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'color', toRgbString('#ffffff'))
			.and('have.css', 'border-color', toRgbString('transparent'))
	}

	assertMainColor() {
		this.assertVariant()

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

	assertMainColorAndBigSizeClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.SOLID)
			.and('have.class', ButtonClass.SOLID_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.OUTLINED)
	}

	assertSecondaryColor() {
		this.assertVariant()

		cy.get(this.buttonClassBase).should(
			'have.css',
			'background-color',
			toRgbString(theme.colors.secondary[500])
		)

		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'border',
				`3px solid ${toRgbString(theme.colors.secondary[100])}`
			)
			.and(
				'have.css',
				'background-color',
				toRgbString(theme.colors.secondary[600])
			)
	}

	assertSecondaryColorAndBigSizeClass() {
		cy.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.SOLID)
			.and('have.class', ButtonClass.SOLID_SECONDARY)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.OUTLINED)
	}
}
