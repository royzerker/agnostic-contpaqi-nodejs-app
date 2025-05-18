'use client'

import type { IUserInfoTable } from '@/interfaces'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Calendar, Mail, User } from 'lucide-react'
import { Badge, Button } from '../ui'
import { Typography } from './typography.component'
// import { format, isValid } from "date-fns"
// import { es } from "date-fns/locale"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export const usersTableColumns: ColumnDef<IUserInfoTable>[] = [
	{
		accessorKey: 'fullName',
		header: ({ column }) => {
			return (
				<Button variant="ghost" className="gap-2 rounded-full hover:bg-muted/60 group" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					<User className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
					<Typography size="sm" as="span" className="font-medium">
						Nombre completo
					</Typography>
					<ArrowUpDown className={`h-3.5 w-3.5 transition-colors ${column.getIsSorted() ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
				</Button>
			)
		},
		cell: ({ row }) => {
			const fullName = row.getValue('fullName') as string

			return (
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
						<Typography size="sm" className="font-medium text-muted-foreground">
							{fullName
								.split(' ')
								.map(name => name[0])
								.join('')
								.substring(0, 2)
								.toUpperCase()}
						</Typography>
					</div>
					<Typography size="sm" className="font-medium">
						{fullName}
					</Typography>
				</div>
			)
		}
	},
	{
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<Button variant="ghost" className="gap-2 rounded-full hover:bg-muted/60 group" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					<Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
					<Typography size="sm" as="span" className="font-medium">
						Email
					</Typography>
					<ArrowUpDown className={`h-3.5 w-3.5 transition-colors ${column.getIsSorted() ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
				</Button>
			)
		},
		cell: ({ row }) => {
			const email = row.getValue('email') as string

			return (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Typography size="sm" className="max-w-[200px] truncate">
								{email}
							</Typography>
						</TooltipTrigger>
						<TooltipContent>
							<p>{email}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)
		}
	},
	{
		accessorKey: 'firstLogin',
		header: ({ column }) => {
			return (
				<Button variant="ghost" className="gap-2 rounded-full hover:bg-muted/60 group" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					<Typography size="sm" as="span" className="font-medium">
						Ha realizado primer login:
					</Typography>
					<ArrowUpDown className={`h-3.5 w-3.5 transition-colors ${column.getIsSorted() ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
				</Button>
			)
		},
		cell: ({ row }) => {
			const hasFirstLogin = row.getValue('firstLogin') as boolean

			return (
				<div className="flex items-center">
					<Typography size="sm" as="span" className="pr-2 md:hidden font-medium">
						Ha realizado primer login:
					</Typography>
					{hasFirstLogin ? (
						<Badge className="font-normal">Sí</Badge>
					) : (
						<Badge variant="secondary" className="font-normal">
							No
						</Badge>
					)}
				</div>
			)
		}
	},
	{
		accessorKey: 'firstLoginAt',
		header: ({ column }) => {
			return (
				<Button variant="ghost" className="gap-2 rounded-full hover:bg-muted/60 group" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					<Calendar className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
					<Typography size="sm" as="span" className="font-medium">
						Fecha de primer login
					</Typography>
					<ArrowUpDown className={`h-3.5 w-3.5 transition-colors ${column.getIsSorted() ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
				</Button>
			)
		},
		cell: ({ row }) => {
			const dateValue = row.getValue('firstLoginAt')
			let formattedDate = 'No disponible'

			if (dateValue) {
				const date = new Date(dateValue as string)

				formattedDate = date.toLocaleDateString('es-ES', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit'
				})
			}

			return (
				<div className="flex items-center">
					<Typography size="sm" as="span" className="pr-2 md:hidden font-medium">
						Fecha:
					</Typography>
					<Typography size="sm" className={dateValue ? '' : 'text-muted-foreground italic'}>
						{formattedDate}
					</Typography>
				</div>
			)
		}
	}
]
