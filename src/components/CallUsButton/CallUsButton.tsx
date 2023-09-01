import { FC } from 'react';
import styles from './CallUsButton.module.scss';

interface ICallUsButtonProps {}

const CallUsButton: FC<ICallUsButtonProps> = ({}) => {
	return <button className={styles.callUsButton}>Сотрудничать</button>;
};

export default CallUsButton;
