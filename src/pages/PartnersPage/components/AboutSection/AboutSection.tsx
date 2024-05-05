import Divider from '@/components/Divider/Divider';
import Section from '@/components/Section/Section';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
	return (
		<Section className={styles.aboutSection} style={{ paddingTop: 0 }}>
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
					src="http://gafurov-prod-test.ru/assets/partners.png"
					alt="asd"
				/>
			</div>
		</Section>
	);
};

export default AboutSection;
