import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { Typography } from '../molecules'

export const HomeCalendar = () => {
	return (
		<section className="bg-black py-10">
			<div className="container flex flex-col items-center space-y-6">
				<Typography
					as="h2"
					className={cn(
						'bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-center font-bold text-transparent'
					)}
					size="8xl"
				>
					28 Noviembre
				</Typography>

				<Typography as="p" className={cn('mt-4 text-center text-white')} weight="semibold" size="2xl">
					¡No olvides tu cita!
				</Typography>

				<div className="inline-block">
					<Button variant="outline" size="lg" className="pointer-events-none bg-white/50">
						Añadir al Calendario
					</Button>
				</div>
			</div>
		</section>
	)
}
