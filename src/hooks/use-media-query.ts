import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState<boolean>(false)

	useEffect(() => {
		// Esto solo se ejecutará en el cliente
		const mediaQueryList = window.matchMedia(query)
		setMatches(mediaQueryList.matches) // Actualizar el estado inicial

		const handleChange = () => setMatches(mediaQueryList.matches)

		mediaQueryList.addEventListener('change', handleChange)

		return () => mediaQueryList.removeEventListener('change', handleChange)
	}, [query])

	return matches
}
