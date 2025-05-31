import { CONTPAQiLogo } from '@/components/globals'
import { SignInForm } from '@/components/organisms'
import Image from 'next/image'

export default async function LoginPage() {
	return (
		<div className="flex h-[93vh] w-full flex-col md:flex-row bg-white">
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
				<div className="space-y-4">
					<SignInForm />
				</div>
			</div>

			<div className="hidden md:block md:w-1/2">
				<div className="h-[30%] bg-[#2461A9] flex flex-col justify-center p-16">
					<div className="grid place-content-center">
						<CONTPAQiLogo widht={350} height={50} className="mb-4" />
					</div>
				</div>

				<div className="h-[70%] bg-[#2461A9] grid place-content-center overflow-hidden">
					<Image src="/logo_bg.svg" alt="Placeholder" width={400} height={400} className="h-auto w-[500px] opacity-70" style={{ objectFit: 'cover' }} />
				</div>
			</div>
		</div>
	)
}
