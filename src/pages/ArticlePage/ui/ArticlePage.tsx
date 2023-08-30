import { articles } from '@/db';
import { FC } from 'react';
import styles from './ArticlePage.module.scss';
import ArticleList from './components/ArticleList/ArticleList';

interface IArticlePageProps {}

const ArticlePage: FC<IArticlePageProps> = () => {
	return (
		<main className={styles.ArticlesPageWrapper}>
			<ArticleList articles={articles} />
		</main>
	);
};

export default ArticlePage;
