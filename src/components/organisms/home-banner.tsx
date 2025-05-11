import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../molecules'
import { buttonVariants } from '../ui'

const sponsors = [
	{
		title: 'Ula',
		logo: '/assets/logo-ula.webp'
	},
	{
		title: 'Utc',
		logo: '/assets/logo-utc.webp'
	},
	{
		title: 'Indo',
		logo: '/assets/logo-indo.webp'
	},
	{
		title: 'Uane',
		logo: '/assets/logo-uane.webp'
	},
	{
		title: 'Uteg',
		logo: '/assets/logo-uteg.webp'
	},
	{
		title: 'Bedu',
		logo: '/assets/logo-bedu.webp'
	}
]

export const HomeBanner = () => {
	return (
		<section className="relative h-[1000px] w-full">
			<section className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center gap-10 px-4 text-white laptop:px-0">
				<div className="flex flex-col items-center gap-10 motion-safe:animate-fade-in-up motion-safe:delay-1000">
					<Typography
						as="h1"
						className="text-center font-dharma-gothic uppercase tracking-[-0.015em] text-white laptop:[line-height:0.6_!important]"
						size="9xl"
						weight="normal"
					>
						Bienvenido a{' '}
						<span className="bg-gradient-to-r from-white to-purple-600 bg-clip-text uppercase text-transparent">/</span>
						Pottenc
						<span
							className="bg-clip-text text-transparent"
							style={{
								background: '-webkit-linear-gradient(305deg,#FFFFFF, #9600FB)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						>
							ia
						</span>
					</Typography>

					<Typography className="mt-2 max-w-[100ch] text-center font-inter text-white" size="xl" weight="medium">
						Pottencia de Lottus Education es un programa innovador diseñado para dar a los estudiantes las herramientas
						necesarias para potenciar sus oportunidades académicas, laborales y de empleabilidad en el mundo actual.
					</Typography>

					<Link
						href="/streaming"
						className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'rounded-full text-base')}
					>
						Ver transmisión en vivo <ArrowUpRight />
					</Link>
				</div>

				<footer className="mt-8 flex flex-col items-center gap-14">
					<Image
						className="aspect-[193/44] h-11 w-auto"
						src="/assets/logo-lottus.webp"
						alt={'Logo Lottus'}
						width={750}
						height={500}
					/>

					<div className="flex flex-wrap justify-around gap-10">
						{sponsors.map(sponsor => {
							return (
								<Image
									key={sponsor.title}
									className="aspect-auto h-8 w-auto object-contain"
									src={sponsor.logo}
									alt={sponsor.title}
									width={750}
									height={500}
								/>
							)
						})}
					</div>
				</footer>
			</section>
			{/* </section> */}

			<div className="h-full w-full bg-black opacity-100 mix-blend-multiply" />
			<div className="absolute inset-0 after:absolute after:inset-0 after:bg-[url('/assets/potencia-banner.webp')] after:bg-cover after:bg-center after:opacity-100" />

			{/* Footer gradient */}
			<div
				className="absolute bottom-0 left-0 right-0 h-[360px]"
				style={{
					background: 'linear-gradient(180deg,rgba(0,0,0,0) 55.00000000000001%,rgb(0,0,0) 78%)'
				}}
			></div>
		</section>
	)
}
