import { FC } from 'react';
import styles from './Review.module.scss';

interface IReviewProps {
	review: {
		name: string;
		post: string;
		photo: string;
		text: string;
	};
}

const Review: FC<IReviewProps> = ({ review }) => {
	return (
		<div className="review">
			<div className={styles.review}>
				<div className={styles.reviewBox}>
					<div className={styles.reviewText}>{review.text}</div>
					<div
						className={styles.reviewPhoto}
						style={{ backgroundImage: `url(${review.photo})` }}
					/>
					<div className={styles.reviewName}>{review.name}</div>
					<div className={styles.reviewPost}>{review.post}</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
