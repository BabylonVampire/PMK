import { FC } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import CooperationSchemeSection from './components/CooperationSchemeSection/CooperationSchemeSection';
import MainFavorsCarousel from './components/MainFavorsCarousel/MainFavorsCarousel';
import { cards } from '@/db';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import { CheckOutlined } from '@ant-design/icons';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<MainFavorsCarousel cards={cards} />
			<BenefitsSection
				benefits={[
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
					{
						icon: <CheckOutlined />,
						text: 'asd asd asdasda asdasd asd asd asdasd asdad asdasda dasdasd',
					},
				]}
			/>
			<CooperationSchemeSection />
		</main>
	);
};

export default MainPage;
