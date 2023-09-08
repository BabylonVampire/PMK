import { FC, useEffect, useState } from 'react';
import styles from './AboutPage.module.scss';
import CertificateSection from './components/CertificateSection/CertificateSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import { advantages, project, certificates } from '@/db';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [angle, setAngle] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			setWidth(document.body.scrollWidth);
			setHeight(document.body.scrollHeight);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let newAngle = 180 - Math.round(Math.atan(height / width) * 57.3);
		setAngle(newAngle);
	}, [width, height]);
	return (
		<main
			className={styles.aboutPage}
			style={{
				background: `linear-gradient(${angle}deg, rgba(23,29,61,1) 50%, rgba(0,0,0,0.7) 50%, rgba(23,29,61,0) 51%)`,
			}}
		>
			<div className={styles.background} />
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
