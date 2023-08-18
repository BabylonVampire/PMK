import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/AboutUs" element={<AboutPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
