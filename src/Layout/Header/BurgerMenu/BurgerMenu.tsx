import { FC, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { headerLinks } from '@/db';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import Logo from '../Logo/Logo';

interface IBurgerMenuProps {}

const BurgerMenu: FC<IBurgerMenuProps> = () => {
	const [open, setOpen] = useState<boolean>(false);

	const closeDrawer = () => {
		setOpen(false)
	}

	return (
		<>
			{open ? (
				<Drawer
					title={<Logo />}
					placement="left"
					width={window.innerWidth * 0.8}
					onClose={closeDrawer}
					open={open}
					extra={
						<nav className={styles.BurgerMenuWrapper}>
							{headerLinks.map((el) => {
								return <Link onClick={closeDrawer} to={el.link}>{el.text}</Link>;
							})}
						</nav>
					}
				></Drawer>
			) : (
				<MenuOutlined onClick={() => setOpen((prev) => !prev)} />
			)}
		</>
	);
};

export default BurgerMenu;
