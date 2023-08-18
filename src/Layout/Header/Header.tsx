import { FC, memo } from 'react';
import styles from './Header.module.scss';
import NavButton from './NavButton/NavButton';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = memo(() => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavButton link="/">Главная</NavButton>
				<NavButton link="/AboutUs">О нас</NavButton>
				<NavButton link="/CompanyMembers">Лица компании</NavButton>
				<NavButton link="/CompanyAdvantages">
					Наши преимущества
				</NavButton>
				<NavButton link="/Reviews">Отзывы</NavButton>
				<NavButton link="/Contscts">Контакты</NavButton>
			</nav>
			<div className={styles.profileContainer}></div>
		</header>
	);
});

export default Header;
