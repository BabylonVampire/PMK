import { FC } from 'react';
import styles from './AdvantagesSection.module.scss';
import Section from '@/components/Section/Section';
import { advantages } from '@/db';
import Advantage from './Advantage/Advantage';

interface IAdvantagesSectionProps {}

const AdvantagesSection: FC<IAdvantagesSectionProps> = () => {
	return (
		<Section
			heading="Зачем выбирать нас?"
			className={styles.AdvantagesSectionWrapper}
		>
			<div className={styles.AdvantagesContainer}>
				{advantages.map((advantage) => {
					return (
						<Advantage key={advantage.id} advantage={advantage} />
					);
				})}
			</div>
		</Section>
	);
};

export default AdvantagesSection;
