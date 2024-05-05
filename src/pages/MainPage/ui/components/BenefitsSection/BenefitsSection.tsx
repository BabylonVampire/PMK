import Section from '@/components/Section/Section';
import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import { IBenefit } from '@/types/benefit.interface';
import Divider from '@/components/Divider/Divider';

interface IBenefitsSectionProps {
	benefits: IBenefit[];
}

const BenefitsSection: FC<IBenefitsSectionProps> = ({ benefits }) => {
	return (
		<Section className={styles.benefitsSection}>
			<div className={styles.bgImage} />
			<div className={styles.benefitsInnerBox}>
				<div className={styles.headingAndDescription}>
					<div className={styles.heading}>Наши преимущества</div>
					<Divider />
				</div>
				<div className={styles.benefitsBox}>
					<div className={styles.benefitsGrid}>
						{benefits.map((benefit) => {
							return (
								<div
									className={styles.benefit}
									key={`benefits${benefits.indexOf(benefit)}`}
								>
									<div className={styles.benefitInnerBox}>
										<div className={styles.icon}>
											{benefit.icon}
										</div>
										<div className={styles.text}>
											{benefit.text}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default BenefitsSection;
