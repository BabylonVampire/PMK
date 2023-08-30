import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';
import { cooperationTabs } from '@/db';

const CooperationSchemeSection: FC = () => {
	return (
		<section className={styles.cooperationSchemeSection}>
			<div className={styles.innerBox}>
				<div className={styles.heading}>Схема сотрудничества</div>
				<div className={styles.divider}></div>
				<div className={styles.stepsBox}>
					<Tabs tabContent={cooperationTabs} />
				</div>
			</div>
		</section>
	);
};

export default CooperationSchemeSection;
