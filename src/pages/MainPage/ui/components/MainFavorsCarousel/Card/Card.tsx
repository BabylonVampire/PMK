import { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from '@/types';

interface ICardProps {
	card: ICard;
	bgc?: string
}

const Card: FC<ICardProps> = ({ card, bgc }) => {
	return (
		<div className={styles.CardWrapper} style={{backgroundColor: bgc}}>
			<h4 className={styles.title}>{card.title}</h4>
			<p className={styles.text}>{card.text}</p>
			<img className={styles.img} src={card.img} alt={card.title} />
		</div>
	);
};

export default Card;
