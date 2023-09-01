import { FC } from 'react';
import styles from './AboutPage.module.scss';
import CertificateSection from './components/CertificateSection/CertificateSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	return (
		<main className={styles.aboutPage}>
			<ProjectsSection/>
			<AdvantagesSection/>
			<CertificateSection/>
		</main>
	);
};

export default AboutPage;
