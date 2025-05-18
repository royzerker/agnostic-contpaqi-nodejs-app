'use server'

import { VIDEO_ID } from '@/constans/video-id.constant'
import { IUserResponse } from '@/interfaces'
import { getSession } from '@/lib/auth/session'
import { fetchService } from '@/lib/http'
import { VideoFormType } from '@/schemas'
import { revalidatePath } from 'next/cache'

interface IVideoResponse {
	title: string
	iframeUrl: string
}

export const upserIframe = async (data: VideoFormType): IAsyncTuple<IVideoResponse> => {
	const session = await getSession()
	const service = await fetchService()

	const [video, error] = await service.put<IVideoResponse>(
		`/videos/${VIDEO_ID}`,
		{
			title: data.title,
			iframeUrl: data.imageUrl
		},
		{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${session?.token}`
			}
		}
	)

	if (!!error) {
		return [null, error]
	}

	revalidatePath('/dashboard/streaming')
	revalidatePath('/streaming')

	return [video, null]
}

export const getIframe = async (): IAsyncTuple<IVideoResponse> => {
	const session = await getSession()

	const service = await fetchService()

	const [video, error] = await service.get<IVideoResponse>(`/videos/${VIDEO_ID}`, {
		headers: {
			Authorization: `Bearer ${session?.token}`
		}
	})

	if (!!error) {
		return [null, error]
	}

	return [video, null]
}

export const getUsers = async (params?: Record<string, any>): IAsyncTuple<IUserResponse> => {
	const service = await fetchService()

	const filteredParams: Record<string, any> = {}
	if (params) {
		for (const [key, value] of Object.entries(params)) {
			if (value !== undefined && value !== '') {
				filteredParams[key] = value
			}
		}
	}

	const searchParams = new URLSearchParams(filteredParams).toString()
	const API_ENDPOINT = `/user${searchParams ? `?${searchParams}` : ''}`

	const [users, error] = await service.get<IUserResponse>(API_ENDPOINT)

	if (error) {
		return [null, error]
	}

	return [users, null]
}
