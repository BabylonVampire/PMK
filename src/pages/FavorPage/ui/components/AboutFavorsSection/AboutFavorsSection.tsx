import { FC } from 'react';
import styles from './AboutFavorsSection.module.scss';
import CallUsButton from '@/components/CallUsButton/CallUsButton';

interface IAboutFavorsSectionProps {
	text: string;
	list: string[];
}

const AboutFavorsSection: FC<IAboutFavorsSectionProps> = ({ text, list }) => {
	return (
		<div className={styles.aboutFavorsSection}>
			<div className={styles.innerContainer}>
				<div className={styles.text}>{text}</div>
				<ul className={styles.list}>
					{list.map((item) => {
						return (
							<li
								className={styles.listElement}
								key={`aboutFavorListItem${list.indexOf(item)}`}
							>
								{item}
							</li>
						);
					})}
				</ul>
				<CallUsButton />
			</div>
		</div>
	);
};

export default AboutFavorsSection;
