import { ButtonClass } from '@/lib/test/constants'
import { theme } from '@hiperionui/theme'

import { ButtonVariantProps } from '..'

import { ButtonOutlinedDriver } from './ButtonOutlinedDriver'
import { ButtonSizeDriver } from './ButtonSizeDriver'
import { ButtonSolidDriver } from './ButtonSolidDriver'

export class ButtonDriver {
	readonly buttonClassBase = `.${ButtonClass.BASE}`
	readonly browser = Cypress.browser

	solid = new ButtonSolidDriver({
		buttonClassBase: this.buttonClassBase,
		browser: this.browser,
	})
	outlined = new ButtonOutlinedDriver({
		buttonClassBase: this.buttonClassBase,
		browser: this.browser,
	})
	size = new ButtonSizeDriver({ buttonClassBase: this.buttonClassBase })

	constructor(private config: Required<ButtonVariantProps>) {}

	get isFirefox() {
		return this.browser.name === 'firefox'
	}

	assertCommonStyles() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'border-radius', theme.borderRadius.pill)
			.and('have.css', 'cursor', 'pointer')
	}

	assertImageSnapshot(titlePrefix: string) {
		cy.get(this.buttonClassBase).matchImage({
			title: `${titlePrefix}-${this.config.variant}-${this.config.colorScheme}-${this.config.size}`,
		})
	}
}
