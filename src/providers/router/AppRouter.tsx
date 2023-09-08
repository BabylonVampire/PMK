import { ArticlePage } from '@/pages/ArticlePage';
import { ContactsPage } from '@/pages/ContactPage';
import { FavorPage } from '@/pages/FavorPage';
import { LoadingOutlined } from '@ant-design/icons';
import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './AppRouter.module.scss';
import PartnersPage from '@/pages/PartnersPage/PartnersPage';

const AppRouter: FC = () => {
	return (
		<Suspense
			fallback={
				<div className={styles.Loader}>
					<LoadingOutlined />
				</div>
			}
		>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/favor" element={<FavorPage />} />
				<Route path="/articles" element={<ArticlePage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route path="/partners" element={<PartnersPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
