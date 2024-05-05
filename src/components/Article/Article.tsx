import { IArticleContent } from '@/types';
import { FC } from 'react';

interface IArticleProps {
	article: IArticleContent[];
}

const Article: FC<IArticleProps> = ({ article }) => {
	console.log(article);
	return (
		<div className="Article">
			<div className="articleContainer"></div>
		</div>
	);
};

export default Article;
