import { SidebarNav } from '@/components/organisms'
import { Separator } from '@/components/ui'

interface SettingsLayoutProps {
	children: React.ReactNode
}

export default async function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<div className="container mx-auto my-10">
			<header className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
				<p className="text-muted-foreground">Maneja tus configuraciones y preferencias.</p>
			</header>

			<Separator className="my-6" />

			<section className="flex gap-3 md:gap-10">
				<aside className="grid md:grid-cols-[minmax(200px,200px)_1fr]">
					<SidebarNav />
				</aside>
				<main className="flex-1">{children}</main>
			</section>
		</div>
	)
}
