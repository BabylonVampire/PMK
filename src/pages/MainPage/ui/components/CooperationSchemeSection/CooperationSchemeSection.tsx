import { FC } from 'react';
import styles from './CooperationSchemeSection.module.scss';
import Tabs from './Tabs/Tabs';
import {
	AuditOutlined,
	CheckOutlined,
	MessageOutlined,
	StarOutlined,
} from '@ant-design/icons';

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
							{
								text: 'tab 1',
								tabHeading: 'tab 1',
								icon: <CheckOutlined />,
							},
							{
								text: 'tab 2',
								tabHeading: 'tab 2',
								icon: <MessageOutlined />,
							},
							{
								text: 'tab 3',
								tabHeading: 'tab 3',
								icon: <StarOutlined />,
							},
							{
								text: 'tab 4',
								tabHeading: 'tab 4',
								icon: <AuditOutlined />,
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default CooperationSchemeSection;
