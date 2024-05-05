import { FC, PropsWithChildren, memo, useEffect, useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FloatButton from './FloatButton/FloatButton';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [angle, setAngle] = useState<number>(0);

	const handleResize = () => {
		setWidth(document.body.scrollWidth);
		setHeight(document.body.clientHeight);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		console.log(width, height);

		const newAngle = 180 - Math.round(Math.atan(height / width) * 57.3);
		setAngle(newAngle);
	}, [width, height]);

	return (
		<div
			className={styles.layout}
			style={{
				background: `linear-gradient(${angle}deg, rgba(23,29,61,1) 50%, rgba(0,0,0,0.7) 50%, rgba(23,29,61,0) 50.3%)`,
			}}
		>
			<div className={styles.background} />
			<Header />
			{children}
			<FloatButton />
			<Footer />
		</div>
	);
});

export default Layout;
