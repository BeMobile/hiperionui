import { ButtonClass } from '@/lib/test/constants'

import { ButtonVariantProps } from '..'

import { ButtonGhostDriver } from './ButtonGhostDriver'
import { ButtonOutlinedDriver } from './ButtonOutlinedDriver'
import { ButtonSolidDriver } from './ButtonSolidDriver'

export class ButtonDriver {
	readonly buttonClassBase = `.${ButtonClass.BASE}`
	readonly browser = Cypress.browser

	private driverProps = {
		buttonClassBase: this.buttonClassBase,
		browser: this.browser,
	}

	solid = new ButtonSolidDriver(this.driverProps)
	outlined = new ButtonOutlinedDriver(this.driverProps)
	ghost = new ButtonGhostDriver(this.driverProps)

	constructor(private config: Required<ButtonVariantProps>) {}

	assertImageSnapshot(titlePrefix: string) {
		cy.get(this.buttonClassBase).matchImage({
			title: `${titlePrefix}-${this.config.variant}-${this.config.colorScheme}-${this.config.size}`,
		})
	}
}
