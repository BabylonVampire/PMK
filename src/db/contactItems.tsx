import { IContactItem } from '@/types';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

export const phones: IContactItem = {
	icon: <AiOutlinePhone />,
	data: ['+7 (985) 911 77-47'],
	heading: 'Телефоны',
};
export const emails: IContactItem = {
	icon: <AiOutlineMail />,
	data: ['raazvitie@gmail.com'],
	heading: 'Электронный адрес',
};
