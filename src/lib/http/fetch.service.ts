export interface HttpService {
	post<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T>
	get<T>(url: string, config?: RequestConfig): IAsyncTuple<T>
	put<T>(url: string, data: IGenericRecord, config?: RequestConfig): IAsyncTuple<T>
}

export interface RequestConfig {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	headers?: HeadersInit
	body?: BodyInit | null
	signal?: AbortSignal
	query?: Record<string, any>
}

export const fetchService = async (): Promise<HttpService> => {
	const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000'

	function buildURL(url: string, query?: Record<string, any>): string {
		const queryString = query ? `?${new URLSearchParams(query).toString()}` : ''
		return `${baseURL}${url}${queryString}`
	}

	async function fetchRequest<T>(url: string, config: RequestConfig = {}): IAsyncTuple<T> {
		const fullUrl = buildURL(url, config.query)

		const options: RequestInit = {
			method: config.method ?? 'GET',
			headers: {
				'Content-Type': 'application/json',
				...config.headers
			},
			body: config.body,
			signal: config.signal
		}

		try {
			console.log('Fetching:', fullUrl)
			const response = await fetch(fullUrl, options)
			const contentType = response.headers.get('content-type')

			if (response.status === 204) return [null, null]

			const rawBody = await response.text()

			if (!response.ok) {
				const error = tryParseJSON(rawBody)
				return [null, error]
			}

			const parsed = tryParseJSON(rawBody)
			return parsed instanceof Error ? [null, parsed] : [parsed, null]
		} catch (error) {
			console.error('fetchRequest error:', error)
			return [null, error as Error]
		}
	}

	function tryParseJSON(text: string): any {
		try {
			return text ? JSON.parse(text) : null
		} catch (err) {
			console.error('JSON parse error:', err)
			return new Error('Error al analizar JSON')
		}
	}

	const get = <T>(url: string, config?: RequestConfig) => fetchRequest<T>(url, { ...config, method: 'GET' })

	const post = <T>(url: string, data: IGenericRecord, config?: RequestConfig) =>
		fetchRequest<T>(url, {
			...config,
			method: 'POST',
			body: JSON.stringify(data)
		})

	const put = <T>(url: string, data: IGenericRecord, config?: RequestConfig) =>
		fetchRequest<T>(url, {
			...config,
			method: 'PUT',
			body: JSON.stringify(data)
		})

	return { get, post, put }
}
