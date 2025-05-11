import { getStreamingVideo } from '@/actions/dashboard/actions'
import { VideoForm } from '@/components/molecules'

export default async function StreamingPage() {
	const video = await getStreamingVideo()

	return (
		<div className="min-h-[70vh]">
			<VideoForm defaultVideoUrl={video?.url} defaultVideoId={video?.id} />
		</div>
	)
}
