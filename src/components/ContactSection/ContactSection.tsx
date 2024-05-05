import { FC, useState } from 'react';
import styles from './ContactSection.module.scss';
import Section from '../Section/Section';
import { Input } from 'antd';
import emailjs from '@emailjs/browser';

interface IContactSectionProps {
	page: 'contacts' | 'partners' | 'about';
}

const checkPhone = (phone: string) => {
	return /^\+?(\d[\d\-\\+\\(\\) ]{5,}\d$)/.test(phone);
};

const { TextArea } = Input;

const ContactSection: FC<IContactSectionProps> = ({ page }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const YOUR_SERVICE_ID = 'service_q70p2vb';
	const YOUR_TEMPLATE_ID = 'template_38qccbo';
	const YOUR_PUBLIC_KEY = 'Uj0KTkPXkDekWxNX1';
	const PARAMS = {
		user: `${name}`,
		phone: `${phone}`,
		message: `${message}`,
		email: `${email}`,
		page: page,
	};

	const sendEmail = () => {
		if (!name || !phone || !email) {
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
		<Section
			className={styles.ContactSectionWrapper}
			sectionClassName={styles.contactsSection}
		>
			<div className={styles.innerBox}>
				<div className={styles.inputForm}>
					<div className={styles.inputLabel}>Имя</div>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className={styles.phoneAndEmail}>
						<div className={styles.group}>
							<div className={styles.inputLabel}>Телефон</div>
							<Input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className={styles.group}>
							<div className={styles.inputLabel}>
								Электронная почта
							</div>
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.inputLabel}>Комментарий</div>
					<TextArea
						rows={4}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className={styles.sendButton} onClick={sendEmail}>
						Отправить
					</button>
				</div>
			</div>
		</Section>
	);
};

export default ContactSection;
