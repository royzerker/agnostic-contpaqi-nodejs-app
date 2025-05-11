'use client'

import { updateStreamingVideo } from '@/actions/dashboard/actions'
import { VideoFormSchema, VideoFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button, Form, Textarea } from '../ui'
import { TextField } from './text-field.component'

interface VideoFormProps {
	defaultVideoUrl?: string
	defaultVideoId?: string
}

export const VideoForm = ({ defaultVideoUrl, defaultVideoId }: VideoFormProps) => {
	const form = useForm<VideoFormType>({
		resolver: zodResolver(VideoFormSchema),
		defaultValues: {
			url: `${defaultVideoUrl}`,
			id: `${defaultVideoId}`
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control } = form

	const onSubmit = async (data: VideoFormType) => {
		try {
			await updateStreamingVideo(data)
			toast('Se actualizo la url del video')
		} catch (err) {
			if (err instanceof Error) {
				toast.error(err.message)
				return
			}

			toast.error(`${err}`)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					classNames={{
						field: 'max-h-[300px]'
					}}
					id="url"
					as={Textarea}
					label="Url del video"
					control={control}
					name="url"
					placeholder="https://"
				/>

				<footer>
					<Button className="mt-4 w-full tablet:w-max">Actualizar</Button>
				</footer>
			</form>
		</Form>
	)
}
