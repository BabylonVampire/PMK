import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';
import Section from '@/components/Section/Section';
import Divider from '@/components/Divider/Divider';
import CallUsButton from '@/components/CallUsButton/CallUsButton';
import { ICooperationTab } from '@/types';

interface ICooperationSchemeSection {
	cooperationTabs: ICooperationTab[];
}

const CooperationSchemeSection: FC<ICooperationSchemeSection> = ({
	cooperationTabs,
}) => {
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
					<CallUsButton />
				</div>
			</div>
		</Section>
	);
};

export default CooperationSchemeSection;
