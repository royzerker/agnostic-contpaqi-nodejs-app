'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Radio, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarNavProps {
	className?: string
}

export const SidebarNav = ({ className }: SidebarNavProps) => {
	const pathname = usePathname()

	const navItems = [
		{
			title: 'Lista de usuarios',
			href: '/dashboard/users',
			icon: Users
		},
		{
			title: 'Streaming',
			href: '/dashboard/streaming',
			icon: Radio
		}
	]

	return (
		<nav className={cn('flex flex-col space-y-1', className)}>
			{navItems.map(item => {
				const Icon = item.icon
				const isActive = pathname === item.href

				return (
					<Button key={item.href} variant={isActive ? 'secondary' : 'ghost'} className={cn('justify-start', isActive ? 'bg-muted font-medium' : 'font-normal')} asChild>
						<Link href={item.href}>
							<Icon className="mr-2 h-4 w-4" />
							<span className="hidden lg:inline">{item.title}</span>
						</Link>
					</Button>
				)
			})}
		</nav>
	)
}
