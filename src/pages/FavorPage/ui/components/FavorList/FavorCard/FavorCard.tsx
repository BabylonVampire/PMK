import { FC } from 'react';
import styles from './FavorCard.module.scss';
import { IFavor } from '@/types';
import { Link } from 'react-router-dom';

interface IFavorCardProps {
	favor: IFavor;
}

const FavorCard: FC<IFavorCardProps> = ({ favor }) => {
	return (
		<div className={styles.FavorCardWrapper}>
			<h4 className={styles.title}>{favor.name}</h4>
			<p className={styles.price}>{favor.price}</p>
			<p className={styles.time}>{favor.time}</p>
			<ul className={styles.descriptionList}>
				{favor.description.map((item) => {
					return (
						<li key={item.id} className={styles.descriptionItem}>
							{item.text}
						</li>
					);
				})}
			</ul>
			<button className={styles.infoBtn}>
				<Link to={'/contacts'}>Больше информации</Link>
			</button>
		</div>
	);
};

export default FavorCard;
