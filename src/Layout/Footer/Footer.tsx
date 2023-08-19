import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<Link to="/" className={styles.link}>
							Главная
						</Link>

						<Link to="/AboutUs" className={styles.link}>
							О нас
						</Link>
						<Link to="/CompanyMembers" className={styles.link}>
							Лица компании
						</Link>
						<Link to="/CompanyAdvantages" className={styles.link}>
							Наши преимущества
						</Link>
					</ul>
					<ul className={styles.contactsCol}>
						
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					© {date} Все права защищены. Сделано компанией Gafurov
					Software Production
				</p>
			</div>
		</footer>
	);
});

export default Footer;
