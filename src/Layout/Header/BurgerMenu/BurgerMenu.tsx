import { FC, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { headerLinks } from '@/db';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Logo from '../Logo/Logo';
import Divider from '@/components/Divider/Divider';

interface IBurgerMenuProps {}

const BurgerMenu: FC<IBurgerMenuProps> = () => {
	const [open, setOpen] = useState<boolean>(false);

	const closeDrawer = () => {
		setOpen(false);
	};

	return (
		<div className={styles.burgerMenu}>
			{open ? (
				<Drawer
					title={<Logo />}
					placement="left"
					width={window.innerWidth * 0.4}
					closable={false}
					onClose={closeDrawer}
					open={open}
					className={styles.burgerMenuBody}
				>
					<nav className={styles.BurgerMenuWrapper}>
						<Divider />
						{headerLinks.map((el) => {
							return (
								<Link onClick={closeDrawer} to={el.link}>
									{el.text}
								</Link>
							);
						})}
					</nav>
				</Drawer>
			) : (
				<MenuOutlined onClick={() => setOpen((prev) => !prev)} />
			)}
		</div>
	);
};

export default BurgerMenu;
