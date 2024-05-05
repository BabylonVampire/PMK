import Section from '@/components/Section/Section';
import emailjs from '@emailjs/browser';
import { Input } from 'antd';
import { useState } from 'react';
import styles from './FeedBack.module.scss';

const checkPhone = (phone: string) => {
	return /^\+?(\d[\d\-\\+\\(\\) ]{5,}\d$)/.test(phone);
};

const { TextArea } = Input;

const FeedBack = () => {
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const YOUR_SERVICE_ID = 'service_q70p2vb';
	const YOUR_TEMPLATE_ID = 'template_38qccbo';
	const YOUR_PUBLIC_KEY = 'Uj0KTkPXkDekWxNX1';
	const PARAMS = {
		user: `${name}`,
		phone: `${phone}`,
		message: `${message}`,
	};

	const sendEmail = () => {
		if (!name || !phone) {
			return;
		}

		if (!checkPhone(phone)) {
			return;
		}
		// if (!checkEmail(email)) {

		// 	return;
		// }
		else {
			emailjs.send(
				YOUR_SERVICE_ID,
				YOUR_TEMPLATE_ID,
				PARAMS,
				YOUR_PUBLIC_KEY
			);
		}
	};
	return (
		<Section className={styles.FeedBack}>
			<div className={styles.innerBox}>
				<div className={styles.nameAndPhone}>
					<div className={styles.inputLabel}>Имя</div>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className={styles.inputLabel}>Телефон</div>
					<Input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className={styles.messageBox}>
					<div className={styles.inputLabel}>Комментарий</div>
					<TextArea
						rows={4}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
			</div>
			<button className={styles.sendButton} onClick={sendEmail}>
				Отправить
			</button>
		</Section>
	);
};

export default FeedBack;
