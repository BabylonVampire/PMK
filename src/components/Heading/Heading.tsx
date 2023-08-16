import { FC } from 'react';
import styles from './Heading.module.scss';

interface IHeadingProps {
	title: string;
	description: string;
}

const Heading: FC<IHeadingProps> = ({ title, description }) => {
	return (
		<div className={styles.heading}>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};

export default Heading;
