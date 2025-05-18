import { CONTPAQiLogo } from '@/components/globals'
import { SignUpForm } from '@/components/organisms/signup-form.component'

export default async function SignUpPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="grid h-20 w-full place-content-center rounded-lg bg-primary p-3 md:h-36">
					<CONTPAQiLogo />
				</div>
				<SignUpForm />
			</div>
		</main>
	)
}
