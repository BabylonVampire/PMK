export interface IArticle {
	id: number
	title: string
	date: string
	preview?: string
	content: IArticleContent[]
}
export type IArticleContent = {
	type: 'text' | 'image' | 'heading'
	value: string
} | {
	type: 'list'
	value: string[]
}