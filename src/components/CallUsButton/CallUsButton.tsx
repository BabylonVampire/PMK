import styles from './CallUsButton.module.scss';
import { useNavigate } from 'react-router-dom';

const CallUsButton = () => {
	const nav = useNavigate();

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
