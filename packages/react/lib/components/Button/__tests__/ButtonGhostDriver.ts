import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

interface ButtonGhostDriverProps {
	buttonClassBase: string
	browser: Cypress.Browser
}

export class ButtonGhostDriver {
	private buttonClassBase: ButtonGhostDriverProps['buttonClassBase']
	private browser: ButtonGhostDriverProps['browser']

	constructor({ buttonClassBase, browser }: ButtonGhostDriverProps) {
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
		cy.get(this.buttonClassBase).should(
			'have.css',
			'color',
			toRgbString(theme.colors.main[600])
		)
	}

	assertSecondaryColorHover() {
		// the real events library doesn't work on firefox
		if (this.isFirefox) return

		cy.get(this.buttonClassBase).realHover()
		cy.get(this.buttonClassBase).should(
			'have.css',
			'color',
			toRgbString(theme.colors.secondary[600])
		)
	}
}
