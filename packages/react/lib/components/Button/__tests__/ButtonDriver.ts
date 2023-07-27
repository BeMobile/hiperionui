import { ButtonClass } from '@/lib/test/constants'

import { ButtonVariantProps } from '..'

import { ButtonOutlinedDriver } from './ButtonOutlinedDriver'
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

	constructor(private config: Required<ButtonVariantProps>) {}

	assertImageSnapshot(titlePrefix: string) {
		cy.get(this.buttonClassBase).matchImage({
			title: `${titlePrefix}-${this.config.variant}-${this.config.colorScheme}-${this.config.size}`,
		})
	}
}
