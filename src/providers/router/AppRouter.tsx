import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import styles from './AppRouter.module.scss';
import { CompanyMembersPage } from '@pages/CompanyMembersPage';

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div className={styles.Loader}>Loading...</div>}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/AboutUs" element={<AboutPage />} />
				<Route path="/CompanyMembers" element={<CompanyMembersPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
