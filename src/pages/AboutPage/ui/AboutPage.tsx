import ContactSection from '@/components/ContactSection/ContactSection';
import { advantages, certificates, project } from '@/db';
import { FC } from 'react';
import styles from './AboutPage.module.scss';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import CertificateSection from './components/CertificateSection/CertificateSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	return (
		<main className={styles.aboutPage}>
			<div className={styles.background} />
			<ProjectsSection project={project} />
			<AdvantagesSection advantages={advantages} />
			<CertificateSection certificates={certificates} />
			<ContactSection page="about" />
		</main>
	);
};

export default AboutPage;
