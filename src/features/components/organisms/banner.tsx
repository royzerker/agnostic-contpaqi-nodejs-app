'use client'

import { useEffect, useState } from 'react'
import { AlibabaLogo } from '../atoms/alibaba-logo'
import { PepsiLogo } from '../atoms/pepsi-logo'
import { SyncfyLogo } from '../atoms/syncfy-logo'

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
			<div className="bg-[#1a5aa0] p-4 md:p-6 lg:p-8 mb-8 min-h-[650px] grid place-content-center">
				<div className="flex flex-col items-center justify-center py-6 md:py-10 lg:py-12">
					<h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-10 lg:mb-12">CONTPAQi profit</h1>
					<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
						<div className="text-center md:text-left text-white mb-2 md:mb-0">
							<p className="text-sm md:text-lg lg:text-2xl font-semibold">
								<span className="text-[#2cd5c4]">CDMX</span> PEPSI CENTER
							</p>
							<p className="text-sm md:text-lg lg:text-2xl font-semibold">
								MIÉ <span className="text-[#2cd5c4]">4 JUN 2025</span>
							</p>
						</div>
						<PepsiLogo className="w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16" />
					</div>
				</div>
			</div>

			<div className="mb-12">
				<p className="text-[#1a5aa0] font-medium text-center mb-4 md:mb-6 text-sm md:text-base">CONTPAQi® profit partners</p>
				<div className="flex justify-center items-center gap-4 md:gap-8">
					<AlibabaLogo className="h-5 md:h-7 lg:h-8" />
					<SyncfyLogo className="h-5 md:h-7 lg:h-8" />
				</div>
			</div>
		</div>
	)
}
