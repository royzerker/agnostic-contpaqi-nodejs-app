/** @type {import('next').NextConfig} */
const config = {
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
