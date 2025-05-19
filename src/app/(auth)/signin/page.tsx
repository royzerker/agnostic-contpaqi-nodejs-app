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
						<div className="w-25 h-25 relative">
							<PepsiLogo className="w-full h-auto" />
						</div>
					</div>
				</div>

				<div className="h-[60%] bg-[#2461A9] grid place-content-center overflow-hidden">
					<Image src="/logo_bg.svg" alt="Placeholder" width={400} height={400} className="h-auto w-[500px] opacity-70" style={{ objectFit: 'cover' }} />
				</div>
			</div>
		</div>
	)
}
