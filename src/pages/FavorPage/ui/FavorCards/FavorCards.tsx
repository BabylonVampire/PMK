import { FC } from 'react';
import Card from './Card/Card';
import styles from './FavorCards.module.scss';
import Section from '@/components/Section/Section';
import { Row } from 'antd';
import { favorCards } from '@/db/favorCards';

interface IFavorCardsProps {}

const FavorCards: FC<IFavorCardsProps> = ({}) => {
	return (
		<Section className={styles.FavorCardsSection}>
			<div className={styles.innerContainer}>
				<Row className={styles.cardContainer} gutter={[0, 24]}>
					{favorCards.map((favorCard) => {
						return <Card favorCard={favorCard} />;
					})}
				</Row>
			</div>
		</Section>
	);
};

export default FavorCards;
