import { FC, useEffect, useState } from 'react';
import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {}

const NotFoundPage: FC<INotFoundPageProps> = ({}) => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [angle, setAngle] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			setWidth(document.body.scrollWidth);
			setHeight(document.body.scrollHeight);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let newAngle = 180 - Math.round(Math.atan(height / width) * 57.3);
		setAngle(newAngle);
	}, [width, height]);

	return (
		<main
			className={styles.NotFoundPageWrapper}
			style={{
				background: `linear-gradient(${angle}deg, rgba(23,29,61,1) 50%, rgba(0,0,0,0.7) 50%, rgba(23,29,61,0) 51%)`,
			}}
		>
			<div className={styles.background} />
			<div className={styles.innerBox}>
				<div className={styles.title}>
					404
					<br />
					Страница не найдена
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;
