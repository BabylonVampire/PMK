import { FC } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
