import { benefits, cards, cooperationTabs } from '@/db';
import { FC, useEffect } from 'react';
import animationStart from '../utils/animationStart';
import styles from './MainPage.module.scss';
import AboutSection from './components/AboutSection/AboutSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import CooperationSchemeSection from './components/CooperationSchemeSection/CooperationSchemeSection';
import HeroSection from './components/HeroSection/HeroSection';
import MainFavorsCarousel from './components/MainFavorsCarousel/MainFavorsCarousel';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	useEffect(() => {
		animationStart();
	}, []);

	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<MainFavorsCarousel cards={cards} />
			<BenefitsSection benefits={benefits} />
			<CooperationSchemeSection cooperationTabs={cooperationTabs} />
		</main>
	);
};

export default MainPage;
