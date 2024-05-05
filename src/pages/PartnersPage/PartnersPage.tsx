import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './PartnersPage.module.scss';
import AboutSection from './components/AboutSection/AboutSection';

const PartnersPage = () => {
	return (
		<main className={styles.PartnersPageWrapper}>
			<AboutSection />
			<ContactSection page="about" />
		</main>
	);
};

export default PartnersPage;
