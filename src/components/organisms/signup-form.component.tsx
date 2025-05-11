'use client'

import { lusitana } from '@/app/fonts/fonts'
import { TextField } from '@/components/molecules'
import { Button, Form } from '@/components/ui'
import { signupFormSchema, SignupFormType } from '@/schemas/signup-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, AtSign, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export const SignUpForm = () => {
	const form = useForm<SignupFormType>({
		resolver: zodResolver(signupFormSchema),
		defaultValues: {
			name: '',
			email: ''
			// password: '',
			// confirmPassword: ''
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control, reset } = form
	const onSubmit = async (data: SignupFormType) => {
		// const error = await register(data)
		// if (!!error) {
		// 	toast.error(error)
		// 	return
		// }
		// reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
					<h1 className={`${lusitana.className} mb-3 text-2xl`}>Create an account</h1>
					<div className="w-full space-y-4">
						<TextField id="name" label="Name" control={control} name="name" placeholder="Enter your full name" icon={<UserIcon size={18} />} />

						<TextField id="email" label="Email" control={control} name="email" placeholder="Enter your email address" icon={<AtSign size={18} />} />
						{/* 
						<TextField
							id="password"
							type="password"
							label="Password"
							control={control}
							name="password"
							placeholder="Create a password"
							icon={<KeyRoundIcon size={18} />}
						/>

						<TextField
							id="confirmPassword"
							type="password"
							label="Confirm Password"
							control={control}
							name="confirmPassword"
							placeholder="Confirm your password"
							icon={<KeyRoundIcon size={18} />}
						/> */}
					</div>

					<Button type="submit" className="mt-4 w-full">
						Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
					</Button>

					<div className="flex justify-center mt-4 text-sm">
						<span>Already have an account?</span>
						<Link href="/signin">
							<span className="ml-1 text-blue-600 hover:underline">Sign in here</span>
						</Link>
					</div>

					<div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
						{/* {errorMessage && (
							<>
								<ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
								<p className="text-sm text-red-500">{errorMessage}</p>
							</>
						)} */}
					</div>
				</div>
			</form>
		</Form>
	)
}
