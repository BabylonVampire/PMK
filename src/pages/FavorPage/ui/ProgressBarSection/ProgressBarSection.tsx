import Section from '@/components/Section/Section';
import { FC } from 'react';
import styles from './ProgressBarSection.module.scss';

interface IProgressBarSectionProps {}

const ProgressBarSection: FC<IProgressBarSectionProps> = ({}) => {
	return <Section className={styles.ProgressBarSection}></Section>;
};

export default ProgressBarSection;
