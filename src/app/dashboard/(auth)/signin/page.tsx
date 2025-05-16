import { Typography } from '@/components/molecules'
import { SignInForm } from '@/components/organisms'
import { PepsiLogo } from '@/features/components/atoms/pepsi-logo'
import Image from 'next/image'

export default async function LoginPage() {
	return (
		<div className="flex h-screen">
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
				<div className="space-y-4">
					<SignInForm />
				</div>
			</div>

			<div className="hidden md:block md:w-1/2">
				<div className="h-[40%] bg-purple-700 flex flex-col justify-center p-16">
					<div className="flex justify-between items-center">
						<div>
							<Typography as="h2" size="4xl" className="text-white" weight="bold">
								<span className="text-teal-400">CDMX</span> <span className="text-white">PEPSI CENTER</span>
							</Typography>

							<Typography as="p" size="2xl" className="text-white">
								MIÉ 4 <span className="text-teal-400">JUN 2025</span>
							</Typography>
						</div>
						<div className="w-45 h-45 relative">
							<PepsiLogo className="w-full h-auto" />{' '}
						</div>
					</div>
				</div>

				<div className="h-[60%] bg-blue-600 p-16 relative overflow-hidden">
					<div className="grid grid-cols-3 gap-4 relative z-10">
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-teal-400 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-pink-500 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-teal-400 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>

						{/* Row 2 */}
						<div className="h-24 bg-teal-400 rounded-md"></div>
						<div className="relative col-span-1 row-span-2">
							<Image src="/placeholder.svg?height=240&width=120" alt="Featured Speaker" width={120} height={240} className="rounded-md object-cover h-full" />
							<div className="absolute bottom-0 left-0 bg-teal-400 px-2 py-0.5 text-xs text-white">Cohen</div>
						</div>
						<div className="h-12 w-12 bg-purple-500 rounded-full mx-auto"></div>

						{/* Row 3 */}
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-pink-500 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>
						<div className="h-12 w-12 bg-blue-400 rounded-md mx-auto"></div>

						{/* Row 4 */}
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-teal-400 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 left-0 bg-pink-500 px-2 py-0.5 text-xs text-white">Nombre</div>
						</div>
						<div className="relative">
							<Image src="/placeholder.svg?height=120&width=120" alt="Speaker" width={120} height={120} className="rounded-md object-cover" />
							<div className="absolute bottom-0 right-0 bg-red-500 px-2 py-0.5 text-xs text-white">Sarmiento</div>
						</div>
					</div>

					<div className="absolute top-1/4 right-1/4 h-12 w-12 bg-purple-500 rounded-full opacity-70"></div>
					<div className="absolute bottom-1/3 left-1/4 h-12 w-12 bg-blue-400 rounded-md opacity-70"></div>
					<div className="absolute bottom-1/4 right-1/3 h-12 w-12 bg-teal-400 opacity-70 grid grid-cols-3 grid-rows-3 gap-1 p-2">
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
						<div className="bg-white rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
