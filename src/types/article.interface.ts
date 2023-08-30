export interface IArticle {
	title: string
	date: string
	content: IArticleContent[]
}
export type IArticleContent = {
	type: 'text' | 'image' | 'heading'
	value: string
} | {
	type: 'list'
	value: string[]
}