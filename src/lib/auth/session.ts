import { cookies } from 'next/headers'
import { Session } from './definitions'

export const SESSION_NAME = '_platform_agnostic_next_'

/**
 *  Crear una nueva sesión simple
 * @param session - La sesión del usuario
 * @returns void
 */
export const createSession = async (session: Session): Promise<void> => {
	const sessionString = JSON.stringify(session)

	cookies().set(SESSION_NAME, sessionString, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production', // Use only in production
		sameSite: 'strict',
		path: '/'
	})
}

/**
 * Eliminar la sesión simplemente eliminando la cookie
 * @returns void
 */
export const deleteSession = (): void => {
	cookies().delete(SESSION_NAME)
}

/**
 *  Obtener la sesión actual del usuario
 * @returns  La sesión actual del usuario o null si no hay ninguna
 */
export const getSession = async (): Promise<Session | null> => {
	const sessionString = cookies().get(SESSION_NAME)?.value

	if (!sessionString) {
		console.error('La cookie de sesión está vacía')
		return null
	}

	try {
		/**
		 * Analizar la cookie de sesión para obtener la sesión del usuario
		 */
		const session: Session = JSON.parse(sessionString)

		/**
		 * Verificar que la cookie de sesión tenga el formato correcto
		 */
		if (!session || typeof session.userId !== 'string' || typeof session.token !== 'string') {
			console.error('La cookie de sesión no tiene el formato correcto', session)
			return null
		}

		return session
	} catch (error) {
		console.error('Error al analizar la cookie de sesión:', error)
		return null
	}
}
