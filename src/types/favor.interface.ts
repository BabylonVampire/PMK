export interface IFavor {
	id: number
	name: string
	price: string
	time: string
	description: {id: number, text: string}[]
}