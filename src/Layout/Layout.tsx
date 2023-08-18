import { FC, memo } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = memo(({ children }) => {
	return (
		<div className="layout">
			<Header />
			{children}
			<Footer />
		</div>
	);
});

export default Layout;
