import { IBenefit } from '@/types/benefit.interface';
import { CheckOutlined } from '@ant-design/icons';
import { FaUser, FaUserTie, FaMedal } from 'react-icons/fa';
import { GiClassicalKnowledge } from 'react-icons/gi';
import { TbTopologyComplex } from 'react-icons/tb';

export const benefits: IBenefit[] = [
	{
		icon: <FaUser />,
		text: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД',
	},
	{
		icon: <FaMedal />,
		text: 'ЭКСКЛЮЗИВНЫЕ УСЛУГИ',
	},
	{
		icon: <TbTopologyComplex />,
		text: 'КОМПЛЕКСНЫЙ ПОДХОД',
	},
	{
		icon: <GiClassicalKnowledge />,
		text: 'УНИКАЛЬНЫЙ ОПЫТ',
	},
	{
		icon: <FaUserTie />,
		text: 'ПРОФЕССИОНАЛИЗМ ШТАТА',
	},
	{
		icon: <CheckOutlined />,
		text: 'ГАРАНТИЯ КАЧЕСТВА',
	},
];
