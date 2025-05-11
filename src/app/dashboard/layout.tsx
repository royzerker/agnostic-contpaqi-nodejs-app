import { SidebarNav } from '@/components/organisms'
import { Separator } from '@/components/ui'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

const sidebarNavItems: { title: string; href: string; icon: keyof typeof dynamicIconImports }[] = [
	{
		title: 'Lista de usuarios',
		href: '/dashboard/users',
		icon: 'users'
	},
	{
		title: 'Streaming',
		href: '/dashboard/streaming',
		icon: 'radio'
	},
	{
		title: 'Videos',
		href: '/dashboard/videos',
		icon: 'video'
	},
	{
		title: 'Reels',
		href: '/dashboard/reels',
		icon: 'list-video'
	}
]

interface SettingsLayoutProps {
	children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<>
			<div className="container my-10">
				<header className="space-y-0.5">
					<h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
					<p className="text-muted-foreground">Maneja tus configuraciones y preferencias.</p>
				</header>
				<Separator className="my-6" />

				<section className="flex gap-3 laptop:gap-10">
					<aside className="grid laptop:grid-cols-[minmax(200px,200px)_1fr]">
						<SidebarNav items={sidebarNavItems} />
					</aside>
					<main className="flex-1">{children}</main>
				</section>
			</div>
		</>
	)
}
