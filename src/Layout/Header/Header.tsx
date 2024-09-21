import { FC, memo, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import NavButton from './NavButton/NavButton';
import Logo from './Logo/Logo';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { headerLinks } from '@/db';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = memo(() => {
	const nav = useNavigate();
	const [width, setWidth] = useState(window.innerWidth);
	const [burger, setBurger] = useState<boolean>(false);

	useEffect(() => {
		if (width <= 1000) {
			setBurger(true);
		} else {
			setBurger(false);
		}
	}, [width]);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={styles.header}>
			{burger ? (
				<div className={styles.burgerWrapper}>
					<BurgerMenu />
				</div>
			) : (
				<nav className={styles.bigNav}>
					<div className={styles.mainNavigation}>
						<Logo hover onClick={() => nav('/')} />
						{headerLinks.map((el) => {
							return (
								<NavButton
									link={el.link}
									key={`navButton${headerLinks.indexOf(el)}`}
								>
									{el.text}
								</NavButton>
							);
						})}
					</div>
					<div className={styles.links}>
						<a
							className={styles.outLink}
							href="https://wa.me/message/HSJOUB5NAG3FD1"
						>
							<img
								src={`${
									import.meta.env.VITE_PATH_TO_PORTFOLIO
								}waBwIcon.svg`}
								height="30px"
								alt=""
							/>
						</a>
						<a
							className={styles.outLink}
							href="https://t.me/arsenykrym"
						>
							<img
								src={`${
									import.meta.env.VITE_PATH_TO_PORTFOLIO
								}tgBwIcon.svg`}
								height="30px"
								alt=""
							/>
						</a>
					</div>
				</nav>
			)}
		</header>
	);
});

export default Header;
