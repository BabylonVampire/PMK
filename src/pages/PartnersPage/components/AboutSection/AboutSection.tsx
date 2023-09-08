import { FC } from 'react';
import styles from './AboutSection.module.scss';
import Section from '@/components/Section/Section';
import Divider from '@/components/Divider/Divider';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = ({}) => {
	return (
		<Section className={styles.aboutSection}>
			<div className={styles.innerBox}>
				<div className={styles.contentBox}>
					<h3 className={styles.title}>asdasd</h3>
					<Divider />
					<div className={styles.content}>
						<div className={styles.description}>sdfsdfsdfsdf</div>
					</div>
				</div>
				<img
					className={styles.preview}
					src="/src/assets/images/partners.png"
					alt="asd"
				/>
			</div>
		</Section>
	);
};

export default AboutSection;
