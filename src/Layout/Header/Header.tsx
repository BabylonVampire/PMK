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
		if (width < 768) {
			setBurger(true);
		}
		else {
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
				<BurgerMenu />
			) : (
				<nav className={styles.bigNav}>
					<Logo hover onClick={() => nav('/')} />
					{headerLinks.map((el) => {
						return <NavButton link={el.link}>{el.text}</NavButton>;
					})}
				</nav>
			)}
		</header>
	);
});

export default Header;
