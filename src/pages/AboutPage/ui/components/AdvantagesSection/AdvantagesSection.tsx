import { FC } from 'react';
import styles from './AdvantagesSection.module.scss';
import Section from '@/components/Section/Section';
import Advantage from './Advantage/Advantage';
import { IAdvantage } from '@/types';

interface IAdvantagesSectionProps {
	advantages: IAdvantage[];
}

const AdvantagesSection: FC<IAdvantagesSectionProps> = ({ advantages }) => {
	return (
		<Section
			heading="Зачем выбирать нас?"
			className={styles.AdvantagesSectionWrapper}
		>
			<div className={styles.AdvantagesContainer}>
				{advantages.map((advantage) => {
					return (
						<>
							<Advantage
								key={advantage.id}
								advantage={advantage}
							/>
							{advantages.indexOf(advantage) ===
							advantages.length - 1 ? null : (
								<div className={styles.verticalDivider} />
							)}
						</>
					);
				})}
			</div>
		</Section>
	);
};

export default AdvantagesSection;
