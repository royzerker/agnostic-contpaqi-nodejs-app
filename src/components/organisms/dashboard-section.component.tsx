'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, DollarSign, ShoppingCart, Users } from 'lucide-react'
import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../ui'

const data = [
	{ name: 'Jan', sales: 4000 },
	{ name: 'Feb', sales: 3000 },
	{ name: 'Mar', sales: 5000 },
	{ name: 'Apr', sales: 4500 },
	{ name: 'May', sales: 6000 },
	{ name: 'Jun', sales: 5500 }
]

const recentActivity = [
	{ id: 1, action: 'New user registered', time: '5 minutes ago' },
	{ id: 2, action: 'Order #1234 placed', time: '10 minutes ago' },
	{ id: 3, action: 'Payment received for Order #1233', time: '15 minutes ago' },
	{ id: 4, action: 'New product added to inventory', time: '30 minutes ago' }
]

export default function DashboardSection() {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-3xl font-bold mb-6">Dashboard</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Users</CardTitle>
							<Users className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">1,234</div>
							<p className="text-xs text-muted-foreground">+10% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$45,231.89</div>
							<p className="text-xs text-muted-foreground">+20.1% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">New Customers</CardTitle>
							<Users className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+573</div>
							<p className="text-xs text-muted-foreground">+201 since last hour</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Active Now</CardTitle>
							<ShoppingCart className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">573</div>
							<p className="text-xs text-muted-foreground">+201 since last hour</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
					<Card>
						<CardHeader>
							<CardTitle>Sales Overview</CardTitle>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={data}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="sales" fill="#8884d8" />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Recent Activity</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{recentActivity.map(activity => (
									<div key={activity.id} className="flex items-center">
										<Bell className="h-4 w-4 mr-2 text-muted-foreground" />
										<div className="flex-1">
											<p className="text-sm font-medium">{activity.action}</p>
											<p className="text-xs text-muted-foreground">{activity.time}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Recent Orders</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-2 mb-4">
							<Input
								type="text"
								placeholder="Search orders..."
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
							/>
							<Button>Search</Button>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b">
										<th className="text-left p-2">Order ID</th>
										<th className="text-left p-2">Customer</th>
										<th className="text-left p-2">Status</th>
										<th className="text-left p-2">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<td className="p-2">#1234</td>
										<td className="p-2">John Doe</td>
										<td className="p-2">
											<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
												Completed
											</span>
										</td>
										<td className="p-2">$129.99</td>
									</tr>
									<tr className="border-b">
										<td className="p-2">#1235</td>
										<td className="p-2">Jane Smith</td>
										<td className="p-2">
											<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
												Pending
											</span>
										</td>
										<td className="p-2">$79.99</td>
									</tr>
									<tr>
										<td className="p-2">#1236</td>
										<td className="p-2">Bob Johnson</td>
										<td className="p-2">
											<span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
												Cancelled
											</span>
										</td>
										<td className="p-2">$199.99</td>
									</tr>
								</tbody>
							</table>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
