import { FC, PropsWithChildren } from 'react';
import styles from './Section.module.scss';

interface ISectionProps {
	heading?: string;
	className?: string;
}

const Section: FC<PropsWithChildren<ISectionProps>> = ({
	children,
	heading,
	className,
}) => {
	return (
		<section className={styles.Section}>
			{heading && <h2 className={styles.heading}>{heading}</h2>}
			<div className={className ? className : ''}>{children}</div>
		</section>
	);
};

export default Section;
