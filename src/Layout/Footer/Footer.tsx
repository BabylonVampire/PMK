import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { v4 } from 'uuid';
import { headerLinks } from '@/db';
import { phones, emails } from '@/db/contactItems';
import { Link } from 'react-router-dom';

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<div className={styles.colHeading}>Навигация</div>
						<div className={styles.divider} />
						{headerLinks.map((link) => {
							return (
								<li className={styles.option} key={v4()}>
									<Link
										to={link.link}
										className={styles.link}
									>
										{link.text}
									</Link>
								</li>
							);
						})}
					</ul>

					<ul className={styles.contactsCol}>
						<div className={styles.colHeading}>Контакты</div>
						<div className={styles.divider} />
						{phones.data.map((phone) => {
							return (
								<li className={styles.contact} key={v4()}>
									{phone}
								</li>
							);
						})}
						{emails.data.map((email) => {
							return (
								<li className={styles.contact} key={v4()}>
									{email}
								</li>
							);
						})}
					</ul>
					<ul className={styles.linksCol}>
						<div className={styles.colHeading}>Наши соцсети</div>
						<div className={styles.divider} />
						<div className={styles.links}>
							<li className={styles.outLink}>
								<FaTelegram />
							</li>
							<li className={styles.outLink}>
								<FaYoutube />
							</li>
							<li className={styles.outLink}>
								<FaInstagram />
							</li>
						</div>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					© {date} Все права защищены. Сделано компанией Gafurov
					digital Production
				</p>
			</div>
		</footer>
	);
});

export default Footer;
