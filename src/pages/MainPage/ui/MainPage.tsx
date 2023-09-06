import { FC, useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import CooperationSchemeSection from './components/CooperationSchemeSection/CooperationSchemeSection';
import MainFavorsCarousel from './components/MainFavorsCarousel/MainFavorsCarousel';
import { cards, benefits, cooperationTabs } from '@/db';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import animationStart from '../utils/animationStart';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [angle, setAngle] = useState<number>(0);
	useEffect(() => {
		const handleResize = () => {
			setWidth(document.body.scrollWidth);
			setHeight(document.body.scrollHeight);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		let newAngle = 360 - Math.round(Math.atan(height / width) * 57.3);
		setAngle(newAngle);
		console.log(newAngle, width, height);
	}, [width, height]);
	useEffect(() => {
		animationStart();
	}, []);

	return (
		<main
			className={styles.mainPage}
			style={{
				background: `linear-gradient(${angle}deg, rgba(23,29,61,1) 50%, rgba(0,0,0,0.7) 50%, rgba(23,29,61,0) 51%)`,
			}}
		>
			<div className={styles.background} />
			<HeroSection />
			<AboutSection />
			<MainFavorsCarousel cards={cards} />
			<BenefitsSection benefits={benefits} />
			<CooperationSchemeSection cooperationTabs={cooperationTabs} />
		</main>
	);
};

export default MainPage;
