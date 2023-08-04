import { Badge, BadgeVariantProps } from '..'

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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-big')
				.and('have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-red')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-orange')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-green')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-big')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-medium')
				.and('not.have.class', 'hiperion-badge-outlined')
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
				.should('have.class', 'hiperion-badge')
				.and('have.class', 'hiperion-badge-gray')
				.and('have.class', 'hiperion-badge-small')
				.and('not.have.class', 'hiperion-badge-outlined')
			driver.assertImageSnapshot()
		})
	})
})
