import { ButtonClass } from '@/lib/test/constants'
import { theme } from '@hiperionui/theme'

export class ButtonDriver {
	buttonClassBase = `.${ButtonClass.BASE}`

	assertCommonStyles() {
		return cy
			.get(this.buttonClassBase)
			.should('have.css', 'border-radius', theme.borderRadius.pill)
	}

	assertSolidMainBigButtonClass() {
		return cy
			.get(this.buttonClassBase)
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.SOLID)
			.and('have.class', ButtonClass.SOLID_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.OUTLINED)
	}
}
