import { FC } from 'react';
import styles from './FloatButton.module.scss';
import { PhoneOutlined } from '@ant-design/icons';

const FloatButton: FC = () => {
	return (
		<div className={styles.floatButtonContainer}>
			<a href='tel:+79260820975' className={styles.floatButton}>
				<PhoneOutlined />
			</a>
		</div>
	);
};

export default FloatButton;
