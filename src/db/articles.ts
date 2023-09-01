import { IArticle } from '@/types';

export const articles: IArticle[] = [
	{
		id: 1,
		title: 'Как какать',
		date: {
			date: 30,
			month: 'Августа',
			year: '2023',
		},
		preview:
			'https://media2.cackle.me/f/e2/753708a07fe7b17aa96679233808ce2f.jpg',
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
		title: 'Как какать',
		date: {
			date: 30,
			month: 'Августа',
			year: '2023',
		},
		preview: '',
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
		id: 3,
		title: 'Как какать',
		date: {
			date: 30,
			month: 'Августа',
			year: '2023',
		},
		preview:
			'https://media2.cackle.me/f/e2/753708a07fe7b17aa96679233808ce2f.jpg',
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
