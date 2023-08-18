import { FC } from 'react';
import Review from './Review/Review';
import styles from './ReviewsSection.module.scss';
import { Col, Row } from 'antd';

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
		<section className={styles.reviewsSection}>
			<Row className={styles.reviewsBox}>
				{reviews.map((review) => {
					return (
						<Col span={8}>
							<Review review={review} />
						</Col>
					);
				})}
			</Row>
		</section>
	);
};

export default ReviewsSection;
