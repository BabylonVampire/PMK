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
			'https://i.pinimg.com/originals/2e/cf/05/2ecf05990f47ae5aa8ca05444f10c3c5.jpg',
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
			'https://i.pinimg.com/originals/2e/cf/05/2ecf05990f47ae5aa8ca05444f10c3c5.jpg',
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
