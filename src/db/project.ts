import { IArticle } from '@/types';

export const project: IArticle = {
	id: 1,
	title: 'Чем мы занимаемся',
	date: {
		date: 1,
		month: 'Сентябрь',
		year: '2023',
	},
	preview: `http://gafurov-prod-test.ru/assets/partners.png`,
	content: [
		{
			type: 'text',
			value: 'Nissan Wingroad и Nissan AD третьего поколения (код кузова Y12) — компактные универсалы, выпускаемые японской компанией Nissan для японского внутреннего рынка с 2005 года. Wingroad, снятый с производства 2018 году',
		},
		{
			type: 'text',
			value: 'Nissan для японского внутреннего рынка с 2005 года. Wingroad, снятый с производства 2018 году',
		},
	],
};
