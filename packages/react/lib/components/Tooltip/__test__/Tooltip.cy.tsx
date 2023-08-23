import * as Tooltip from '../index'

describe('Tooltip', () => {
	it('should render a button and show tooltip on hover', () => {
		cy.mount(
			<Tooltip.Full message='Tooltip'>
				<button>Button</button>
			</Tooltip.Full>
		)

		cy.contains('Button').realHover()
		cy.contains('Tooltip')
	})

	it('should render a button and show tooltip on hover without default styles', () => {
		cy.mount(
			<Tooltip.Provider>
				<Tooltip.Root delayDuration={400}>
					<Tooltip.Trigger asChild>
						<button>Button</button>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<Tooltip.Content>
							Tooltip
							<Tooltip.Arrow className='fill-gray-700' />
						</Tooltip.Content>
					</Tooltip.Portal>
				</Tooltip.Root>
			</Tooltip.Provider>
		)

		cy.contains('Button').realHover()
		cy.contains('Tooltip')
	})
})
