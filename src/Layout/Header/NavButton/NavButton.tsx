import { FC } from 'react';
import styles from './NavButton.module.scss';
import { Link } from 'react-router-dom';

interface INavButtonProps {
	children: React.ReactNode;
	link: string;
}

const NavButton: FC<INavButtonProps> = ({ children, link }) => {
	return (
		<a href={link} className={styles.navButton}>
			{children}
		</a>
	);
};

export default NavButton;
