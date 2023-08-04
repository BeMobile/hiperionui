import { BadgeClass } from '@/lib/test/constants'
import { toRgbString } from '@/lib/test/util'

import { Badge, BadgeVariantProps } from '..'

import { theme } from '@hiperionui/theme'

import { BadgeDriver } from './BadgeDriver'

describe('<Badge />', () => {
	describe('Variant', () => {
		it('should render solid variant', () => {
			const props = {
				colorScheme: 'gray',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})

		it('should render outlined variant', () => {
			const props = {
				colorScheme: 'gray',
				size: 'big',
				variant: 'outlined',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.BIG)
				.and('have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})
	})

	describe('Color', () => {
		it('should render gray color', () => {
			const props = {
				colorScheme: 'gray',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
		})

		it('should render red color', () => {
			const props = {
				colorScheme: 'red',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.RED)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})

		it('should render orange color', () => {
			const props = {
				colorScheme: 'orange',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.ORANGE)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})

		it('should render green color', () => {
			const props = {
				colorScheme: 'green',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GREEN)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})
	})

	describe('Size', () => {
		it('should render big size', () => {
			const props = {
				colorScheme: 'gray',
				size: 'big',
				variant: 'solid',
			} satisfies BadgeVariantProps

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.BIG)
				.and('not.have.class', BadgeClass.OUTLINED)
		})

		it('should render medium size', () => {
			const props = {
				colorScheme: 'gray',
				size: 'medium',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.MEDIUM)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})

		it('should render small size', () => {
			const props = {
				colorScheme: 'gray',
				size: 'small',
				variant: 'solid',
			} satisfies BadgeVariantProps

			const driver = new BadgeDriver(props)

			cy.mount(<Badge {...props}>1</Badge>)
			cy.contains('1')
				.should('have.class', BadgeClass.BASE)
				.and('have.class', BadgeClass.GRAY)
				.and('have.class', BadgeClass.SMALL)
				.and('not.have.class', BadgeClass.OUTLINED)
			driver.assertImageSnapshot()
		})
	})

	it('should render a badge with custom color', () => {
		cy.mount(<Badge className='bg-black-100'>1</Badge>)
		cy.contains('1')
			.should('have.class', BadgeClass.BASE)
			.and('have.class', BadgeClass.GRAY)
			.and('have.class', BadgeClass.BIG)
			.and('not.have.class', BadgeClass.OUTLINED)
			.and('have.css', 'backgroundColor', toRgbString(theme.colors.black[100]))
	})
})
