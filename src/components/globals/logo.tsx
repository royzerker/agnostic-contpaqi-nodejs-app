import { lusitana } from '@/app/fonts/fonts'

export default function Logo() {
	return (
		<div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
			<p className="text-[44px]">Agnostic</p>
		</div>
	)
}
