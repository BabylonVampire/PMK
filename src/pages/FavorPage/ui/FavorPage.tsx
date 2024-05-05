import { favorCards, favors } from '@/db';
import { PiMapPinFill } from 'react-icons/pi';
import styles from './FavorPage.module.scss';
import AboutFavorsSection from './components/AboutFavorsSection/AboutFavorsSection';
import FavorCards from './components/FavorCards/FavorCards';
import FavorList from './components/FavorList/FavorList';
import ProgressBarSection from './components/ProgressBarSection/ProgressBarSection';

const FavorPage = () => {
	return (
		<main className={styles.FavorPageWrapper}>
			<AboutFavorsSection
				text="Мы предоставляем лицензированные услуги на объектах строительства различной сложности и назначения в Москве и Московской области, умеем решать нестандартные вопросы и всегда стремимся к высшему качеству оказания услуг на рынке."
				list={[]}
			/>
			<FavorCards favorCards={favorCards} />
			<ProgressBarSection
				progressBarSteps={[
					{ stepText: 'asd', text: '0', icon: <PiMapPinFill /> },
					{ stepText: 'asd', text: '1', icon: <PiMapPinFill /> },
					{ stepText: 'asd', text: '2', icon: <PiMapPinFill /> },
					{ stepText: 'asd', text: '3', icon: <PiMapPinFill /> },
					{ stepText: 'asd', text: '4', icon: <PiMapPinFill /> },
					{ stepText: 'asd', text: '5', icon: <PiMapPinFill /> },
				]}
			/>
			<FavorList favors={favors} />
		</main>
	);
};

export default FavorPage;
