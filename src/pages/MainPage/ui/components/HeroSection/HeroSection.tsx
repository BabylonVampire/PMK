import { FC } from 'react';
import styles from './HeroSection.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = ({}) => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.contentBox}>
				<div className={styles.title}>
					<div className={styles.logo}></div>
					<div className={styles.titleContainer}>
						<p className={styles.heading}>ПМК РАЗВИТИЕ</p>
						<p className={styles.description}>
							ПРОЕКТНО - МОНТАЖНАЯ КОМПАНИЯ
						</p>
					</div>
				</div>
				<div className={styles.animation}></div>
			</div>
		</section>
	);
};

export default HeroSection;
