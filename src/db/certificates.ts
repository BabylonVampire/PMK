import { ICertificate } from '@/types';

export const certificates: ICertificate[] = [
	{
		id: 1,
		name: 'Диплом',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/certificate_3.png`,
	},
	{
		id: 2,
		name: 'Диплом',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/certificate_2.png`,
	},
	{
		id: 3,
		name: 'Диплом',
		img: `${import.meta.env.VITE_PATH_TO_PORTFOLIO}/certificate_1.png`,
	},
];
