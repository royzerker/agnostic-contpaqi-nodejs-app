import * as z from 'zod'

export const VideoFormSchema = z.object({
	imageUrl: z.string().min(6),
	title: z.string().optional()
})

export type VideoFormType = z.infer<typeof VideoFormSchema>
