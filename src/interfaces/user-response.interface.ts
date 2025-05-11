export interface IUserInfo {
	id: string
	fullName: string
	email: string
	active: boolean
	source: string
	campus: string
	nivel: string
	period: string
	program: string
	status: string
	personalEmail: string
	firstLogin: boolean
	firstDate: Date
	lastDate: Date
	paymentPlan: string
	points: number
	mode: string
	role: string
	country: string
}

export interface IUserResponse {
	totalItems: number
	items: IUserInfo[]
}
