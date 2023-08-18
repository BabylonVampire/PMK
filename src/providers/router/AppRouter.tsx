import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<div>Main page</div>} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
