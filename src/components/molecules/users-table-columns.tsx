'use client'

import { IUserInfoTable } from '@/interfaces'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui'
import { Typography } from './typography.component'

export const usersTableColumns: ColumnDef<IUserInfoTable>[] = [
	{
		accessorKey: 'fullName',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<Typography size="sm" as="span">
						Nombre completo
					</Typography>
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm" className="">
					{row.getValue('fullName')}
				</Typography>
			)
		}
	},
	{
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Email
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => (
			<Typography size="sm" className="truncate">
				{row.getValue('email')}
			</Typography>
		)
	},
	{
		accessorKey: 'firstLogin',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Primer Login
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm">
					<Typography weight="semibold" size="sm" as="span" className="pr-2 laptop:hidden">
						Primer Login:
					</Typography>
					{row.getValue('firstLogin')}
				</Typography>
			)
		}
	},
	{
		accessorKey: 'country',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					País
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm">
					{' '}
					<Typography weight="semibold" size="sm" as="span" className="pr-2 laptop:hidden">
						País:
					</Typography>
					{row.getValue('country')}
				</Typography>
			)
		}
	},
	{
		accessorKey: 'mode',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Modo
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm">
					<Typography weight="semibold" size="sm" as="span" className="pr-2 laptop:hidden">
						Modo:
					</Typography>
					{row.getValue('mode')}
				</Typography>
			)
		}
	},
	{
		accessorKey: 'campus',
		header: ({ column }) => {
			return (
				<Button
					variant="outline"
					className="gap-2 rounded-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Campus
					<ArrowUpDown className="h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Typography size="sm">
					<Typography size="sm" weight="semibold" as="span" className="pr-2 laptop:hidden">
						Campus:
					</Typography>
					{row.getValue('campus')}
				</Typography>
			)
		}
	}
	// {
	// 	id: 'actions',
	// 	header: () => <Typography size="sm">Acciones</Typography>,
	// 	cell: ({}) => {
	// 		return (
	// 			<Button variant="outline" className="w-full gap-2">
	// 				<Typography size="sm" as="span" className="pr-2 laptop:hidden">
	// 					Eliminar
	// 				</Typography>
	// 				<Delete className="h-4 w-4" />
	// 			</Button>
	// 		)
	// 	}
	// }
]
