interface ButtonSizeDriverProps {
	buttonClassBase: string
}

export class ButtonSizeDriver {
	private buttonClassBase: ButtonSizeDriverProps['buttonClassBase']

	constructor({ buttonClassBase }: ButtonSizeDriverProps) {
		this.buttonClassBase = buttonClassBase
	}

	assertBig() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '40px')
			.and('have.css', 'padding-right', '40px')
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '19.2px')
	}

	assertMedium() {
		cy.get(this.buttonClassBase)
			.should('have.css', 'padding-left', '32px')
			.and('have.css', 'padding-right', '32px')
			.and('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'font-size', '18px')
			.and('have.css', 'font-weight', '500')
			.and('have.css', 'line-height', '19.2px')
	}

	assertSmall() {
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
}
