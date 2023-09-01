import { FC } from 'react';
import styles from './FavorPage.module.scss';
import FavorList from './FavorList/FavorList';
import { favors } from '@/db';
import AboutFavorsSection from './AboutFavorsSection/AboutFavorsSection';

interface IFavorPageProps {}

const FavorPage: FC<IFavorPageProps> = () => {
	return (
		<main className={styles.FavorPageWrapper}>
			<AboutFavorsSection
				text="asdasdasdasdasdasda asda sdas das dasda sdasdadaa asd asd as as asdadadasd ashjg asj hajsgdjhasgdjahsd hgdjas jahgsd jjhasdgaj ajhdgasjhdgasj ajshdgajhd ajshdgajhgdja jahgdj had asdgasd gasjhasa ahsjgaj asg"
				list={['asd', 'asdasd', 'asdad']}
			/>
			<FavorList favors={favors} />
		</main>
	);
};

export default FavorPage;
