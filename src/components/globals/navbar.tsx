'use client'

import { logout } from '@/actions/auth/actions'
import { Button } from '@/components/ui/button'
import type { Session } from '@/lib/auth/definitions'
import { cn } from '@/lib/utils'
import { AlignLeft, LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { CONTPAQiLogo } from './contpaqi-logo'

interface NavigationProps {
	session: Session | null
}

export const Navigation = ({ session }: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const redirectToLogin = () => {
		router.push('/signin')
	}

	return (
		<nav className={cn('sticky top-0 z-50 shadow-lg transition-colors duration-300', isOpen ? 'bg-foreground' : 'bg-[#2461A9]')}>
			<div className="px-4 md:px-0 relative mx-auto container">
				<div className={cn('flex items-center justify-between border-b border-transparent py-3 md:py-4', isOpen ? 'border-b border-[#333]' : '')}>
					<header className="flex space-x-7">
						<Link href="/" className="flex items-center">
							<CONTPAQiLogo className="max-w-[150px]" />
						</Link>
					</header>

					<section className="hidden items-center space-x-1 md:flex">
						<ul className="flex items-center gap-x-[32px]">
							<li>
								{!!session?.userId ? (
									<Button
										onClick={async () => {
											const res = await logout()

											if (res?.[1]) {
												toast.error(res[1].message)
												return
											}
										}}
										className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-0"
									>
										<LogOut className="w-4 h-4 mr-2" />
										Log Out
									</Button>
								) : (
									<Button
										onClick={() => redirectToLogin()}
										className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-0"
									>
										<LogIn className="w-4 h-4 mr-2" />
										Sign In
									</Button>
								)}
							</li>
						</ul>
					</section>

					<button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
						<AlignLeft size="26" />
					</button>
				</div>
			</div>

			<section
				className={cn(
					isOpen ? 'h-[350px]' : 'h-0',
					'absolute z-10 max-h-max w-full overflow-hidden border-b border-[#333] bg-foreground text-white transition-[height] duration-200 md:hidden'
				)}
			>
				<nav className="flex flex-col px-4 py-8">
					<ul className="flex flex-col space-y-6">
						<li>
							{!!session?.userId ? (
								<Button
									onClick={async () => {
										const res = await logout()

										if (res?.[1]) {
											toast.error(res[1].message)
											return
										}

										setIsOpen(false)
									}}
									className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-0 cursor-pointer"
								>
									<LogOut className="w-4 h-4 mr-2" />
									Log Out
								</Button>
							) : (
								<Button
									onClick={() => redirectToLogin()}
									className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl border-0 cursor-pointer"
								>
									<LogIn className="w-4 h-4 mr-2" />
									Sign In
								</Button>
							)}
						</li>
					</ul>
				</nav>
			</section>
		</nav>
	)
}
