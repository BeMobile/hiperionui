import { ButtonVariantProps } from '@/dist'
import { Button } from '@/lib'
import { toRgbString } from '@/lib/test/util'
import { theme } from '@hiperionui/theme'

import { ButtonDriver } from './ButtonDriver'

const driver = new ButtonDriver()

const snapshotTitlePrefix = 'match-props'

describe('<Button />', () => {
	it('should render default button with correct styles (solid variant, main color and big size)', () => {
		cy.mount(<Button>Button</Button>)

		driver.assertCommonStyles()
		driver
			.assertSolidMainBigButtonClass()
			.and('have.text', 'Button')
			.assertButtonStyles({
				snapshot: {
					titlePrefix: 'default-button',
				},
			})
	})

	it('should render disabled solid button with correct styles', () => {
		cy.mount(<Button disabled>Button</Button>)

		driver.assertCommonStyles()
		cy.get(driver.buttonClassBase)
			.should('have.css', 'cursor', 'not-allowed')
			.and('have.css', 'background-color', toRgbString(theme.colors.gray[400]))
			.and('have.text', 'Button')
			.matchImage({
				updateImages: true,
				title: `disabled-solid-${Cypress.browser.name}`,
			})
	})

	describe('Main Color', () => {
		it('should render solid button with correct styles', () => {
			const props = {
				variant: 'solid',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertCommonStyles()
			driver
				.assertSolidMainBigButtonClass()
				.and('have.text', 'Button')
				.assertButtonStyles({
					...props,
				})
		})

		it('should render outlined button with correct styles', () => {
			const props = {
				variant: 'outlined',
				colorScheme: 'main',
				size: 'big',
			} satisfies ButtonVariantProps

			cy.mount(<Button {...props}>Button</Button>)

			driver.assertCommonStyles()
			cy.get(driver.buttonClassBase).assertButtonStyles({
				snapshot: {
					titlePrefix: snapshotTitlePrefix,
				},
				...props,
			})
		})
	})

	// describe('Secondary Color', () => {})

	describe('Size', () => {
		it('should render big button', () => {
			cy.mount(<Button size='big'>Button</Button>)

			cy.assertButtonStyles({
				size: 'big',
			})
		})

		it('should render medium button', () => {
			cy.mount(<Button size='medium'>Button</Button>)

			cy.assertButtonStyles({
				size: 'medium',
				snapshot: { titlePrefix: snapshotTitlePrefix },
			})
		})

		it('should render small button', () => {
			cy.mount(<Button size='small'>Button</Button>)

			cy.assertButtonStyles({
				size: 'small',
				snapshot: { titlePrefix: snapshotTitlePrefix },
			})
		})
	})
})
