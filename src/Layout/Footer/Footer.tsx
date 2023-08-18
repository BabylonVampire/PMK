import { FC, memo } from 'react';
import styles from './Footer.module.scss';

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
	return (
		<footer className={styles.footer}>
			<div className={styles.mainBox}>
				<div className={styles.contacts}></div>
				<div className={styles.options}></div>
			</div>
			<div className={styles.copyright}>
				<p>asd</p>
			</div>
		</footer>
	);
});

export default Footer;
