'use client'

import { Typography } from '@/components/molecules'
import { useEffect, useState } from 'react'
import { AlibabaLogo } from '../atoms/alibaba-logo'
import { PepsiLogo } from '../atoms/pepsi-logo'

export const Banner = () => {
	const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setDeviceType('desktop')
			} else if (window.innerWidth >= 768) {
				setDeviceType('tablet')
			} else {
				setDeviceType('mobile')
			}
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className="min-h-screen bg-white">
			<div className="bg-[#2461A9] px-4 py-24 md:p-48 flex flex-col items-center gap-20 justify-center">
				<Typography as="h1" size="6xl" className="text-white" weight="bold">
					CONTPAQi profit
				</Typography>

				<div className="flex items-center justify-center gap-[2rem]">
					<div className="text-white">
						<Typography as="h2" size="4xl" className="text-white" weight="bold">
							<span className="text-teal-400">CDMX</span> <span className="text-white">PEPSI CENTER</span>
						</Typography>

						<Typography as="p" size="2xl" className="text-white">
							MIÉ 4 <span className="text-teal-400">JUN 2025</span>
						</Typography>
					</div>
					<PepsiLogo className="w-24 md:w-24 h-auto" />
				</div>
			</div>

			<div className="mt-24 flex flex-col items-center justify-center gap-4">
				<Typography as="p" size="2xl" className="text-[#1a5aa0]">
					CONTPAQi® profit partners
				</Typography>

				<div className="flex justify-center items-center gap-8 md:gap-12">
					<AlibabaLogo className="h-5 md:h-6 lg:h-7" />
					{/* <SyncfyLogo className="h-5 md:h-6 lg:h-7" /> */}
				</div>
			</div>
		</div>
	)
}
