import { blocks, members, reviews } from '@/db';
import { FC, useEffect } from 'react';
import CompanyMembersSection from './components/CompanyMembersSection/CompanyMembersSection';
import animationStart from '../utils/animationStart';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import ServiceBlocksSection from './components/ServiceBlocksSection/ServiceBlocksSection';

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
				heading="Наши сотрудники"
			/>
			<ServiceBlocksSection blocks={blocks} />
			<ReviewsSection reviews={reviews} />
		</main>
	);
};

export default MainPage;
