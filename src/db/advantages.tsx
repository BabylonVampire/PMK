import { IAdvantage } from '@/types';
import {
	LiaHandshake,
	LiaUserTieSolid,
	LiaShieldAltSolid,
} from 'react-icons/lia';

export const advantages: IAdvantage[] = [
	{
		id: 1,
		img: <LiaShieldAltSolid />,
		title: 'Преимущество',
		description: 'Так мы тоже можем',
	},
	{
		id: 2,
		img: <LiaUserTieSolid />,
		title: 'Преимущество',
		description: 'Так мы тоже можем',
	},
	{
		id: 3,
		img: <LiaHandshake />,
		title: 'Преимущество',
		description: 'Так мы тоже можем',
	},
];
