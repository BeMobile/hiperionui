import { cn } from '@be-kit/style-utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import React from 'react'

type RootProps = React.ComponentProps<typeof SwitchPrimitive.Root>

const Root = React.forwardRef<HTMLButtonElement, RootProps>(
	({ children, ...props }, ref) => {
		return (
			<SwitchPrimitive.Root
				ref={ref}
				{...props}
				className={cn('hiperion-switch', props.className)}
			>
				{children}
			</SwitchPrimitive.Root>
		)
	}
)

Root.displayName = 'Root'

type ThumbProps = React.ComponentProps<typeof SwitchPrimitive.Thumb>

const Thumb = React.forwardRef<HTMLSpanElement, ThumbProps>(
	({ ...props }, ref) => {
		return (
			<SwitchPrimitive.Thumb
				ref={ref}
				{...props}
				className={cn('hiperion-switch-thumb', props.className)}
			/>
		)
	}
)

Thumb.displayName = 'Thumb'

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

interface FullProps extends RootProps {
	label?: React.ReactNode
	revert?: boolean
}

function Full({ label, revert, ...props }: FullProps) {
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
