import { IArticle } from "@/types";

export const articles: IArticle[] = [
	{
		title: 'Как какать',
		content: [
			{
				type: 'heading',
				value: 'Глава 1'
			},
			{
				type: 'text',
				value: 'Какать просто'
			},
			{
				type: 'image',
				value: 'src/assets/images/about.png'
			},
			{
				type: 'list',
				value: [
					'Садимся',
					'Срём-с'
				]
			},
		]
	}
]