import { FC, PropsWithChildren } from 'react';
import styles from './Section.module.scss';

interface ISectionProps {
	heading?: string;
}

const Section: FC<PropsWithChildren<ISectionProps>> = ({ children, heading }) => {
	return (
		<section className={styles.Section}>
			{heading && <h2 className={styles.heading}>{heading}</h2>}
			<div className={styles.content}>{children}</div>
		</section>
	);
};

export default Section;
