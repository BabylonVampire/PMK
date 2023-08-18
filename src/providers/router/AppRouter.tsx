import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import styles from './AppRouter.module.scss';

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div className={styles.Loader}>Loading...</div>}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/AboutUs" element={<AboutPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
