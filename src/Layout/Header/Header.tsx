import { FC, memo } from 'react';
import styles from './Header.module.scss';
import NavButton from './NavButton/NavButton';
import Logo from './Logo/Logo';
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = memo(() => {
	const nav = useNavigate()

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Logo hover onClick={() => nav('/')}/>
				<NavButton link="/">Главная</NavButton>
				<NavButton link="/favor">Услуги</NavButton>
				<NavButton link="/about">О нас</NavButton>
				<NavButton link="/articles">Статьи</NavButton>
				<NavButton link="/partners">Партнерам</NavButton>
				<NavButton link="/contacts">Контакты</NavButton>
			</nav>
			<div className={styles.profileContainer}></div>
		</header>
	);
});

export default Header;
