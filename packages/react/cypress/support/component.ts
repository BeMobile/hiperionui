/* eslint-disable @typescript-eslint/no-namespace */
import './commands'
import '@cypress/code-coverage/support'
import 'cypress-real-events'

import { ButtonVariantProps } from '@/lib'
import { mount } from 'cypress/react18'

declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount
			checkButtonStyles: (
				props: Partial<ButtonVariantProps> & { titlePrefix: string }
			) => void
		}
	}
}

Cypress.Commands.add('mount', mount)
