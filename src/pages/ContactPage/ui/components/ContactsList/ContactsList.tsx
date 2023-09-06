import { FC } from 'react';
import styles from './ContactsList.module.scss';
import { IContactItem } from '@/types';
import ContactItem from './components/ContactItem/ContactItem';

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
			</div>
		</div>
	);
};

export default ContactsList;
