import { IContactItem } from '@/types';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { PiMapPinFill } from 'react-icons/pi';

export const phones: IContactItem = {
	icon: <AiOutlinePhone />,
	data: ['+7 888 888 88 88', '+7 888 888 88 88', '+7 888 888 88 88'],
	heading: 'Телефоны',
};
export const addresses: IContactItem = {
	icon: <PiMapPinFill />,
	data: [
		'ул. Пушкина, дом 37 ст. 5',
		'ул. Пушкина, дом 37 ст. 5',
		'ул. Пушкина, дом 37 ст. 5',
	],
	heading: 'Адреса',
};
export const emails: IContactItem = {
	icon: <AiOutlineMail />,
	data: ['testEmail@gmail.com', 'testEmail@gmail.com'],
	heading: 'Электронный адрес',
};
