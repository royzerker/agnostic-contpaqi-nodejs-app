/** @type {import('next').NextConfig} */
const config = {
	productionBrowserSourceMaps: false,
	devtool: false,
	async rewrites() {
		return [
			{
				source: '/dashboard/users',
				destination: '/dashboard'
			}
		]
	}
}

export default config
