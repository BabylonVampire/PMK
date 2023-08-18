import { FC } from 'react';
import styles from './AboutPage.module.scss';

interface IAboutPageProps {}

const AboutPage: FC<IAboutPageProps> = () => {
	return <main className={styles.aboutPage}></main>;
};

export default AboutPage;
