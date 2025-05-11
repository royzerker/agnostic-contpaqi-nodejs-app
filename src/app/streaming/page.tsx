import { getStreamingVideo } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { Mdx } from '@/components/ui'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default async function StreamingPage() {
	const video = await getStreamingVideo()

	const iframeUrl = `<iframe
			title="vimeo-player"
			className="absolute top-0 left-0 w-full h-full"
			src="https://player.vimeo.com/video/642263700?h=5bb50fc9fb"
			width="640"
			height="360"
			allowFullScreen
		/>
	`

	const iframeUrlFormat = video?.url ? video.url : iframeUrl

	return (
		<div className="relative flex flex-col bg-black pb-16">
			<Image
				src="/assets/pottencia-dark-bg.avif"
				alt="Responsive background image"
				className="object-cover"
				layout="fill"
			/>
			<div
				className="absolute left-0 right-0 top-0 h-[40%]"
				style={{
					background: 'linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 100%)'
				}}
			></div>
			<div className="absolute top-0 h-full w-full bg-[#000000d9]" />
			<div
				className="absolute bottom-0 left-0 right-0 h-[40%]"
				style={{
					background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgb(0,0,0) 100%)'
				}}
			></div>

			<main className="relative z-30 mx-auto w-full max-w-6xl space-y-6 px-4 py-10 laptop:px-0">
				<header>
					<Typography as="h1" className={cn('text-center text-white')} size="4xl" weight="semibold">
						Conferencia Magistral en Vivo
					</Typography>
				</header>

				<div className="overflow-hidden rounded-lg bg-black shadow-lg">
					<div className="relative pt-[56.25%]">
						<Mdx>{iframeUrlFormat.replace(/<iframe/gi, `<iframe className="absolute top-0 left-0 w-full h-full"`)}</Mdx>
					</div>
				</div>
			</main>
		</div>
	)
}
