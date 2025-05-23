'use client'

import { ColumnDef, flexRender, getCoreRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import * as React from 'react'

import {
	Button,
	Card,
	CardHeader,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui'
import { useQueryFilter } from '@/hooks/use-query-filter'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Typography } from '../molecules'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	className?: string
	classNames?: {
		card?: string
	}
	filterBy?: string
	filterPlaceholder?: string
	isServerSide?: boolean
	totalItems?: number
}

export const DataTable = <TData, TValue>({ data, columns, classNames, filterBy, filterPlaceholder, isServerSide = false, totalItems = 0 }: DataTableProps<TData, TValue>) => {
	const [sorting, setSorting] = React.useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		state: {
			sorting
		}
	})

	const { handleSearch, getQuery, handleItemPerPage, handlePagination } = useQueryFilter()

	return (
		<div className={cn('w-full space-y-2 md:space-y-4')}>
			<header>
				<Input
					placeholder={filterPlaceholder}
					onChange={e => {
						handleSearch(e.target.value)
					}}
					defaultValue={getQuery('search')}
					className="max-w-sm"
				/>
			</header>
			<Table className="hidden md:table">
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className="grid gap-4 md:grid-cols-2 md:hidden">
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map(row => (
						<Card key={row.id} data-state={row.getIsSelected() && 'selected'}>
							<CardHeader className={cn(classNames?.card)}>
								{row.getVisibleCells().map(cell => (
									<React.Fragment key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</React.Fragment>
								))}
							</CardHeader>
						</Card>
					))
				) : (
					<Card className="md:col-span-2">
						<CardHeader>
							<Typography size="sm">No results.</Typography>
						</CardHeader>
					</Card>
				)}
			</div>

			<footer className="flex items-center justify-between">
				<section className="hidden items-center gap-2 md:flex">
					<Typography size="sm" weight="medium">
						Filas por página
					</Typography>

					<Select
						value={getQuery('size') || '10'}
						onValueChange={value => {
							handleItemPerPage(value)
						}}
					>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={getQuery('size')} />
						</SelectTrigger>
						<SelectContent side="top">
							{[10, 20, 30, 40, 50].map(pageSize => (
								<SelectItem key={pageSize} value={`${pageSize}`} className="cursor-pointer">
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					{/* )} */}
				</section>

				<section className="flex w-full items-center justify-between gap-2 md:w-max md:justify-start">
					<Typography size="sm">
						Página {getQuery('page') || 1} de {Math.ceil(totalItems / (Number(getQuery('size')) || 10))}
					</Typography>

					<>
						<div className="flex items-center space-x-2">
							<Button
								onClick={() => {
									const firstPage = 1
									handlePagination(firstPage)
								}}
								disabled={(() => {
									const currentPage = Number(getQuery('page')) || 1
									return currentPage === 1
								})()}
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
							>
								<span className="sr-only">Go to first page</span>
								<ChevronsLeft className="h-4 w-4" />
							</Button>

							<Button
								onClick={() => {
									const currentPage = Number(getQuery('page')) || 1
									const prevPage = Math.max(currentPage - 1, 1)
									handlePagination(prevPage)
								}}
								disabled={(() => {
									const currentPage = Number(getQuery('page')) || 1
									return currentPage === 1
								})()}
								variant="outline"
								className="h-8 w-8 p-0"
							>
								<span className="sr-only">Go to previous page</span>
								<ChevronLeft className="h-4 w-4" />
							</Button>

							<Button
								onClick={() => {
									const currentPage = Number(getQuery('page')) || 1
									const nextPage = currentPage + 1
									handlePagination(nextPage)
								}}
								disabled={(() => {
									const size = Number(getQuery('size')) || 10
									const lastPage = Math.ceil(totalItems / size)
									const currentPage = Number(getQuery('page')) || 1
									return currentPage >= lastPage
								})()}
								variant="outline"
								className="h-8 w-8 p-0"
							>
								<span className="sr-only">Go to next page</span>
								<ChevronRight className="h-4 w-4" />
							</Button>

							<Button
								onClick={() => {
									const size = Number(getQuery('size')) || 10
									const lastPage = Math.ceil(totalItems / size)
									handlePagination(lastPage)
								}}
								disabled={(() => {
									const size = Number(getQuery('size')) || 10
									const lastPage = Math.ceil(totalItems / size)
									const currentPage = Number(getQuery('page')) || 1
									return currentPage >= lastPage
								})()}
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
							>
								<span className="sr-only">Go to last page</span>
								<ChevronsRight className="h-4 w-4" />
							</Button>
						</div>
					</>
				</section>
			</footer>
		</div>
	)
}
