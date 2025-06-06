import * as z from 'zod'

export const SignInFormSchema = z.object({
	email: z
		.string()
		.email({
			message: 'El correo electrónico no es válido'
		})
		.min(3)
	// password: z.string().min(6)
})

export type SignInFormType = z.infer<typeof SignInFormSchema>
