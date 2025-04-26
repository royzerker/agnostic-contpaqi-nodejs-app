'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import type * as React from 'react'

export function MobileNav() {
	return (
		<div className="flex md:hidden items-center justify-between w-full">
			<Link href="/" className="flex items-center space-x-2">
				<span className="font-bold text-xl text-white">CONTPAQi</span>
				<span className="text-[#2cd5c4] font-bold">profit</span>
			</Link>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="text-white hover:bg-[#1a5aa0]/80">
						<Menu className="h-6 w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent className="w-[300px] sm:w-[350px]">
					<SheetHeader>
						<SheetTitle className="flex items-center">
							<span className="font-bold text-xl">CONTPAQi</span>
							<span className="text-[#2cd5c4] font-bold">profit</span>
						</SheetTitle>
						<SheetDescription>Evento 4 JUN 2025 - CDMX Pepsi Center</SheetDescription>
					</SheetHeader>
					<div className="py-6">
						{/* <Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-lg font-medium">Evento</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-col space-y-3 pl-1">
										<MobileNavLink href="/agenda" icon={<CalendarDays className="h-5 w-5 text-[#2cd5c4]" />} title="Agenda" />
										<MobileNavLink href="/ponentes" icon={<Users className="h-5 w-5 text-[#2cd5c4]" />} title="Ponentes" />
										<MobileNavLink href="/ubicacion" icon={<MapPin className="h-5 w-5 text-[#2cd5c4]" />} title="Ubicación" />
										<MobileNavLink href="/faq" icon={<Info className="h-5 w-5 text-[#2cd5c4]" />} title="Preguntas Frecuentes" />
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<nav className="flex flex-col space-y-4 mt-4">
							<Link href="/partners" className="px-2 py-1 text-lg font-medium">
								Partners
							</Link>
							<Link href="/contacto" className="px-2 py-1 text-lg font-medium">
								Contacto
							</Link>
						</nav> */}
						<div className="mt-8">
							<Button className="w-full bg-[#2cd5c4] hover:bg-[#2cd5c4]/80 text-[#1a5aa0] font-bold" disabled>
								Login
							</Button>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}

interface MobileNavLinkProps {
	href: string
	icon: React.ReactNode
	title: string
}

function MobileNavLink({ href, icon, title }: MobileNavLinkProps) {
	return (
		<Link href={href} className="flex items-center gap-2 py-2 text-base">
			{icon}
			<span>{title}</span>
		</Link>
	)
}
