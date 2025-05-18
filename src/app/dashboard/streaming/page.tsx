import { getIframe } from '@/actions/dashboard/actions'
import { VideoForm } from '@/components/molecules'

export default async function StreamingPage() {
	const [res, err] = await getIframe()

	return (
		<div className="min-h-[70vh]">
			<VideoForm defaultVideoUrl={res?.iframeUrl} defaultVideoId={res?.title} />
		</div>
	)
}
