import { FC } from 'react';
import './Card.scss';
import { Col } from 'antd';
import { IFavorCard } from '@/types/favorCard.interface';

interface ICardProps {
	favorCard: IFavorCard;
}

const Card: FC<ICardProps> = ({ favorCard }) => {
	return (
		<Col xl={6} lg={6} md={8} sm={8} xs={12} className="card cards__item">
			<div className="card__frame">
				<div
					className={'card__background'}
					style={{
						backgroundImage: `url(${favorCard.back})`,
					}}
				></div>
				<h2 className="card__title">{favorCard.title}</h2>
			</div>
			<div className="card__overlay"></div>
			<div className="card__content">
				<p> {favorCard.text}</p>
			</div>
		</Col>
	);
};

export default Card;
