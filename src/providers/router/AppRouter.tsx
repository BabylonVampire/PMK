import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import styles from './AppRouter.module.scss';
import { FavorPage } from '@/pages/FavorPage';

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div className={styles.Loader}>Loading...</div>}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/favor" element={<FavorPage/>}></Route>
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
