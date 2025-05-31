'use server'

import { Session } from '@/lib/auth/definitions'
import { createSession, deleteSession, getSession } from '@/lib/auth/session'
import { fetchService } from '@/lib/http'
import { SignInFormType } from '@/schemas'
import { redirect } from 'next/navigation'

interface IAuthResponse {
	id: string
	email: string
	firstName: string
	lastName: string
	fullName?: string
	role: string
	accessToken: string
}

export const login = async (signInData: SignInFormType): IAsyncTuple<IAuthResponse> => {
	const service = await fetchService()

	const [res, err] = await service.post<IAuthResponse>('/authentication/login', {
		email: signInData.email
	})

	if (!!err) {
		return [null, err]
	}

	const session: Session = {
		userId: res?.id as string,
		userName: res?.fullName || `${res?.firstName} ${res?.lastName}`,
		token: res?.accessToken as string
	}

	await createSession(session)

	redirect('/streaming')
}

export const logout = async (): IAsyncTuple<void> => {
	const session = await getSession()

	const service = await fetchService()

	const [_, err] = await service.post(
		'/authentication/logout',
		{
			id: session?.userId
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${session?.token}`
			}
		}
	)

	if (!!err) {
		return [null, err]
	}

	deleteSession()

	redirect('/')
}

export const verifyToken = async (): IAsyncTuple<boolean> => {
	const session = await getSession()

	if (!session?.userId) {
		return [false, new Error('No hay sesión activa')]
	}

	const API_ENDPOINT = `/authentication/verify/${session?.userId}`

	const service = await fetchService()

	const [existToken, error] = await service.get<IGenericRecord>(API_ENDPOINT, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${session?.token}`
		}
	})

	if (!!error) {
		return [false, error]
	}

	if (!existToken) {
		return [false, new Error('Token no existe')]
	}

	if (existToken?.status !== 'active') {
		return [false, new Error('Token no activo')]
	}

	return [true, null]
}
