import { getIframe } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { Mdx } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Maximize, Play, Settings, Volume2 } from 'lucide-react'

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

			<main className="relative z-10 mx-auto w-full max-w-6xl space-y-8 py-8 md:py-12">
				<div className="space-y-2">
					<Typography as="h1" className="text-center text-white md:text-left" size="4xl" weight="semibold">
						Conferencia CONTPAQi profit
					</Typography>
					<p className="text-center text-white/70 md:text-left">Transmisión en vivo • Mayo 2025</p>
				</div>

				<div className="overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
					<div className="relative pt-[56.25%]">
						<Mdx>{iframeUrlFormat.replace(/<iframe/gi, `<iframe className="absolute top-0 left-0 w-full h-full"`)}</Mdx>

						<div className="absolute bottom-0 left-0 right-0 hidden bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100 md:block">
							<div className="flex items-center gap-4">
								<Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20">
									<Play className="h-4 w-4 fill-white" />
								</Button>
								<div className="h-1 flex-1 rounded-full bg-white/20">
									<div className="h-full w-1/3 rounded-full bg-[#2461A9]"></div>
								</div>
								<Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20">
									<Volume2 className="h-4 w-4" />
								</Button>
								<Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20">
									<Settings className="h-4 w-4" />
								</Button>
								<Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20">
									<Maximize className="h-4 w-4" />
								</Button>
							</div>
						</div>
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
								<span>28 Mayo</span>
							</li>
							<li className="flex justify-between">
								<span>Sesión de preguntas</span>
								<span>2 Junio</span>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</div>
	)
}
