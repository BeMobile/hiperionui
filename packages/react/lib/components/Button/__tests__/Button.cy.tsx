import { Button } from '@/lib'
import { ButtonClass } from '@/lib/test/constants'

describe('<Button />', () => {
	it('should render default button (solid variant, main color and big size)', () => {
		cy.mount(<Button>Button</Button>)

		cy.get(`.${ButtonClass.BASE}`)
			.should('have.text', 'Button')
			.and('have.class', ButtonClass.BASE)
			.and('have.class', ButtonClass.SOLID)
			.and('have.class', ButtonClass.SOLID_MAIN)
			.and('have.class', ButtonClass.BIG)
			.and('not.have.class', ButtonClass.OUTLINED)
			.checkButtonStyles()
	})
})
