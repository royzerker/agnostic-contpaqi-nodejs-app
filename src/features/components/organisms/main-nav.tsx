'use client'

import { Button } from '@/components/ui/button'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { CalendarDays, Info, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
	{
		title: 'Agenda',
		href: '/agenda',
		description: 'Consulta el programa completo del evento.',
		icon: <CalendarDays className="h-6 w-6 text-[#2cd5c4]" />
	},
	{
		title: 'Ponentes',
		href: '/ponentes',
		description: 'Conoce a los expertos que participarán.',
		icon: <Users className="h-6 w-6 text-[#2cd5c4]" />
	},
	{
		title: 'Ubicación',
		href: '/ubicacion',
		description: 'Cómo llegar al Pepsi Center CDMX.',
		icon: <MapPin className="h-6 w-6 text-[#2cd5c4]" />
	},
	{
		title: 'Preguntas Frecuentes',
		href: '/faq',
		description: 'Resolvemos tus dudas sobre el evento.',
		icon: <Info className="h-6 w-6 text-[#2cd5c4]" />
	}
]

export function MainNav() {
	return (
		<div className="hidden md:flex items-center justify-between w-full">
			<Link href="/" className="mr-6 flex items-center space-x-2">
				<span className="font-bold text-xl text-white">CONTPAQi</span>
				<span className="text-[#2cd5c4] font-bold">profit</span>
			</Link>
			{/* <NavigationMenu className="hidden md:block">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1a5aa0]/80 hover:text-white focus:bg-[#1a5aa0]/80">Evento</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{components.map(component => (
									<ListItem key={component.title} title={component.title} href={component.href} className="hover:bg-[#1a5aa0]/10">
										<div className="flex items-center gap-2">
											{component.icon}
											<span>{component.description}</span>
										</div>
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/partners" passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-[#1a5aa0]/80 hover:text-white focus:bg-[#1a5aa0]/80')}>
								Partners
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contacto" passHref>
							<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-[#1a5aa0]/80 hover:text-white focus:bg-[#1a5aa0]/80')}>
								Contacto
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu> */}
			<Button className="hidden md:flex bg-[#2cd5c4] hover:bg-[#2cd5c4]/80 text-[#1a5aa0] font-bold" disabled>
				Login
			</Button>
		</div>
	)
}
const ListItem = React.forwardRef<React.ComponentRef<'a'>, React.ComponentPropsWithoutRef<typeof NavigationMenuLink>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink
				ref={ref}
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
					className
				)}
				{...props}
			>
				<div className="text-sm font-medium leading-none">{title}</div>
				<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
