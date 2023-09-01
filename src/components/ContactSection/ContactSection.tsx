import { FC } from 'react'
import styles from './ContactSection.module.scss'
import Section from '../Section/Section'
 
interface IContactSectionProps {
	page: 'contacts' | 'partners' | 'about'
}
 
const ContactSection: FC<IContactSectionProps> = ({page}) => {
	return (
		<Section className={styles.ContactSectionWrapper}>
			
		</Section>
	)
}
 
export default ContactSection