import { cn } from '@be-kit/style-utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import React, { ComponentProps } from 'react'

export type SwitchRootProps = ComponentProps<typeof SwitchPrimitive.Root>

function Root({ children, ...props }: SwitchRootProps) {
	return (
		<SwitchPrimitive.Root
			{...props}
			className={cn('hiperion-switch', props.className)}
		>
			{children}
		</SwitchPrimitive.Root>
	)
}

export type SwitchThumbProps = ComponentProps<typeof SwitchPrimitive.Thumb>

function Thumb({ ...props }: SwitchThumbProps) {
	return (
		<SwitchPrimitive.Thumb
			{...props}
			className={cn('hiperion-switch-thumb', props.className)}
		/>
	)
}

function Label({
	children,
	...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
	return (
		<label {...props} className={cn('hiperion-switch-label', props.className)}>
			{children}
		</label>
	)
}

export interface FullSwitchProps extends SwitchRootProps {
	label?: React.ReactNode
	revert?: boolean
}

function Full({ label, revert, ...props }: FullSwitchProps) {
	return (
		<div className='hiperion-switch-container'>
			{label && (
				<Label className={revert ? 'order-1' : ''} htmlFor={props.id}>
					{label}
				</Label>
			)}

			<Root {...props}>
				<Thumb />
			</Root>
		</div>
	)
}

export { Full, Root, Thumb, Label }
