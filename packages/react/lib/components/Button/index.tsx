import '@/lib/styles/tailwind-output.css'

import { cn } from '@be-kit/style-utils'
import { VariantProps as _VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const buttonStyles = cva(['hiperion-btn'], {
	variants: {
		variant: {
			solid: 'hiperion-btn-solid',
			outlined: 'hiperion-btn-outlined',
			ghost: 'hiperion-btn-ghost',
		},
		colorScheme: {
			main: {},
			secondary: {},
		},
		size: {
			big: 'hiperion-btn-big',
			medium: 'hiperion-btn-medium',
			small: 'hiperion-btn-small',
		},
	},
	compoundVariants: [
		{
			variant: 'outlined',
			colorScheme: 'main',
			className: 'hiperion-btn-outlined-main',
		},
		{
			variant: 'outlined',
			colorScheme: 'secondary',
			className: 'hiperion-btn-outlined-secondary',
		},
		{
			variant: 'solid',
			colorScheme: 'main',
			className: 'hiperion-btn-solid-main',
		},
		{
			variant: 'solid',
			colorScheme: 'secondary',
			className: 'hiperion-btn-solid-secondary',
		},
		{
			variant: 'ghost',
			colorScheme: 'main',
			className: 'hiperion-btn-ghost-main',
		},
		{
			variant: 'ghost',
			colorScheme: 'secondary',
			className: 'hiperion-btn-ghost-secondary',
		},
	],
})

type VariantProps = _VariantProps<typeof buttonStyles>

export type ButtonVariantProps = {
	[T in keyof VariantProps]: Exclude<VariantProps[T], null>
}

type DefaultButton = {
	asChild?: false
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariantProps

type ButtonAsChild = {
	asChild?: true
	children: JSX.Element
	className?: string
} & ButtonVariantProps

export type ButtonProps = DefaultButton | ButtonAsChild

/**
 * # Variants
 * We have at total three variants: solid, outlined and ghost
 *
 * By default, the button has solid variant
 *
 * But you can customize each of then or create your own mixing our [button classes](https://imgur.com/lrg3KIJ)
 *
 * ## Solid
 * ![Solid variant](https://i.imgur.com/lrg3KIJ.png)
 * ## Outlined
 * ![Outlined variant](https://i.imgur.com/SbLE69o.png)
 * ## Ghost
 * ![Outlined variant](https://i.imgur.com/sdbBguJ.png)
 *
 * # Sizes
 *
 * We have at total three sizes: big, medium ,small
 *
 * By default, the button has medium size
 *
 * ## Big
 *
 * ![Big size](https://i.imgur.com/EgAAFD2.png)
 *
 * ## Medium
 *
 * ![Medium size](https://i.imgur.com/KoU9TkK.png)
 *
 * ## Small
 *
 * ![Small size](https://i.imgur.com/NoTLOlQ.png)
 *
 */
export function Button({
	className: externalClassName,
	variant = 'solid',
	children,
	colorScheme = 'main',
	asChild,
	size = 'medium',
	...props
}: ButtonProps) {
	const Children = asChild ? (
		React.cloneElement(children, {
			className: cn(
				buttonStyles({ variant, colorScheme, size }),
				externalClassName,
				children.props.className
			),
		})
	) : (
		<button
			className={cn(
				buttonStyles({ variant, colorScheme, size }),
				externalClassName
			)}
			{...props}
		>
			{children}
		</button>
	)

	return Children
}
