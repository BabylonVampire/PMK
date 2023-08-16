import { FC, useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import CompanyMembersSection from './CompanyMembersSection/CompanyMembersSection';
import styles from './MainPage.module.scss';
import ServiceBlocksSection from './ServiceBlocksSection/ServiceBlocksSection';
import animationStart from './utils/animationStart';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
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
		</main>
	);
};

export default MainPage;
