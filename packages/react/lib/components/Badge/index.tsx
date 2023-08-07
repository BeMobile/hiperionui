import { cn } from '@be-kit/style-utils'
import { VariantProps as _VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const badgeStyles = cva(['hiperion-badge'], {
	variants: {
		variant: {
			solid: '',
			outlined: 'hiperion-badge-outlined',
		},
		colorScheme: {
			gray: 'hiperion-badge-gray',
			red: 'hiperion-badge-red',
			green: 'hiperion-badge-green',
			orange: 'hiperion-badge-orange',
		},
		size: {
			big: 'hiperion-badge-big',
			medium: 'hiperion-badge-medium',
			small: 'hiperion-badge-small',
		},
	},
})

type VariantProps = _VariantProps<typeof badgeStyles>

export type BadgeVariantProps = {
	[T in keyof VariantProps]: Exclude<VariantProps[T], null>
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & BadgeVariantProps

export function Badge({
	children,
	variant = 'solid',
	colorScheme = 'gray',
	size = 'big',
	...props
}: BadgeProps) {
	return (
		<span
			{...props}
			className={cn(
				badgeStyles({ variant, colorScheme, size }),
				props.className
			)}
		>
			{children}
		</span>
	)
}
