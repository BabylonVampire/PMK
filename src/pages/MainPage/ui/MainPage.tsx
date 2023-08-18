import { FC, useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import CompanyMembersSection from './components/CompanyMembersSection/CompanyMembersSection';
import styles from './MainPage.module.scss';
import ServiceBlocksSection from './components/ServiceBlocksSection/ServiceBlocksSection';
import animationStart from '../utils/animationStart';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	useEffect(() => {
		animationStart();
	}, []);

	return (
		<main className={styles.mainPage} id="backGround">
			<HeroSection />
			<CompanyMembersSection
				members={[
					{
						name: 'Артем Абоба',
						post: 'trainy',
						description: 'asd',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						name: 'Артем Абоба',
						post: 'trainy',
						description: 'asd',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						name: 'Артем Абоба',
						post: 'trainy',
						description: 'asd',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
				]}
			/>
			<ServiceBlocksSection />
			<ReviewsSection
				reviews={[
					{
						post: 'trainy',
						name: 'Артем Абоба',
						text: 'asdaaaaaaaaaaaaaaaaa',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						post: 'trainy',
						name: 'Артем Абоба',
						text: 'asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						post: 'trainy',
						name: 'Артем Абоба',
						text: 'asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						post: 'trainy',
						name: 'Артем Абоба',
						text: 'asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
					{
						post: 'trainy',
						name: 'Артем Абоба',
						text: 'asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
						photo: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					},
				]}
			/>
		</main>
	);
};

export default MainPage;
