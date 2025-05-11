'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useMediaQuery } from '@/hooks'
import { cn } from '@/lib/utils'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import React from 'react'
import { buttonVariants, Tooltip, TooltipContent, TooltipTrigger } from '../ui'
import { Icon } from '../ui/icon.component'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string
		title: string
		icon?: keyof typeof dynamicIconImports
	}[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
	const pathname = usePathname()
	const isLaptop = useMediaQuery('(min-width: 1200px)')

	return (
		<TooltipProvider>
			<nav className={cn('flex w-full flex-col gap-1', className)} {...props}>
				{items.map(item => (
					<Tooltip key={item.href} delayDuration={0}>
						<TooltipTrigger asChild>
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									buttonVariants({ variant: 'secondary', size: !isLaptop ? 'icon' : 'default' }),
									'gap-3',
									pathname === item.href ? 'bg-muted-foreground/20' : 'hover:bg-muted-foreground/10',
									'laptop:justify-start'
								)}
							>
								<Icon name={item.icon!} size={18} className="aspect-square" />{' '}
								<span className="hidden laptop:block">{item.title}</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right" className="laptop:hidden">
							{item.title}
						</TooltipContent>
					</Tooltip>
				))}
			</nav>
		</TooltipProvider>
	)
}
