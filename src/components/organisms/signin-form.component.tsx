'use client'

import { login } from '@/actions/auth/actions'
import { lusitana } from '@/app/fonts/fonts'
import { SignInFormSchema, SignInFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, AtSign } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { TextField, Typography } from '../molecules'
import { Form } from '../ui'
import { Button } from '../ui/button'

export const SignInForm = () => {
	const form = useForm<SignInFormType>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: ''
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control } = form

	const onSubmit = async (data: SignInFormType) => {
		const res = await login(data)

		if (res?.[1]) {
			toast.error('Error al iniciar sesión, verifica tu correo electrónico')
			return
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex-1 rounded-lg bg-gray-50 px-6 py-16">
					<h1 className={`${lusitana.className} mb-3 text-2xl`}>Inicie sesión para continuar.</h1>
					<div className="w-full space-y-4">
						<TextField id="email" label="Correo Electronico" control={control} name="email" placeholder="Ingresa tu correo electrónico" icon={<AtSign size={18} />} />
					</div>

					<Button className="mt-4 w-full" aria-disabled={true}>
						Iniciar sesión
						<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
					</Button>

					<div className="mt-8 text-center text-sm text-gray-600">
						{/* {"Don't have an account?"}{' '}
						<Link href="/signup" className="text-blue-600 hover:underline">
							Create one here
						</Link> */}
						<Typography as="p" className="text-center text-sm text-gray-600">
							Si no puedes iniciar sesión contacta a el equipo de soporte en
							<Link href="mailto:soporte@compaqi.com" className="text-blue-600 hover:underline">
								<br />
								soporte@compaqi.com
							</Link>
						</Typography>
					</div>
				</div>
			</form>
		</Form>
	)
}
