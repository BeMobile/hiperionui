import { __ButtonDriver__ } from './driver'

Cypress.Commands.add('assertButtonStyles', (props = {}) => {
	const {
		colorScheme = 'main',
		size = 'big',
		variant = 'solid',
		snapshot,
	} = props

	const driver = new __ButtonDriver__()

	const buttonClassBase = driver.buttonClassBase

	if (snapshot) {
		cy.get(buttonClassBase).matchImage({
			title: `${snapshot.titlePrefix}-${variant}-${colorScheme}-${size}-${Cypress.browser.name}`,
			updateImages: true,
		})
	}

	cy.get(buttonClassBase).should('have.css', 'cursor', 'pointer')

	const sizeHandlers: Record<typeof size, () => void> = {
		big: () => driver.assertBigSize(),
		medium: () => driver.assertMediumSize(),
		small: () => driver.assertSmallSize(),
	}

	const variantAndColorToken = `${variant}-${colorScheme}` as const

	const variantAndColorHandlers: Record<
		typeof variantAndColorToken,
		() => void
	> = {
		'solid-main': () => driver.assertSolidVariantAndMainColor(),
		'solid-secondary': () => {
			//
		},
		'outlined-main': () => {
			//
		},
		'outlined-secondary': () => {
			//
		},
	}

	sizeHandlers[size]()
	variantAndColorHandlers[variantAndColorToken]()
})
