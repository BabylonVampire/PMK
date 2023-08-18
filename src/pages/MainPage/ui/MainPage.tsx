import { FC, useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import CompanyMembersSection from './components/CompanyMembersSection/CompanyMembersSection';
import styles from './MainPage.module.scss';
import ServiceBlocksSection from './components/ServiceBlocksSection/ServiceBlocksSection';
import animationStart from '../utils/animationStart';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import { members, reviews } from '@/db';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	useEffect(() => {
		animationStart();
	}, []);

	return (
		<main className={styles.mainPage} id="backGround">
			<HeroSection />
			<CompanyMembersSection
				members={members}
			/>
			<ServiceBlocksSection />
			<ReviewsSection
				reviews={reviews}
			/>
		</main>
	);
};

export default MainPage;
