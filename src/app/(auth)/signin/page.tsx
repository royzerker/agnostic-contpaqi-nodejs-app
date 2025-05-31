import { CONTPAQiLogo } from '@/components/globals'
import { SignInForm } from '@/components/organisms'
import Image from 'next/image'

export default async function LoginPage() {
	return (
		<div className="flex h-[93vh] w-full flex-col md:flex-row bg-white">
			{/* Left Side - Form */}
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 relative overflow-hidden">
				{/* Decorative background elements */}
				<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-60"></div>
				<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-50 to-cyan-100 rounded-full blur-3xl opacity-40"></div>

				<div className="space-y-6 relative z-10 w-full max-w-md">
					{/* Welcome text */}
					<div className="text-center space-y-2 mb-8">
						<h1 className="text-3xl font-bold text-gray-800">¡Bienvenido!</h1>
						<p className="text-gray-600">Inicia sesión para acceder a tu cuenta</p>
					</div>

					<SignInForm />

					{/* Additional info */}
					{/* <div className="text-center mt-6">
						<p className="text-sm text-gray-500">
							¿Problemas para acceder?{' '}
							<a href="#" className="text-[#2461A9] hover:text-blue-700 font-medium transition-colors">
								Contacta soporte
							</a>
						</p>
					</div> */}
				</div>
			</div>

			{/* Right Side - Branding */}
			<div className="hidden md:block md:w-1/2 relative overflow-hidden">
				{/* Logo Section - 30% */}
				<div className="h-full bg-gradient-to-br from-[#2461A9] via-[#1e4f8b] to-[#16213e] flex flex-col justify-center p-16 relative">
					{/* Decorative elements */}
					<div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
					<div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full"></div>
					<div className="absolute top-1/2 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
					<div className="absolute top-1/3 right-12 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>

					<div className="grid place-content-center relative z-10">
						<CONTPAQiLogo widht={350} height={50} className="mb-4 drop-shadow-lg" />
						{/* <div className="text-center mt-4">
							<p className="text-white/80 text-lg font-light">Conferencia CONTPAQi profit</p>
							<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2"></div>
						</div> */}
					</div>

					<div className="relative grid place-content-center mt-30">
						<div className="absolute inset-0 bg-gradient-to-t from-[#2461A9]/20 to-transparent rounded-full blur-3xl scale-150"></div>
						<Image
							src="/logo_bg.svg"
							alt="CONTPAQi Background"
							width={400}
							height={400}
							className="h-auto w-[500px] opacity-80 drop-shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105"
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>

				{/* Image Section - 70% */}
			</div>
		</div>
	)
}
