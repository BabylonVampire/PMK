import Divider from '@/components/Divider/Divider';
import Section from '@/components/Section/Section';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
	return (
		<Section className={styles.aboutSection} style={{ paddingTop: 0 }}>
			<div className={styles.innerBox}>
				<div className={styles.contentBox}>
					<h3 className={styles.title}>
						Добро пожаловать в раздел «Партнерам» нашей
						проектно-монтажной компании!
					</h3>
					<Divider />
					<div className={styles.content}>
						<div className={styles.description}>
							Мы всегда стремимся к созданию эффективных и
							взаимовыгодных партнерских отношений с
							организациями, которые разделяют нашу страсть к
							качеству и инновациям. Если вы представитель
							строительной / ремонтной фирмы, управляющей
							компании, сетевой организации или любой другой
							эксплуатирующей организации - мы будем рады
							выслушать ваши предложения по созданию и поддержанию
							партнерского сотрудничества по любым направлениям
							нашей работы.
						</div>
					</div>
				</div>
				{/* <img
					className={styles.preview}
					src="${import.meta.env.VITE_PATH_TO_PORTFOLIO}/partners.png"
					alt="asd"
				/> */}
			</div>
		</Section>
	);
};

export default AboutSection;
