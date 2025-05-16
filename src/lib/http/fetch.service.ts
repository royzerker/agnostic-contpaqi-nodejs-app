export const fetchService = async (): Promise<HttpService> => {
	const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000'

	async function fetchRequest<T>(url: string, config?: RequestConfig): IAsyncTuple<T> {
		try {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					...config?.headers
				},
				...config
			}

			const response = await fetch(`${baseURL}${url}`, {
				...options,
				next: {
					revalidate: 60
				}
			})

			/**
			 *
			 */
			const contentType = response.headers.get('content-type')
			if (response.status === 204) {
				return [null, null]
			}

			if (response.ok) {
				/**
				 * Intenta analizar JSON si el encabezado de tipo de contenido indica que es JSON
				 */
				if (contentType && contentType.includes('application/json')) {
					try {
						const data = await response.json()
						return [data, null]
					} catch (jsonError) {
						console.error('Error al analizar JSON:', jsonError)
						return [null, new Error('Error al analizar JSON')]
					}
				} else {
					/**
					 * Si no es JSON, lee el cuerpo como texto
					 */
					const text = await response.text()

					if (text) {
						try {
							/**
							 * Intenta analizar JSON si el cuerpo no está vacío
							 */
							const data = JSON.parse(text)
							return [data, null]
						} catch (jsonError) {
							console.error('Error al analizar JSON:', jsonError)
							return [null, new Error('Error al analizar JSON')]
						}
					} else {
						/**
						 * Si el cuerpo está vacío, devuelve [null, null]
						 */
						return [null, null]
					}
				}
			}

			/**
			 * Si la respuesta no es exitosa, lee el cuerpo de error como texto
			 */
			const errorText = await response.text()

			let errorData
			try {
				errorData = JSON.parse(errorText)
			} catch {
				errorData = { message: errorText }
			}
			return [null, errorData]
		} catch (error) {
			console.error('Error en fetchRequest:', error)
			return [null, error as Error]
		}
	}

	async function get<T>(url: string, config?: RequestConfig): IAsyncTuple<T> {
		return fetchRequest<T>(url, { ...config, method: 'GET' })
	}

	async function post<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T> {
		return fetchRequest<T>(url, {
			...config,
			method: 'POST',
			body: JSON.stringify(data)
		})
	}

	async function put<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T> {
		return fetchRequest<T>(url, {
			...config,
			method: 'PUT',
			body: JSON.stringify(data)
		})
	}

	return { get, post, put }
}

export interface HttpService {
	post<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T>
	get<T>(url: string, config?: RequestConfig): IAsyncTuple<T>
	put<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T>
}

export interface RequestConfig {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	headers?: HeadersInit
	body?: BodyInit | null
	signal?: AbortSignal
	query?: Record<string, any>
	params?: Record<string, any>
	next?: {
		revalidate?: number
	}
}
