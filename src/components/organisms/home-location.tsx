// 'use client'

// import { cn } from '@/lib/utils'
// import { RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
// import Image from 'next/image'
// import { PhotoProvider, PhotoView } from 'react-photo-view'
// import 'react-photo-view/dist/react-photo-view.css'
// import imageUrl from '../../../public/assets/potencia-img-location.jpeg'
// import { Typography } from '../molecules'

// export const HomeLocation = () => {
// 	return (
// 		<section className="bg-black py-10 md:pt-36">
// 			<div className="container space-y-10" id="mapa">
// 				<header>
// 					<Typography
// 						as="h2"
// 						className={cn(
// 							'bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text text-center font-bold text-transparent'
// 						)}
// 						size="6xl"
// 					>
// 						Mapa del Evento
// 					</Typography>
// 				</header>

// 				<PhotoProvider
// 					toolbarRender={({ onScale, scale, rotate, onRotate }) => {
// 						return (
// 							<span className="flex gap-4">
// 								<ZoomIn
// 									className="cursor-pointer"
// 									aria-label="Zoom In button"
// 									size={20}
// 									onClick={() => onScale(scale + 1)}
// 								/>
// 								<ZoomOut
// 									className="cursor-pointer"
// 									size={20}
// 									aria-label="Zoom Out button"
// 									onClick={() => onScale(scale - 1)}
// 								/>

// 								<RotateCw
// 									className="cursor-pointer"
// 									size={18}
// 									aria-label="Rotate button"
// 									onClick={() => onRotate(rotate + 90)}
// 								/>
// 							</span>
// 						)
// 					}}
// 				>
// 					<PhotoView src="/assets/potencia-img-location.jpeg">
// 						<Image
// 							src={imageUrl}
// 							alt="Imagen de ejemplo"
// 							width={1600}
// 							height={900}
// 							className="aspect-[261/139] h-auto w-full cursor-pointer object-cover"
// 						/>
// 					</PhotoView>
// 				</PhotoProvider>

// 				<figure className="h-auto w-full" />
// 			</div>
// 		</section>
// 	)
// }
