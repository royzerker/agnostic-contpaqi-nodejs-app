import Image from 'next/image'

export function PepsiLogo({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Image src="/pepsi-logo.png" alt="Pepsi Logo" width={150} height={110} className="w-full h-full object-contain"></Image>
		</div>
	)
}
