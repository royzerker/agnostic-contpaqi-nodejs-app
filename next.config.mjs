/** @type {import('next').NextConfig} */
const config = {
	productionBrowserSourceMaps: false,
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/signin'
			},
			{
				source: '/dashboard/users',
				destination: '/dashboard'
			}
		]
	}
}

export default config
