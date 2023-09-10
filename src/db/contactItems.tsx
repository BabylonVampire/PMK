import { IContactItem } from '@/types';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { PiMapPinFill } from 'react-icons/pi';

export const phones: IContactItem = {
	icon: <AiOutlinePhone />,
	data: ['+7 888 888 88 81', '+7 888 888 88 82', '+7 888 888 88 83'],
	heading: 'Телефоны',
};
export const addresses: IContactItem = {
	icon: <PiMapPinFill />,
	data: [
		'ул. Пушкина, дом 37 ст. 3',
		'ул. Пушкина, дом 37 ст. 4',
		'ул. Пушкина, дом 37 ст. 5',
	],
	heading: 'Адреса',
};
export const emails: IContactItem = {
	icon: <AiOutlineMail />,
	data: ['test1Email@gmail.com', 'test2Email@gmail.com'],
	heading: 'Электронный адрес',
};
