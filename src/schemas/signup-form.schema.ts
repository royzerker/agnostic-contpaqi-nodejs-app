import { z } from 'zod'

export const signupFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
		.max(50, { message: 'El nombre no puede exceder los 50 caracteres.' }),
	email: z.string().email({ message: 'Introduce un correo electrónico válido.' })
	// password: z
	// 	.string()
	// 	.min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
	// 	.regex(/[A-Z]/, { message: 'La contraseña debe contener al menos una letra mayúscula.' })
	// 	.regex(/[0-9]/, { message: 'La contraseña debe contener al menos un número.' }),
	// confirmPassword: z
	// 	.string()
	// 	.min(8, { message: 'La confirmación de la contraseña debe tener al menos 8 caracteres.' })
	// 	.regex(/[A-Z]/, { message: 'La confirmación de la contraseña debe contener al menos una letra mayúscula.' })
	// 	.regex(/[0-9]/, { message: 'La confirmación de la contraseña debe contener al menos un número.' })
})
// .refine(data => data.password === data.confirmPassword, {
// 	message: 'Las contraseñas no coinciden.',
// 	path: ['confirmPassword'] // Esto marca el error en el campo de confirmación de contraseña
// })

export type SignupFormType = z.infer<typeof signupFormSchema>
