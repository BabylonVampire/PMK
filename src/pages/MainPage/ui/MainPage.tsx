import { FC } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import CooperationSchemeSection from './components/CooperationSchemeSection/CooperationSchemeSection';
import MainFavorsCarousel from './components/MainFavorsCarousel/MainFavorsCarousel';
import { cards } from '@/db';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<MainFavorsCarousel cards={cards} />
			<CooperationSchemeSection />
		</main>
	);
};

export default MainPage;
