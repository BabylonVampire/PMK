import ContactSection from '@/components/ContactSection/ContactSection';
import { emails, inn, ip, phones } from '@/db/contactItems';
import { FC } from 'react';
import styles from './ContactsPage.module.scss';
import ContactsList from './components/ContactsList/ContactsList';

interface IContactsPageProps {}

const ContactsPage: FC<IContactsPageProps> = () => {
	return (
		<main className={styles.ContactPageWrapper}>
			<ContactsList emails={emails} phones={phones} ip={ip} inn={inn} />
			<ContactSection />
		</main>
	);
};

export default ContactsPage;
