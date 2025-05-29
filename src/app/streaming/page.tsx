import { getIframe } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { AlibabaLogo } from '@/features/components/atoms/alibaba-logo'

export default async function StreamingPage() {
	const [video, error] = await getIframe()

	const iframeUrl = `<iframe
      title="vimeo-player"
      src="https://player.vimeo.com/video/642263700?h=5bb50fc9fb"
      width="640"
      height="360"
      allowFullScreen
    />
  `

	const iframeUrlFormat = video ? video?.iframeUrl : iframeUrl

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#2461A9] to-[#16213e]">
			<div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#2461A9]/20 blur-3xl"></div>
			<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2461A9]/10 blur-3xl"></div>

			<main className="px-4 md:px-0 relative z-10 mx-auto w-full container space-y-8 py-8 md:py-12">
				<div className="space-y-2">
					<Typography as="h1" className="text-center text-white md:text-left" size="4xl" weight="semibold">
						Conferencia CONTPAQi profit
					</Typography>
					<p className="text-center text-white/70 md:text-left">Transmisión en vivo • Mayo 2025</p>
				</div>

				<div className="overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
					<div className="relative pt-[56.25%]">
						<div
							className="absolute top-0 left-0 h-full w-full"
							dangerouslySetInnerHTML={{
								__html: iframeUrlFormat.replace(/<iframe/gi, '<iframe class="absolute top-0 left-0 w-full h-full"')
							}}
						/>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					<div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
						<h3 className="mb-2 text-xl font-semibold text-white">Detalles del evento</h3>
						<p className="text-white/70">
							Únete a nuestra conferencia exclusiva donde exploraremos las últimas funcionalidades y estrategias para maximizar el potencial de CONTPAQi profit en tu negocio.
						</p>
					</div>
					<div className="rounded-xl bg-[#2461A9]/20 p-6 backdrop-blur-sm">
						<h3 className="mb-2 text-xl font-semibold text-white">Próximos eventos</h3>
						<ul className="space-y-2 text-white/70">
							<li className="flex justify-between">
								<span>Taller de implementación</span>
								<span>4 Junio 2025</span>
							</li>
							<li className="flex justify-between">
								<span>Sesión de preguntas</span>
								<span>4 Junio 2025</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="my-24 flex flex-col items-center justify-center gap-4">
					<Typography as="p" size="2xl" className="text-[#1a5aa0]">
						CONTPAQi® profit partners
					</Typography>

					<div className="flex justify-center items-center gap-8 md:gap-12">
						<AlibabaLogo className="h-5 md:h-6 lg:h-7" />
						{/* <SyncfyLogo className="h-5 md:h-6 lg:h-7" /> */}
					</div>
				</div>
			</main>
		</div>
	)
}
