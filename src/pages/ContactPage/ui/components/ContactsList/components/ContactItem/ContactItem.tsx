import { FC } from 'react';
import styles from './ContactItem.module.scss';
import { IContactItem } from '@/types';

interface IContactItemProps {
	contactItem: IContactItem;
}

const ContactItem: FC<IContactItemProps> = ({ contactItem }) => {
	return (
		<div className={styles.contactItemBox}>
			<div className={styles.heading}>{contactItem.heading}</div>
			{contactItem.data.map((item) => {
				return (
					<div className={styles.item}>
						<div className={styles.icon}>{contactItem.icon}</div>
						<div className={styles.text}>{item}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ContactItem;
