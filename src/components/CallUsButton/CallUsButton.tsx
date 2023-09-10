import { FC } from 'react';
import styles from './CallUsButton.module.scss';
import { useNavigate } from 'react-router-dom';

interface ICallUsButtonProps {}

const CallUsButton: FC<ICallUsButtonProps> = ({}) => {
	let nav = useNavigate();
	return (
		<button
			className={styles.callUsButton}
			onClick={() => nav('/contacts')}
		>
			Сотрудничать
		</button>
	);
};

export default CallUsButton;
