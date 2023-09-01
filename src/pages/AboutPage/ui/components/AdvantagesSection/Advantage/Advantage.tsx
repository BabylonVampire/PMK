import { FC } from 'react';
import styles from './Advantage.module.scss';
import { IAdvantage } from '@/types';

interface IAdvantageProps {
	advantage: IAdvantage;
}

const Advantage: FC<IAdvantageProps> = ({ advantage }) => {
	return <div className={styles.AdvantageWrapper}>
		<img className={styles.img} src={advantage.img} alt={advantage.title} />
		<h3 className={styles.title}>{advantage.title}</h3>
		<p className={styles.description}>{advantage.description}</p>
	</div>;
};

export default Advantage;
