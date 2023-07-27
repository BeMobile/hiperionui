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

	assertMainColorHover() {
		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'background-color',
				toRgbString(theme.colors.main[500])
			)
			.and('have.css', 'color', toRgbString('#fff'))
	}

	assertSecondaryColorHover() {
		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase)
			.should(
				'have.css',
				'background-color',
				toRgbString(theme.colors.secondary[500])
			)
			.and('have.css', 'color', toRgbString('#fff'))
	}
}
