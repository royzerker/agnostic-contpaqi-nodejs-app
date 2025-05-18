'use client'

import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches
		}
		return false
	})

	useEffect(() => {
		if (typeof window === 'undefined') return

		const mediaQueryList = window.matchMedia(query)

		const updateMatch = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}

		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener('change', updateMatch)
		} else {
			mediaQueryList.addListener(updateMatch)
		}

		setMatches(mediaQueryList.matches)

		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener('change', updateMatch)
			} else {
				mediaQueryList.removeListener(updateMatch)
			}
		}
	}, [query])

	return matches
}
