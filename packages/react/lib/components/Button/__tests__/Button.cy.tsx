import { ButtonVariantProps } from '@/dist'
import { Button } from '@/lib'
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
		driver.solid.assertMainColorAndMediumSizeClass()

		driver.assertCommonStyles()
		driver.size.assertMedium()
		driver.solid.assertMainColor()

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

	describe('Solid', () => {
		it('should render main solid button with correct styles', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			const driver = new ButtonDriver(props)

			cy.mount(<Button {...props}>Button</Button>)

			driver.solid.assertMainColorAndBigSizeClass()

			driver.assertCommonStyles()
			driver.size.assertBig()
			driver.solid.assertMainColor()
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

			driver.solid.assertSecondaryColorAndBigSizeClass()

			driver.assertCommonStyles()
			driver.size.assertBig()
			driver.solid.assertSecondaryColor()
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
			driver.outlined.assertMainColorAndBigSizeClass()

			driver.assertCommonStyles()
			driver.size.assertBig()
			driver.outlined.assertMainColor()
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
			driver.outlined.assertSecondaryColorAndBigSizeClass()

			driver.assertCommonStyles()
			driver.size.assertBig()
			driver.outlined.assertSecondaryColor()
			cy.get(driver.buttonClassBase).and('have.text', 'Button')
		})
	})

	describe('Size', () => {
		it('should render big button', () => {
			const driver = new ButtonDriver({
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			})

			cy.mount(<Button size='big'>Button</Button>)

			driver.size.assertBig()
		})

		it('should render medium button', () => {
			const driver = new ButtonDriver({
				variant: 'solid',
				colorScheme: 'main',
				size: 'medium',
			})

			cy.mount(<Button size='medium'>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
			driver.size.assertMedium()
		})

		it('should render small button', () => {
			const driver = new ButtonDriver({
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			})

			cy.mount(<Button size='small'>Button</Button>)

			driver.assertImageSnapshot(snapshotTitlePrefix)
			driver.size.assertSmall()
		})
	})
})
