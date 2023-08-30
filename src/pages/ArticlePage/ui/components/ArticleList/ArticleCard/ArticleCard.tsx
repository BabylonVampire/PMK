import { FC } from 'react'
import styles from './ArticleCard.module.scss'
import { IArticle } from '@/types'
 
interface IArticleCardProps {
	article: IArticle
}
 
const ArticleCard: FC<IArticleCardProps> = ({article}) => {
	return (
		<div className={styles.ArticleCardWrapper}>
			{article.title}
		</div>
	)
}
 
export default ArticleCard