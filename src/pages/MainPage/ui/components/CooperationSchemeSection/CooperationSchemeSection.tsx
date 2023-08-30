import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';
import { cooperationTabs } from '@/db';
import Section from '@/components/Section/Section';

const CooperationSchemeSection: FC = () => {
	return (
		<Section
			className={styles.cooperationSchemeSection}
			heading="Схема сотрудничества"
		>
			<div className={styles.innerBox}>
				<div className={styles.divider}></div>
				<div className={styles.stepsBox}>
					<Tabs tabContent={cooperationTabs} />
				</div>
			</div>
		</Section>
	);
};

export default CooperationSchemeSection;
