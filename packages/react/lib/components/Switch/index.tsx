import { cn } from '@be-kit/style-utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { ComponentProps } from 'react'

export interface SwitchProps
	extends ComponentProps<typeof SwitchPrimitive.Root> {
	labelText?: string
	revert?: boolean
}

export function Switch({ labelText, revert, ...props }: SwitchProps) {
	return (
		<div className='hiperion-switch-container'>
			{labelText && (
				<label
					className={cn('hiperion-switch-label', {
						'order-1': revert,
					})}
					htmlFor={props.id}
				>
					{labelText}
				</label>
			)}

			<SwitchPrimitive.Root className='hiperion-switch' {...props}>
				<SwitchPrimitive.Thumb className='hiperion-switch-thumb' />
			</SwitchPrimitive.Root>
		</div>
	)
}
