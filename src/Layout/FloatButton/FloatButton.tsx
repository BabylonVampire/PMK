import { FC } from 'react';
import styles from './FloatButton.module.scss';
import { AiOutlinePhone } from 'react-icons/ai';

const FloatButton: FC = () => {
	return (
		<div className={styles.floatButtonContainer}>
			<a href="tel:+79859117747" className={styles.floatButton}>
				<AiOutlinePhone />
			</a>
		</div>
	);
};

export default FloatButton;
