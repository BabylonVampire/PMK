import { FC } from 'react'
import styles from './ContactsPage.module.scss'
import ContactSection from '@/components/ContactSection/ContactSection'
 
interface IContactsPageProps {}
 
const ContactsPage: FC<IContactsPageProps> = () => {
	return (
		<main className={styles.ContactPageWrapper}>
			<ContactSection page='contacts'/>
		</main>
	)
}
 
export default ContactsPage