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
		title: 'Умеем срать',
		description: 'Ты охуеешь',
	},
	{
		id: 2,
		img: <LiaUserTieSolid />,
		title: 'Умеем срать',
		description: 'Ты охуеешь',
	},
	{
		id: 3,
		img: <LiaHandshake />,
		title: 'Умеем срать',
		description: 'Ты охуеешь',
	},
];
