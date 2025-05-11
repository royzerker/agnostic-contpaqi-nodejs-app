import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function useQueryFilter() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const orderParams = (params: URLSearchParams): URLSearchParams => {
		const orderedParams = new URLSearchParams()

		const orderedKeys = ['search', 'page', 'size']

		// Iteramos para actualizar los params segun ordered keys
		for (const key of orderedKeys) {
			const value = params.get(key)
			if (value) {
				orderedParams.set(key, value)
			}
		}

		return orderedParams
	}

	const updateParams = (key: string, value: string): void => {
		const params = new URLSearchParams(searchParams)

		if (value) {
			params.set(key, value.toString())
		} else {
			params.delete(key)
		}

		const orderedParams: URLSearchParams = orderParams(params)

		replace(`${pathname}?${orderedParams.toString()}`)
	}

	const handleSearch = useDebouncedCallback(term => {
		updateParams('search', term)
	}, 300)

	const handlePagination = (page: number): void => {
		updateParams('page', page.toString())
	}

	const handlePageSize = (size: string): void => {
		updateParams('size', size)
	}

	const handleItemPerPage = (size: string): void => {
		const params = new URLSearchParams(searchParams)

		if (size) params.set('size', size)
		else params.delete('size')

		params.delete('page')
		params.set('page', '1')

		const orderedParams: URLSearchParams = orderParams(params)

		replace(`${pathname}?${orderedParams.toString()}`)
	}

	const getQuery = (key: string): string => {
		const value = searchParams.get(key)

		if (!value) return ''

		return value
	}

	return {
		handleSearch,
		handlePagination,
		handlePageSize,
		handleItemPerPage,
		getQuery
	}
}
