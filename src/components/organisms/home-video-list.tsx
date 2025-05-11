import { Typography } from '@/components/molecules'
import { VideoCard } from '@/components/molecules/video-card.component'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const arr = [
	{
		id: '1',
		title: 'Título del video',
		videoUrl: 'https://www.youtube.com/embed/smPos0mJvh8'
	},
	{
		id: '2',
		title: 'Título del video',
		videoUrl: 'https://www.youtube.com/embed/smPos0mJvh8'
	},
	{
		id: '3',
		title: 'Logo Landing Page',
		videoUrl: 'https://player.vimeo.com/video/642263700?h=5bb50fc9fb'
	}
]

export const HomeVideosList = () => {
	return (
		<section className="bg-black py-20" id="videos">
			<div className="mx-auto max-w-6xl space-y-10 px-4 laptop:px-0">
				<header className="flex flex-col items-center gap-6">
					<div>
						<Button variant="unstyled" disabled>
							Educación Continua
						</Button>
					</div>

					<Typography as="h1" className={cn('text-white')} size="5xl" weight="normal">
						<span className="bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-transparent">
							Descubre la IA{' '}
						</span>
						de la mano de los expertos
					</Typography>
				</header>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{arr.map(item => (
						<VideoCard key={item.id} id={item.id} title={item.title} videoUrl={item.videoUrl} />
					))}
				</div>
			</div>
		</section>
	)
}
