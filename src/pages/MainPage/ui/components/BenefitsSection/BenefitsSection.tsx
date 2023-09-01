import Section from '@/components/Section/Section';
import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import { IBenefit } from '@/types/benefit.interface';
import { Col, Row } from 'antd';
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
					<div className={styles.description}>
						Лалалалалалалал ала алалал алалал алал ал алалал
					</div>
				</div>
				<Divider />
				<div className={styles.benefitsBox}>
					<Row>
						{benefits.map((benefit) => {
							return (
								<Col xs={24} sm={12} md={12} lg={8}>
									<div className={styles.benefit}>
										<div className={styles.benefitInnerBox}>
											<div className={styles.icon}>
												{benefit.icon}
											</div>
											<div className={styles.text}>
												{benefit.text}
											</div>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			</div>
		</Section>
	);
};

export default BenefitsSection;
