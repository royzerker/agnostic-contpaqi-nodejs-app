import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { IVideoCard } from '@/interfaces/video-card.interface'

export const VideoCard = ({ title, videoUrl }: IVideoCard) => {
	return (
		<Card className="w-full overflow-hidden rounded-none shadow-none border-none">
			<CardHeader className="p-0">
				<div className="relative w-full pt-[56.25%]">
					<iframe
						src={videoUrl}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="absolute top-0 left-0 w-full h-full"
					/>
				</div>
			</CardHeader>
			<CardContent className="p-4 bg-black">
				<CardTitle className="text-lg mb-2 text-white text-[28px]">{title}</CardTitle>
			</CardContent>
		</Card>
	)
}
