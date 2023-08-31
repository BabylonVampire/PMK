import { FC, PropsWithChildren, memo } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FloatButton from './FloatButton/FloatButton';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	return (
		<div className="layout">
			<Header />
			{children}
			<FloatButton />
			<Footer />
		</div>
	);
});

export default Layout;
