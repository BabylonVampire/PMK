import { favors, cards } from '@/db';
// import { PiMapPinFill } from 'react-icons/pi';
import styles from './FavorPage.module.scss';
import AboutFavorsSection from './components/AboutFavorsSection/AboutFavorsSection';
import FavorCards from './components/FavorCards/FavorCards';
import FavorList from './components/FavorList/FavorList';
// import ProgressBarSection from './components/ProgressBarSection/ProgressBarSection';
// import ProgressBarSection from './components/ProgressBarSection/ProgressBarSection';

const FavorPage = () => {
	const favorCards = cards.map((card) => ({
		title: card.title,
		text: card.text,
		back: card?.back,
	}));
	return (
		<main className={styles.FavorPageWrapper}>
			<AboutFavorsSection
				text="Мы предоставляем лицензированные услуги на объектах строительства различной сложности и назначения в Москве и Московской области, умеем решать нестандартные вопросы и всегда стремимся к высшему качеству оказания услуг на рынке."
				list={[]}
			/>
			<FavorCards favorCards={favorCards} />
			{/* <ProgressBarSection
				progressBarSteps={cooperationTabs.map((tab) => ({
					stepText: tab.tabHeading,
					text: tab.text,
					icon: tab.icon,
				}))}
			/> */}
			<FavorList favors={favors} />
		</main>
	);
};

export default FavorPage;
