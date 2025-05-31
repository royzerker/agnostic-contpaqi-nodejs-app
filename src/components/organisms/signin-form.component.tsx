'use client'

import { login } from '@/actions/auth/actions'
import { SignInFormSchema, type SignInFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Mail } from 'lucide-react'
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
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-6">
					{/* Email Field with enhanced styling */}
					<div className="space-y-2">
						<TextField
							id="email"
							label="Correo Electrónico"
							control={control}
							name="email"
							placeholder="tu@email.com"
							icon={<Mail size={18} className="text-gray-400" />}
							className="w-full"
						/>
					</div>

					{/* Enhanced Submit Button */}
					<Button
						type="submit"
						className="w-full bg-gradient-to-r from-[#2461A9] via-blue-600 to-cyan-500 hover:from-[#1e4f8b] hover:via-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl border-0 group"
						aria-disabled={false}
					>
						<span className="flex items-center justify-center gap-2 cursor-pointer">
							Iniciar sesión
							<ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</span>
					</Button>

					{/* Divider */}
					<div className="relative my-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-200"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-white px-4 text-gray-500">¿Necesitas ayuda?</span>
						</div>
					</div>

					{/* Support Contact - Enhanced */}
					<div className="text-center">
						<div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100">
							<Typography as="p" className="text-sm text-gray-600 leading-relaxed">
								Si no puedes iniciar sesión, contacta al equipo de soporte
							</Typography>
							<Link href="mailto:marketing@contpaqi.com" className="inline-flex items-center gap-1 mt-2 text-[#2461A9] hover:text-blue-700 font-medium transition-colors group">
								<Mail size={16} />
								marketing@contpaqi.com
								<ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>

					{/* Additional Security Note */}
					<div className="text-center">
						<Typography as="p" className="text-xs text-gray-500">
							🔒 Tu información está protegida y segura
						</Typography>
					</div>
				</div>
			</form>
		</Form>
	)
}
