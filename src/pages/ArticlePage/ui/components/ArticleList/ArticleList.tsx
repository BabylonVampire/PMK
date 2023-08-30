import { IArticle } from '@/types';
import { FC } from 'react';
import ArticleCard from './ArticleCard/ArticleCard';
import styles from './ArticleList.module.scss';

interface IArticleListProps {
	articles: IArticle[];
}

const ArticleList: FC<IArticleListProps> = ({ articles }) => {
	return (
		<section className={styles.ArticlesListWrapper}>
			<ul className={styles.ArticlesList}>
				{articles.map((article) => {
					return <ArticleCard article={article} />;
				})}
			</ul>
		</section>
	);
};

export default ArticleList;
