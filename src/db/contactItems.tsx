import { IContactItem } from '@/types';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { IoPersonOutline, IoDocumentOutline } from 'react-icons/io5';

export const phones: IContactItem = {
	icon: <AiOutlinePhone />,
	data: ['+7 (985) 911 77-47', '+7 (993) 289 38-56', '+7 (939) 849 00-88'],
	heading: 'Телефоны',
};
export const emails: IContactItem = {
	icon: <AiOutlineMail />,
	data: ['pmkrazvitie@yandex.ru'],
	heading: 'Электронный адрес',
};
export const ip: IContactItem = {
	icon: <IoPersonOutline />,
	data: ['Индивидуальный Предприниматель Крым Арсений Дмитриевич'],
	heading: 'ИП',
};
export const inn: IContactItem = {
	icon: <IoDocumentOutline />,
	data: ['503238607288'],
	heading: 'ИНН',
};
