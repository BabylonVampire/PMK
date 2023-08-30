import { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from '@/types';

interface ICardProps {
	card: ICard;
}

const Card: FC<ICardProps> = ({ card }) => {
	return (
		<div
			className={styles.CardWrapper}
			style={{ background: card.bg }}
		>
			<h4 className={styles.title}>{card.title}</h4>
			<p className={styles.text}>{card.text}</p>
			<img className={styles.img} src={card.img} alt={card.title} />
		</div>
	);
};

export default Card;
