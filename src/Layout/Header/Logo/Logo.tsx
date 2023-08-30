import { FC } from 'react';
import styles from './Logo.module.scss';

interface ILogoProps {
	onClick?: () => void
	hover?: boolean
}

const Logo: FC<ILogoProps> = ({onClick, hover}) => {
	return (
		<div className={`${styles.LogoWrapper} ${hover && styles.hoveredLogo}`} onClick={onClick}>
			<div className={styles.logo}></div>
			<div className={styles.titleContainer}>
				<p className={styles.heading}>ПМК РАЗВИТИЕ</p>
				<p className={styles.description}>
					ПРОЕКТНО - МОНТАЖНАЯ КОМПАНИЯ
				</p>
			</div>
		</div>
	);
};

export default Logo;
