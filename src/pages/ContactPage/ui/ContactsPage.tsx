import ContactSection from '@/components/ContactSection/ContactSection';
import { emails, phones } from '@/db/contactItems';
import { FC } from 'react';
import styles from './ContactsPage.module.scss';
import ContactsList from './components/ContactsList/ContactsList';

interface IContactsPageProps {}

const ContactsPage: FC<IContactsPageProps> = () => {
	return (
		<main className={styles.ContactPageWrapper}>
			<ContactsList emails={emails} phones={phones} />
			<ContactSection page="contacts" />
		</main>
	);
};

export default ContactsPage;
