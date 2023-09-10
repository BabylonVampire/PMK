import { FC, useEffect, useState } from 'react';
import styles from './FavorPage.module.scss';
import FavorList from './components/FavorList/FavorList';
import { favors } from '@/db';
import { favorCards } from '@/db';
import AboutFavorsSection from './components/AboutFavorsSection/AboutFavorsSection';
import FavorCards from './components/FavorCards/FavorCards';
import ProgressBarSection from './components/ProgressBarSection/ProgressBarSection';
import { PiMapPinFill } from 'react-icons/pi';

interface IFavorPageProps {}

const FavorPage: FC<IFavorPageProps> = () => {
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
		let newAngle = 180 - Math.round(Math.atan(height / width) * 57.3);
		setAngle(newAngle);
	}, [width, height]);
	return (
		<main
			className={styles.FavorPageWrapper}
			style={{
				background: `linear-gradient(${angle}deg, rgba(23,29,61,1) 50%, rgba(0,0,0,0.7) 50%, rgba(23,29,61,0) 51%)`,
			}}
		>
			<div className={styles.background} />
			<AboutFavorsSection
				text="asdasdasdasdasdasda asda sdas das dasda sdasdadaa asd asd as as asdadadasd ashjg asj hajsgdjhasgdjahsd hgdjas jahgsd jjhasdgaj ajhdgasjhdgasj ajshdgajhd ajshdgajhgdja jahgdj had asdgasd gasjhasa ahsjgaj asg"
				list={['asd', 'asdasd', 'asdad']}
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
