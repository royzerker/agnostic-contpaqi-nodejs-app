'use server'

import { IUserResponse } from '@/interfaces'
import { fetchService } from '@/lib/http'
import { VideoFormType } from '@/schemas'
import { revalidatePath } from 'next/cache'

interface IVideoResponse {
	title: string
	iframeUrl: string
}

export const VIDEO_ID = `681fe05d18c136bdd2510585`

export const upserIframe = async (data: VideoFormType): IAsyncTuple<IVideoResponse> => {
	const service = await fetchService()

	const [video, error] = await service.put<IVideoResponse>(`/videos/${VIDEO_ID}`, {
		title: data.title,
		iframeUrl: data.imageUrl
	})

	if (!!error) {
		return [null, error]
	}

	revalidatePath('/dashboard/streaming')
	revalidatePath('/streaming')

	return [video, null]
}

export const getIframe = async (): IAsyncTuple<IVideoResponse> => {
	const service = await fetchService()

	const [video, error] = await service.get<IVideoResponse>(`/videos/${VIDEO_ID}`)

	if (!!error) {
		return [null, error]
	}

	return [video, null]
}

export const getUsers = async (params?: Record<string, any>): IAsyncTuple<IUserResponse> => {
	const service = await fetchService()

	const [users, error] = await service.get<IUserResponse>('/user', {
		method: 'GET',
		params: {
			...params
		}
	})

	if (!!error) {
		return [null, error]
	}

	return [users, null]
}
