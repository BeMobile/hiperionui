import { BadgeVariantProps } from '..'

export class BadgeDriver {
	readonly buttonClassBase = '.hiperion-badge'
	readonly browser = Cypress.browser

	constructor(private config: Required<BadgeVariantProps>) {}

	assertImageSnapshot(titlePrefix?: string) {
		const _titlePrefix = titlePrefix ? `${titlePrefix}-` : ''
		cy.get(this.buttonClassBase).matchImage({
			title: `${_titlePrefix}${this.config.variant}-${this.config.colorScheme}-${this.config.size}`,
		})
	}
}
