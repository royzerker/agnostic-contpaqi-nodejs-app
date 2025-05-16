type IAsyncTuple<T> = Promise<[T | null, Error | null]>

type IGenericRecord<T = any> = {
	[key: string]: T
}

declare global {
	interface Window {
		google: any
	}
}
