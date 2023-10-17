import { FC } from 'react';
import styles from './ArticleContent.module.scss';
import { IArticleContent } from '@/types';

interface IArticleContentProps {
	article: IArticleContent[];
}

const ArticleContent: FC<IArticleContentProps> = ({ article }) => {
	return (
		<div className="ArticleContent">
			{article.map((item) => {
				switch (item.type) {
					case 'text':
						return (
							<div className="articleComponent_text">
								<div className="textWrapper">{item.value}</div>
							</div>
						);

					case 'image':
						return (
							<div className="articleComponent_image">
								<div className="imageWrapper">
									<div
										className="image"
										style={{ backgroundImage: item.value }}
									/>
								</div>
							</div>
						);

					case 'heading':
						return (
							<div className="articleComponent_heading">
								<div className="headingWrapper">
									{item.value}
								</div>
							</div>
						);

					case 'list':
						return (
							<div className="articleComponent_list">
								<li className="listWrapper">
									{item.value.map((li) => {
										return <ul>{li}</ul>;
									})}
								</li>
							</div>
						);

					default:
						break;
				}
			})}
		</div>
	);
};

export default ArticleContent;
