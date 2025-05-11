'use server'

import { IUserResponse } from '@/interfaces'
import { FetchOptions, fetchService } from '@/lib/http'
import { VideoFormType } from '@/schemas'
import { revalidateTag } from 'next/cache'

interface IVideoResponse {
	id: string
	url: string
}

export const updateStreamingVideo = async (videoFormData: VideoFormType): Promise<void> => {
	const API_ENDPOINT = '/streaming'

	const options: FetchOptions = {
		method: 'PUT',
		body: JSON.stringify(videoFormData),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	await fetchService<IVideoResponse>(API_ENDPOINT, options)

	revalidateTag('streaming-video')
}

export const getStreamingVideo = async (): Promise<IVideoResponse | null> => {
	const API_ENDPOINT = `/streaming`

	const options: FetchOptions = {
		method: 'GET',
		next: {
			revalidate: 1,
			tags: ['streaming-video']
		}
	}

	const [video, error] = await fetchService<IVideoResponse>(API_ENDPOINT, options)

	if (error || !video) return null

	return video
}

export const getUsers = async (params?: Record<string, any>): Promise<IUserResponse | null> => {
	const API_ENDPOINT = `/user`

	const options: FetchOptions = {
		method: 'GET',
		params,
		next: {
			revalidate: 1
		}
	}

	const [users, error] = await fetchService<IUserResponse>(API_ENDPOINT, options)

	if (error || !users) return null

	return users
}
