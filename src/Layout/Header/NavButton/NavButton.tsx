import { FC, memo } from 'react';
import styles from './NavButton.module.scss';
import { Link } from 'react-router-dom';

interface INavButtonProps {
	children: React.ReactNode;
	link: string;
}

const NavButton: FC<INavButtonProps> = memo(({ children, link }) => {
	return (
		<Link to={link} className={styles.navButton}>
			{children}
		</Link>
	);
});

export default NavButton;
