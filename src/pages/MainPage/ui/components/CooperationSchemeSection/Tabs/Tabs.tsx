import { FC, useState } from 'react';
import styles from './Tabs.module.scss';
import { ICooperationTab } from '@/types';

interface ITabsProps {
	tabContent: ICooperationTab[];
}

const Tabs: FC<ITabsProps> = ({ tabContent }) => {
	const [currentTab, setTab] = useState<number>(0);
	return (
		<div className={styles.tabBox}>
			<div className={styles.tabText}>{tabContent[currentTab].text}</div>
			<div className={styles.tabContainer}>
				{tabContent.map((tab) => {
					return (
						<div
							key={`tab${tabContent.indexOf(tab)}`}
							className={
								tabContent.indexOf(tab) === currentTab
									? styles.selectedTab
									: styles.tab
							}
							onClick={() => setTab(tabContent.indexOf(tab))}
						>
							{tab.icon}
							<div className={styles.heading}>
								{tab.tabHeading}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
