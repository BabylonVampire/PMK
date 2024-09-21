import { FC } from 'react';
import styles from './ContactsList.module.scss';
import { IContactItem } from '@/types';
import ContactItem from './components/ContactItem/ContactItem';
import { IoDocumentOutline } from 'react-icons/io5';

interface IContactsListProps {
	phones: IContactItem;
	emails: IContactItem;
}

const ContactsList: FC<IContactsListProps> = ({ phones, emails }) => {
	return (
		<div className={styles.contactsBox}>
			<div className={styles.contactsInnerBox}>
				<ContactItem contactItem={phones} />
				<ContactItem contactItem={emails} />
				<div className={styles.ipBox}>
					<p className={styles.ipHeading}>
						ИП Крым Арсений Дмитриевич
					</p>
					<p className={styles.ipItem}>
						<IoDocumentOutline /> <span>ИНН</span>: 503238607288
					</p>
					<p className={styles.ipItem}>
						<IoDocumentOutline /> <span>ОГРНИП</span>:
						322508100203900
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactsList;
