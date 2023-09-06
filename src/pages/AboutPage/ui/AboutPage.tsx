import { FC } from 'react';
import styles from './AboutPage.module.scss';
import CertificateSection from './components/CertificateSection/CertificateSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import { advantages, project, certificates } from '@/db';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	return (
		<main className={styles.aboutPage}>
			<ProjectsSection project={project} />
			<AdvantagesSection advantages={advantages} />
			<CertificateSection certificates={certificates} />
			<div className={styles.contactSectionWrapper}>
				<ContactSection page="about" />
			</div>
		</main>
	);
};

export default AboutPage;
