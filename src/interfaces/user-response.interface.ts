export interface IUser {
	id: string
	fullName: string
	email: string
	firstName: string
	lastName: string
	firstLogin: boolean
	firstLoginAt: number
}

export interface IUserResponse {
	totalItems: number
	items: IUser[]
}
