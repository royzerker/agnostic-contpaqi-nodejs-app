'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Typography } from '../molecules'

const schedules = [
	{
		id: '1',
		schedule: '9:00 AM',
		title: 'BIENVENIDA CON IA AL CONGRESO',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '2',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '3',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '4',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '5',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '6',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '7',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '8',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '9',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '10',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '11',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '12',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '13',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '14',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	},
	{
		id: '15',
		schedule: '9:05 AM',
		title: 'INAUGURACIÓN',
		description: 'MEGA PANTALLA IMAX'
	}
]

const fadeInUpAnimationVariants = {
	initial: {
		opacity: 0,
		y: 50
	},
	animate: (index: number) => {
		return {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				delay: 0.01 * index
			}
		}
	}
}

const bluredFadeInAnimationVariants = {
	initial: {
		filter: 'blur(5px)',
		opacity: 0
	},
	animate: (index: number) => {
		return {
			opacity: 1,
			filter: 'blur(0px)',
			transition: {
				delay: 0.03 * index
			}
		}
	}
}

export function HomeSchedules() {
	return (
		<main className="mx-auto bg-black py-10 laptop:pb-20" id="agenda">
			<div className="mx-auto max-w-6xl space-y-12 px-4 laptop:px-0">
				<Typography
					as="p"
					className="bg-gradient-to-t from-[#B28AF2] to-[#3B1FA5] bg-clip-text uppercase text-transparent"
					size="xl"
				>
					Agenda
				</Typography>

				<section className="space-y-12">
					<header>
						<Typography className="font-clash-grotesk text-white" size="5xl">
							{'Jueves 28 de Noviembre'.split('').map((letter, index) => (
								<motion.span
									key={index}
									variants={bluredFadeInAnimationVariants}
									custom={index}
									initial="initial"
									whileInView="animate"
									viewport={{
										once: true
									}}
								>
									{letter}
								</motion.span>
							))}{' '}
						</Typography>
					</header>

					<section className="flex flex-col gap-16">
						{schedules.map((schedule, index) => {
							return (
								<motion.div
									key={schedule.id}
									variants={fadeInUpAnimationVariants}
									custom={index}
									viewport={{
										once: true
									}}
									initial="initial"
									whileInView="animate"
									className={cn('grid grid-cols-1 items-center gap-y-4 laptop:grid-cols-[360px_auto] laptop:px-20')}
								>
									<Typography as="p" className="text-white" size="3xl" weight="bold">
										{schedule.schedule}
									</Typography>

									<div className="space-y-1 laptop:space-y-2">
										<Typography as="p" className="uppercase text-white" size="2xl" weight="semibold">
											{schedule.title}
										</Typography>
										<Typography as="p" className="font-plus-jakarta uppercase text-white" weight="medium" size="base">
											{schedule.description}
										</Typography>
									</div>
								</motion.div>
							)
						})}
					</section>
				</section>
			</div>
		</main>
	)
}
