import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';

interface ICooperationSchemeSectionProps {}

const CooperationSchemeSection: FC<ICooperationSchemeSectionProps> = ({}) => {
	return (
		<section className={styles.cooperationSchemeSection}>
			<div className={styles.innerBox}>
				<div className={styles.heading}>Схема сотрудничества</div>
				<div className={styles.divider}></div>
				<div className={styles.stepsBox}>
					<Tabs
						tabContent={[
							{ text: 'tab 1', tabHeading: 'tab 1' },
							{ text: 'tab 2', tabHeading: 'tab 2' },
							{ text: 'tab 3', tabHeading: 'tab 3' },
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default CooperationSchemeSection;
