import { FC } from 'react';
import './Card.scss';
import { Col } from 'antd';
import { IFavorCard } from '@/types/favorCard.interface';

interface ICardProps {
	favorCard: IFavorCard;
}

const Card: FC<ICardProps> = ({ favorCard }) => {
	return (
		<Col span={6} className="card cards__item">
			<div className="card__frame">
				<h2 className="card__title">{favorCard.title}</h2>
			</div>
			<div className="card__overlay"></div>
			<div className="card__content">
				<h2>{favorCard.title}</h2>
				<p> {favorCard.text}</p>
			</div>
		</Col>
	);
};

export default Card;
