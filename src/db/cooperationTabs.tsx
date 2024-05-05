import { ICooperationTab } from '@/types';
import {
	AuditOutlined,
	CheckOutlined,
	MessageOutlined,
	StarOutlined,
} from '@ant-design/icons';

export const cooperationTabs: ICooperationTab[] = [
	{
		text: 'Знакомимся с вами с помощью формы на сайте или звонка, собираем первичную информацию об объекте, выясняем задачи и определяем сложность работ.',
		tabHeading: 'Заявка',
		icon: <CheckOutlined />,
	},
	{
		text: 'Отвечаем на появляющиеся у вас вопросы, рассказываем каким образом мы можем закрыть ваши потребности, ставим цели и разрабатываем стратегию по работе с объектом.',
		tabHeading: 'Консультация',
		icon: <MessageOutlined />,
	},
	{
		text: 'Только после определения целей и разработки стратегии, подсчитываем стоимость услуг и высылаем предложение в удобном для вас формате.',
		tabHeading: 'Предложение',
		icon: <StarOutlined />,
	},
	{
		text: 'После согласования коммерческого предложения заключаем договор и в соответствии с ним начинаем работы.',
		tabHeading: 'Договор',
		icon: <AuditOutlined />,
	},
];
