import { cn } from '@be-kit/style-utils'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

type ProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>

function Provider({ children, ...props }: ProviderProps) {
	return (
		<TooltipPrimitive.Provider {...props}>{children}</TooltipPrimitive.Provider>
	)
}

type RootProps = React.ComponentProps<typeof TooltipPrimitive.Root>

function Root({ children, ...props }: RootProps) {
	return <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
}

type TriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
	({ children, ...props }, ref) => {
		return (
			<TooltipPrimitive.Trigger {...props} ref={ref}>
				{children}
			</TooltipPrimitive.Trigger>
		)
	}
)

Trigger.displayName = 'Trigger'

type PortalProps = React.ComponentProps<typeof TooltipPrimitive.Portal>

function Portal({ children, ...props }: PortalProps) {
	return (
		<TooltipPrimitive.Portal {...props}>{children}</TooltipPrimitive.Portal>
	)
}

interface ContentProps
	extends React.ComponentProps<typeof TooltipPrimitive.Content> {
	withDefaultStyles?: boolean
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
	({ children, withDefaultStyles, ...props }, ref) => {
		return (
			<TooltipPrimitive.Content
				ref={ref}
				{...props}
				className={cn(
					withDefaultStyles
						? 'hiperion-tooltip hiperion-tooltip-top hiperion-tooltip-right hiperion-tooltip-left hiperion-tooltip-bottom'
						: '',
					props.className
				)}
			>
				{children}
			</TooltipPrimitive.Content>
		)
	}
)

Content.displayName = 'Content'

type ArrowProps = React.ComponentProps<typeof TooltipPrimitive.Arrow>

const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>(
	({ children, ...props }, ref) => {
		return (
			<TooltipPrimitive.Arrow ref={ref} {...props}>
				{children}
			</TooltipPrimitive.Arrow>
		)
	}
)

Arrow.displayName = 'Arrow'

interface FullProps {
	children: React.ReactNode
	message: string
	showArrow?: boolean
	onOpenChange?: RootProps['onOpenChange']
	open?: RootProps['open']
	side?: ContentProps['side']
	sideOffset?: ContentProps['sideOffset']
	align?: ContentProps['align']
	alignOffset?: ContentProps['alignOffset']
}

function Full({
	children,
	message,
	showArrow = true,
	open,
	side,
	sideOffset,
	align,
	alignOffset,
	onOpenChange,
}: FullProps) {
	return (
		<Provider>
			<Root delayDuration={400} onOpenChange={onOpenChange} open={open}>
				<Trigger asChild>{children}</Trigger>
				<Portal>
					<Content
						withDefaultStyles
						side={side}
						align={align}
						sideOffset={sideOffset}
						alignOffset={alignOffset}
					>
						{message}
						{showArrow && <Arrow className='fill-gray-700' />}
					</Content>
				</Portal>
			</Root>
		</Provider>
	)
}

export { Provider, Root, Trigger, Full, Content, Portal, Arrow }
