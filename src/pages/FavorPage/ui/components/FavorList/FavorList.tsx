import { FC } from 'react';
import styles from './FavorList.module.scss';
import { IFavor } from '@/types';
import FavorCard from './FavorCard/FavorCard';

interface IFavorListProps {
	favors: IFavor[];
}

const FavorList: FC<IFavorListProps> = ({ favors }) => {
	return (
		<section className={styles.FavorListWrapper}>
			<div className={styles.FavorListContainer}>
				<div className={styles.favorCardsGrid}>
					{favors.map((favor) => {
						return (
							<FavorCard
								favor={favor}
								key={`favor${favors.indexOf(favor)}`}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FavorList;
