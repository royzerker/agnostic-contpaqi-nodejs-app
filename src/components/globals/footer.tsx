import { Mail } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { CONTPAQiLogo } from './contpaqi-logo'

export const Footer = () => {
	return (
		<footer className="bg-[#2461A9] text-white">
			<div className="relative overflow-hidden">
				<div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10"></div>
				<div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/5"></div>

				<div className="container mx-auto py-10">
					<div className="flex flex-col gap-y-8">
						<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
							<figure className="relative z-10">
								<CONTPAQiLogo className="max-w-[150px] brightness-0 invert" />
							</figure>

							<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
								<Link
									href="mailto:soporte@compaqj.com"
									className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
								>
									<Mail className="h-4 w-4" />
									soporte@compaqj.com
								</Link>

								{/* <Link
									href="tel:+1234567890"
									className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
								>
									<Phone className="h-4 w-4" />
									(123) 456-7890
								</Link> */}
							</div>
						</div>

						<Separator className="bg-white/20" />

						<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
							<span className="text-sm text-white/80">© 2025 Scoit. All rights reserved.</span>

							{/* <p className="text-sm text-white/80">
								Built by <span className="font-medium text-white">Scoit Experience</span>
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
