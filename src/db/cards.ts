import { ICard } from '@/types';

export const cards: ICard[] = [
	{
		title: 'Проектирование инженерных систем',
		text: 'Комплексное проектирование объекта, разрабатываем проекты в соответствии с нормативной базой - наши проекты согласовывают с первого раза.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/1.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv09.jpg`,
	},
	{
		title: 'Монтаж инженерных систем',
		text: 'Опытные специалисты компании выполнят монтажные работы в соответствии с проектом - не придется переживать за качество.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/2.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv01.jpg`,
	},
	{
		title: 'Заключение прямых договоров с РСО',
		text: 'Работаем со всеми сбытовыми компаниями Москвы - для нас нет нерешаемых вопросов.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/3.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv10.png`,
	},
	{
		title: 'Технологическое присоединение к сетям',
		text: 'Сопровождаем процесс от получения технических условий до акта технологического присоединения - вы получаете сервис одного окна.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/4.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv07.jpg`,
	},
	{
		title: 'Увеличение выделенной электрической мощности',
		text: 'Работаем со всеми сетевыми организациями Москвы - решаем задачи любой сложности.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/5.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv05.JPG`,
	},
	{
		title: 'Независимая экспертиза',
		text: 'Выявим источники нерациональных энергозатрат и неоправданных потерь энергии на вашем объекте - делаем комплексный анализ и оценку всех энергосистем.',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/6.PNG`,
		bg: 'radial-gradient(circle, rgba(23,29,61,1) 0%, rgba(84,96,158,1) 76%)',
		back: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/serv00.png`,
	},
];
