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

	assertMainColorHover() {
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

	assertSecondaryColorHover() {
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
}
