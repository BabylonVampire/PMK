import { blocks, members, reviews } from '@/db';
import { FC, useEffect } from 'react';
import animationStart from '../utils/animationStart';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import CooperationSchemeSection from './components/CooperationSchemeSection/CooperationSchemeSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	useEffect(() => {
		animationStart();
	}, []);

	return (
		<main className={styles.mainPage} id="backGround">
			<HeroSection />
			<AboutSection />
			<CooperationSchemeSection />
		</main>
	);
};

export default MainPage;
