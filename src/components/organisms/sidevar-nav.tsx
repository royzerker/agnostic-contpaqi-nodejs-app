'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui'
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
									'flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
									pathname === item.href ? 'bg-muted-foreground/20' : 'hover:bg-muted-foreground/10',
									'md:justify-start'
								)}
							>
								<Icon name={item.icon!} size={18} className="aspect-square" /> <span className="hidden md:block">{item.title}</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right" className="md:hidden">
							{item.title}
						</TooltipContent>
					</Tooltip>
				))}
			</nav>
		</TooltipProvider>
	)
}
