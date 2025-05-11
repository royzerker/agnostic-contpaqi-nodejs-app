import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import imageUrl from '../../../public/assets/potencia-img-experience.png'
import { Typography } from '../molecules'
import { buttonVariants } from '../ui'

export default function HomeExperience() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 laptop:grid-cols-2 laptop:px-0 laptop:py-20">
			<figure className="h-auto max-h-[300px] w-full overflow-hidden rounded-3xl">
				<Image
					src={imageUrl}
					alt="Imagen de ejemplo"
					width={400}
					height={400}
					className="h-full w-full rounded-3xl object-cover object-center"
				/>
			</figure>

			<section className="space-y-4">
				<header className="space-y-4">
					<Typography as="h2" className={cn('text-[#333333]')} size="5xl" weight="bold">
						Como se esta viviendo el Potencia
					</Typography>
					<Typography as="p" className={cn('text-[#888888]')} size="2xl" weight="medium">
						Vive de cerca la experiencia Potencia con IA
					</Typography>
				</header>

				<footer className="inline-block">
					<Link
						href="/red-social"
						className={cn(buttonVariants({ size: 'lg' }), 'pointer-events-none bg-foreground/50 text-base')}
					>
						Videos Feed
					</Link>
				</footer>
			</section>
		</section>
	)
}
