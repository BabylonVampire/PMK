import { FC } from 'react';
import Review from './Review/Review';
import styles from './ReviewsSection.module.scss';
import { Col, Row } from 'antd';
import Section from '@/components/Section/Section';

interface IReviewsSectionProps {
	reviews: {
		post: string;
		name: string;
		photo: string;
		text: string;
	}[];
}

const ReviewsSection: FC<IReviewsSectionProps> = ({ reviews }) => {
	return (
		<Section className={styles.reviewsSection}>
			<Row className={styles.reviewsBox}>
				{reviews.map((review) => {
					return (
						<Col span={8} className={styles.column}>
							<Review review={review} />
						</Col>
					);
				})}
			</Row>
		</Section>
	);
};

export default ReviewsSection;
