import { FC } from 'react';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = ({}) => {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.innerContainer}>
				<div className={styles.pictureBox}>
					<div className={styles.picture}></div>
				</div>
				<div className={styles.textBox}>
					<div className={styles.heading}>
						Приятно познакомиться!
						<br />
						Мы - ПМК РАЗВИТИЕ
					</div>
					<div className={styles.description}>
						Nissan Wingroad и Nissan AD третьего поколения (код
						кузова Y12) — компактные универсалы, выпускаемые
						японской компанией Nissan для японского внутреннего
						рынка с 2005 года. Wingroad, снятый с производства в
						2018 году, является пассажирской моделью, а ныне
						выпускаемый AD — коммерческой. Nissan Wingroad и Nissan
						AD третьего поколения (код кузова Y12) — компактные
						универсалы, выпускаемые японской компанией Nissan для
						японского внутреннего рынка с 2005 года. Wingroad,
						снятый с производства в 2018 году, является пассажирской
						моделью, а ныне выпускаемый AD — коммерческой.
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;