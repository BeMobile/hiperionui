import { Button, ButtonVariantProps } from '@/lib'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

import { ButtonDriver } from './ButtonDriver'

const snapshotTitlePrefix = 'match-props'

describe('<Button />', () => {
	it('should render default button with correct styles (solid variant, main color and medium size)', () => {
		const driver = new ButtonDriver({
			variant: 'solid',
			colorScheme: 'main',
			size: 'medium',
		})

		cy.mount(<Button>Button</Button>)

		driver.assertImageSnapshot('default-button')
		driver.solid.assertMainColorHover()

		cy.get(driver.buttonClassBase).should('have.text', 'Button')
	})

	it('should render disabled solid button with correct styles', () => {
		const driver = new ButtonDriver({
			variant: 'solid',
			colorScheme: 'main',
			size: 'medium',
		})

		cy.mount(<Button disabled>Button</Button>)

		driver.assertImageSnapshot('disabled')

		cy.get(driver.buttonClassBase)
			.should('have.css', 'cursor', 'not-allowed')
			.and('have.css', 'border-radius', theme.borderRadius.pill)
			.and('have.css', 'background-color', toRgbString(theme.colors.gray[400]))
			.and('have.text', 'Button')
	})

	it('should render button with custom background', () => {
		cy.mount(<Button className='bg-black-100'>Button</Button>)

		cy.get('button').should('have.css', 'background-color', 'rgb(75, 74, 74)')
	})

	describe('Solid', () => {
		it('should render main solid button with correct styles', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
			driver.solid.assertMainColorHover()
			cy.get(driver.buttonClassBase).and('have.text', 'Button')
		})

		it('should render secondary solid button with correct styles', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'secondary',
				size: 'big',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
			driver.solid.assertSecondaryColorHover()
			cy.get(driver.buttonClassBase).and('have.text', 'Button')
		})
	})

	describe('Outlined', () => {
		it('should render main outlined button with correct styles', () => {
			const props = {
				variant: 'outlined',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)

			driver.outlined.assertMainColorHover()
			cy.get(driver.buttonClassBase).and('have.text', 'Button')
		})

		it('should render secondary outlined button with correct styles', () => {
			const props = {
				variant: 'outlined',
				colorScheme: 'secondary',
				size: 'big',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
			driver.outlined.assertSecondaryColorHover()
			cy.get(driver.buttonClassBase).and('have.text', 'Button')
		})
	})

	describe('Size', () => {
		it('should render big button', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			cy.mount(<Button {...props}>Button</Button>)
		})

		it('should render medium button', () => {
			const driver = new ButtonDriver({
				variant: 'solid',
				colorScheme: 'main',
				size: 'medium',
			})

			cy.mount(<Button size='medium'>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
		})

		it('should render small button', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'main',
				size: 'small',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
		})
	})
})
