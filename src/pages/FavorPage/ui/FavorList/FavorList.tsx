import { FC } from 'react';
import styles from './FavorList.module.scss';
import { IFavor } from '@/types';
import FavorCard from './FavorCard/FavorCard';
import { Col, Row } from 'antd';

interface IFavorListProps {
	favors: IFavor[];
}

const FavorList: FC<IFavorListProps> = ({ favors }) => {
	return (
		<section className={styles.FavorListWrapper}>
			<div className={styles.FavorListContainer}>
				<Row>
					{favors.map((favor) => {
						return (
							<Col span={6} className={styles.column}>
								<FavorCard key={favor.id} favor={favor} />
							</Col>
						);
					})}
				</Row>
			</div>
		</section>
	);
};

export default FavorList;
