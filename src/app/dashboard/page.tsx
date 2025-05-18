import { getUsers } from '@/actions/dashboard/actions'
import { usersTableColumns } from '@/components/molecules'
import { DataTable } from '@/components/organisms'

interface DashboardPageProps {
	searchParams: Promise<{
		search?: string
		page?: string
		size?: string
	}>
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
	const { search, page, size } = await searchParams

	const params = {
		pageSize: Number(size) || 10,
		pageNumber: Number(page) || 1,
		term: search || undefined
	}

	const res = await getUsers(params)

	if (!res) {
		return <div className="min-h-[70vh]">No hay usuarios</div>
	}

	const users = res?.[0]

	return (
		<div className="min-h-[70vh]">
			<DataTable
				isServerSide
				totalItems={users?.totalItems || 0}
				filterPlaceholder="Filtrar por nombre"
				columns={usersTableColumns}
				data={users?.items || []}
				classNames={{ card: 'grid  space-y-0 gap-y-1' }}
			/>
		</div>
	)
}
