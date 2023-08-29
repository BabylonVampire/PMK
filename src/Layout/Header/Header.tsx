import { FC, memo } from 'react';
import styles from './Header.module.scss';
import NavButton from './NavButton/NavButton';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = memo(() => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.title}>
					<div className={styles.logo}></div>
					<div className={styles.titleContainer}>
						<p className={styles.heading}>ПМК РАЗВИТИЕ</p>
						<p className={styles.description}>
							ПРОЕКТНО - МОНТАЖНАЯ КОМПАНИЯ
						</p>
					</div>
				</div>
				<NavButton link="/">Главная</NavButton>
				<NavButton link="/Services">Услуги</NavButton>
				<NavButton link="/AboutUs">О нас</NavButton>
				<NavButton link="/Articles">Статьи</NavButton>
				<NavButton link="/Partners">Партнерам</NavButton>
				<NavButton link="/Contscts">Контакты</NavButton>
			</nav>
			<div className={styles.profileContainer}></div>
		</header>
	);
});

export default Header;
