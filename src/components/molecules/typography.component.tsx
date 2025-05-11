// import { lusitana } from '@/app/fonts/fonts'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { Mdx } from '../ui'

const titleVariants = cva(' text-balance leading-tight', {
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-sm tablet:text-base',
			lg: 'text-base laptop:text-lg',
			xl: 'text-base tablet:text-lg laptop:text-xl',
			'2xl': 'text-lg tablet:text-xl laptop:text-2xl',
			'3xl': 'text-xl tablet:text-2xl laptop:text-3xl',
			'4xl': 'text-2xl tablet:text-3xl laptop:text-4xl',
			'5xl': 'text-3xl tablet:text-4xl laptop:text-5xl',
			'6xl': 'text-5xl tablet:text-5xl laptop:text-6xl',
			'7xl': 'text-5xl tablet:text-6xl laptop:text-7xl',
			'8xl': 'text-6xl tablet:text-7xl  laptop:text-8xl',
			'9xl': 'text-7xl tablet:text-8xl laptop:text-9xl'
		},
		weight: {
			thin: 'font-thin',
			extralight: 'font-extralight',
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			extrabold: 'font-extrabold',
			black: 'font-black'
		},
		defaultVariants: {
			size: 'base',
			weight: 'normal'
		}
	}
})

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
	as?: React.ElementType
	type?: 'md' | 'text'
}

const Typography = React.forwardRef<HTMLElement, TitleProps>(
	({ as: Component = 'p', type = 'text', className, weight, size, ...props }, ref) => {
		const Comp = type === 'md' ? Mdx : Component

		// return <Comp className={cn(titleVariants({ size, weight }), className, lusitana.className)} {...props} ref={ref} />
		return <Comp className={cn(titleVariants({ size, weight }), className)} {...props} ref={ref} />
	}
)

Typography.displayName = 'Typography'

export { titleVariants, Typography }
