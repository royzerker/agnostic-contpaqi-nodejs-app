import Image from 'next/image'

export function AlibabaLogo({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Image src="/alibaba-cloud.png" alt="Pepsi Logo" width={300} height={35} className="w-full h-full object-contain"></Image>
		</div>
	)
}
