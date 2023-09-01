import { FC } from 'react';
import styles from './AboutPage.module.scss';
import CertificateSection from './components/CertificateSection/CertificateSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	return (
		<main className={styles.aboutPage}>
			<ProjectsSection/>
			<AdvantagesSection/>
			<CertificateSection/>
			<ContactSection page='about'/>
		</main>
	);
};

export default AboutPage;
