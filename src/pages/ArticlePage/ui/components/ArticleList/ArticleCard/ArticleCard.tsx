import { IArticle } from '@/types';
import { FC } from 'react';
import styles from './ArticleCard.module.scss';

interface IArticleCardProps {
	article: IArticle;
}

const ArticleCard: FC<IArticleCardProps> = ({ article }) => {
	return (
		<li className={styles.ArticleCardWrapper}>
			<div className={styles.fullDate}>
				<time className={styles.date}>{article.date.date}</time>
				<time className={styles.month}>{article.date.month}</time>
			</div>
			<h3 className={styles.title}>{article.title}</h3>
			<img
				className={styles.preview}
				src={article.preview}
				alt={article.title}
			/>
		</li>
	);
};

export default ArticleCard;
