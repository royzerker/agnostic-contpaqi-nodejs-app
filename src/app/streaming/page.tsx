import { getIframe } from '@/actions/dashboard/actions'
import { Typography } from '@/components/molecules'
import { AlibabaLogo } from '@/features/components/atoms/alibaba-logo'
import { getSession } from '@/lib/auth/session'

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
	const session = await getSession()

	const iframeUrlFormat = video ? video?.iframeUrl : iframeUrl

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#2461A9] to-[#16213e]">
			<div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#2461A9]/20 blur-3xl"></div>
			<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2461A9]/10 blur-3xl"></div>

			<main className="px-4 md:px-0 relative z-10 mx-auto w-full container space-y-8 py-8 md:py-12">
				<div className="space-y-6">
					<div className="relative">
						{/* Decorative element */}
						<div className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 blur-md"></div>

						<div className="flex flex-col md:flex-row md:items-end md:gap-4">
							<Typography as="h1" className="text-center text-white md:text-left" size="4xl" weight="semibold">
								Conferencia CONTPAQi profit
							</Typography>

							{session?.userId && (
								<div className="mt-2 md:mt-0 flex items-center justify-center md:justify-start">
									<div className="bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full px-4 py-1 shadow-lg transform transition-all hover:scale-105">
										<Typography as="p" className="text-blue-900" size="lg" weight="bold">
											¡Bienvenido, {session.userName || 'Usuario'}!
										</Typography>
									</div>
								</div>
							)}
						</div>

						<p className="mt-3 text-center text-white/70 md:text-left">
							Transmisión en vivo • 4 Junio 2024
							{session?.userId && (
								<span className="inline-block ml-2 animate-pulse">
									<span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
								</span>
							)}
						</p>
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
								Detalles del evento "CONTPAQi Profit® es más que un congreso; es una plataforma transformadora diseñada para inspirar, educar y conectar a contadores, empresarios y
								emprendedores en México. Desde hace 9 años, hemos reunido a líderes de opinión, expertos en tecnología y pioneros en innovación para comparJr las ideas,
								herramientas y estrategias que marcan la diferencia."
							</p>
						</div>
						<div className="rounded-xl bg-[#2461A9]/20 p-6 backdrop-blur-sm">
							<h3 className="mb-2 text-xl font-semibold text-white">Próximos eventos</h3>
							<ul className="space-y-2 text-white/70">
								<li className="flex justify-between gap-4">
									<span> Lectura Bancaria Inteligente: El Siguiente Paso en tu Contabilidad desde CONTPAQi Bancos </span>
									<span className="w-2/6">5 Junio 2025</span>
								</li>
								{/* <li className="flex justify-between">
								<span>Sesión de preguntas</span>
								<span>4 Junio 2025</span>
								</li> */}
							</ul>
						</div>
					</div>

					<div className="my-24 flex flex-col items-center justify-center gap-4">
						<Typography as="p" size="2xl" className="text-white">
							CONTPAQi® profit partner
						</Typography>

						<div className="flex justify-center items-center gap-8 md:gap-12">
							<AlibabaLogo className="h-4 md:h-5 lg:h-6" />
							{/* <SyncfyLogo className="h-5 md:h-6 lg:h-7" /> */}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
