export interface IArticle {
	title: string
	content: IArticleContent[]
}
export type IArticleContent = {
	type: 'text' | 'image' | 'heading'
	value: string
} | {
	type: 'list'
	value: string[]
}