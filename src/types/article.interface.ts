export interface IArticle {
	id: number;
	title: string;
	date: { date: number; month: string; year: string };
	preview?: string;
	content: IArticleContent[];
}
export type IArticleContent =
	| {
			type: 'text' | 'image' | 'heading';
			value: string;
		}
	| {
			type: 'list';
			value: string[];
		};
