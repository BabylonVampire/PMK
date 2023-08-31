import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';
import { cooperationTabs } from '@/db';
import Section from '@/components/Section/Section';
import Divider from '@/components/Divider/Divider';

const CooperationSchemeSection: FC = () => {
	return (
		<Section
			className={styles.cooperationSchemeSection}
			heading="Схема сотрудничества"
		>
			<Divider />
			<div className={styles.innerBox}>
				<div className={styles.stepsBox}>
					<Tabs tabContent={cooperationTabs} />
				</div>
				<div className={styles.btnBox}>
					<button className={styles.callUsButton}>
						Сотрудничать
					</button>
				</div>
			</div>
		</Section>
	);
};

export default CooperationSchemeSection;
