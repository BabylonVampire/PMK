import { FC } from 'react';
import styles from './FloatButton.module.scss';
import { PhoneOutlined } from '@ant-design/icons';

interface IFloatButtonProps {}

const FloatButton: FC<IFloatButtonProps> = ({}) => {
	return (
		<div className={styles.floatButtonContainer}>
			<button className={styles.floatButton}>
				<PhoneOutlined />
			</button>
		</div>
	);
};

export default FloatButton;
