import { IArticle } from '@/types';

export const articles: IArticle[] = [
	{
		id: 1,
		title: 'Статья',
		date: {
			date: 30,
			month: 'Августа',
			year: '2023',
		},
		preview: 'src/assets/images/about.png',
		content: [
			{
				type: 'heading',
				value: 'Глава 1',
			},
			{
				type: 'text',
				value: 'Какать просто',
			},
			{
				type: 'image',
				value: 'src/assets/images/about.png',
			},
			{
				type: 'list',
				value: ['Садимся', 'Срём-с'],
			},
		],
	},
	{
		id: 2,
		title: 'Статья',
		date: {
			date: 30,
			month: 'Августа',
			year: '2023',
		},
		preview: 'src/assets/images/about.png',
		content: [
			{
				type: 'heading',
				value: 'Глава 1',
			},
			{
				type: 'text',
				value: 'Какать просто',
			},
			{
				type: 'image',
				value: 'src/assets/images/about.png',
			},
			{
				type: 'list',
				value: ['Садимся', 'Срём-с'],
			},
		],
	},
];
