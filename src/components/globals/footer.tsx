import { Mail } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { CONTPAQiLogo } from './contpaqi-logo'

export const Footer = () => {
	return (
		<footer className="bg-black text-gray-300">
			<div className="mx-auto flex max-w-6xl flex-col gap-y-10 px-4 py-10 laptop:px-0">
				<section>
					<figure>
						<CONTPAQiLogo className="max-w-[150px]" />
					</figure>

					<footer className="mb-2 flex items-center">
						<Mail className="mr-2 h-4 w-4 text-purple-400" />
						<Link href="mailto:potencia-logo.svg" className="text-[#999] transition-colors hover:text-purple-400" target="_blank">
							pottencia@lottus.com
						</Link>
					</footer>
				</section>

				<Separator className="bg-[#333]" />

				<section className="flex flex-col justify-between gap-6 laptop:flex-row">
					<span className="order-2 whitespace-nowrap text-sm text-[#999]">© 2024 Scoit. All rights reserved.</span>

					<p className="text-sm text-[#999] laptop:order-2">
						Built by <span className="text-white">Scoit Experience</span>
					</p>
				</section>
			</div>
		</footer>
	)
}
