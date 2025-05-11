import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './actions/auth/actions'
import { getSession, SESSION_NAME } from './lib/auth/session'

const protectedRoutePatterns = [/^\/dashboard/, /^\/streaming/, /^\/reels/]
const authRoutes = ['/signin']

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutePatterns.some(pattern => pattern.test(path))
	const isAuthRoute = authRoutes.includes(path)

	/**
	 * Obtener la sesión actual del usuario
	 */
	const session = await getSession()

	/**
	 * Si se intenta acceder a una ruta protegida sin una sesión, redirigir a la página de inicio de sesión
	 */
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/signin', req.url))
	}

	/**
	 * Si se intenta acceder a una ruta de inicio de sesión con una sesión, redirigir a la página de inicio
	 */
	if (isAuthRoute && session?.userId) {
		return NextResponse.redirect(new URL('/streaming', req.url))
	}

	const isTokenValid = await verifyToken()

	console.log('isTokenValid', isTokenValid)

	/**
	 * Si el token no es válido, eliminar la sesión simplemente eliminando la cookie
	 */
	if (!isTokenValid) {
		const res = NextResponse.next()
		res.cookies.delete(SESSION_NAME)
		return res
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
