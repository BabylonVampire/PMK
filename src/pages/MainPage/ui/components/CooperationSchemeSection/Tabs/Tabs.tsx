import { FC, useState } from 'react';
import styles from './Tabs.module.scss';

interface ITabsProps {
	tabContent: { text: string; tabHeading: string; icon: React.ReactNode }[]; //;
}

const Tabs: FC<ITabsProps> = ({ tabContent }) => {
	const [tab, setTab] = useState<number>(0);
	return (
		<div className={styles.tabBox}>
			<div className={styles.tabText}>{tabContent[tab].text}</div>
			<div className={styles.tabContainer}>
				{tabContent.map((tab) => {
					return (
						<div
							className={styles.tab}
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
