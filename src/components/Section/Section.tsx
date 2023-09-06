import { FC, PropsWithChildren } from 'react';
import styles from './Section.module.scss';
import Divider from '../Divider/Divider';

interface ISectionProps {
	heading?: string;
	className?: string;
	sectionClassName?: string;
}

const Section: FC<PropsWithChildren<ISectionProps>> = ({
	children,
	heading,
	className,
	sectionClassName,
}) => {
	return (
		<section className={`${styles.Section} ${sectionClassName}`}>
			{heading && (
				<div className={styles.headingBox}>
					<h2 className={styles.heading}>{heading}</h2>
					<Divider />
				</div>
			)}
			<div className={className ? className : ''}>{children}</div>
		</section>
	);
};

export default Section;
