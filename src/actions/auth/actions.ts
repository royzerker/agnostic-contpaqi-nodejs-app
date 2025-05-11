'use server'

import { Session } from '@/lib/auth/definitions'
import { createSession, deleteSession, getSession } from '@/lib/auth/session'
import { FetchOptions, fetchService } from '@/lib/http'
import { SignInFormType } from '@/schemas'
import { redirect } from 'next/navigation'

interface IAuthResponse {
	id: string
	email: string
	// firstName: string
	// lastName: string
	fullName: string
	role: string
	access_token: string
}

type errorMsgType = {
	msg: string
}

export const login = async (signInData: SignInFormType): Promise<errorMsgType | void> => {
	const API_ENDPOINT = '/authentication/login'

	const options: FetchOptions = {
		method: 'POST',
		body: JSON.stringify(signInData),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const [res, err] = await fetchService<IAuthResponse>(API_ENDPOINT, options)

	if (err || !res) {
		return { msg: `${err?.message}` }
	}

	const session: Session = {
		userId: res.id,
		token: res.access_token
	}

	await createSession(session)

	redirect('/streaming')
}

export const logout = async (): Promise<errorMsgType | void> => {
	const API_ENDPOINT = '/authentication/logout'

	const session = await getSession()

	const options: FetchOptions = {
		method: 'POST',
		body: JSON.stringify({
			id: session?.userId
		}),
		headers: {
			'Content-Type': 'application/json'
		},
		token: session?.token
	}

	const [_, err] = await fetchService(API_ENDPOINT, options)

	if (err) {
		return { msg: `Error al cerrar sesión: ${err?.message}` }
	}

	deleteSession()

	// Redirigir a home
	redirect('/')
}

export const verifyToken = async (): Promise<boolean> => {
	const session = await getSession()

	if (!session?.userId) return false

	const API_ENDPOINT = `/authentication/verify/${session?.userId}`

	const options: FetchOptions = {
		method: 'GET',
		token: session?.token
	}

	const [existToken, error] = await fetchService<string>(API_ENDPOINT, options)

	/**
	 * Si hay un error al verificar el token, eliminar la sesión
	 */
	if (existToken === 'true') {
		return true
	}

	return false
}
