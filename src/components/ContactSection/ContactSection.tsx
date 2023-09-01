import { FC } from 'react';
import styles from './ContactSection.module.scss';
import Section from '../Section/Section';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Message, SMTPClient } from 'emailjs'; 

interface IContactSectionProps {
	page: 'contacts' | 'partners' | 'about';
}

const ContactSection: FC<IContactSectionProps> = ({ page }) => {
	const client = new SMTPClient({
		user: 'user',
		password: 'password',
		host: 'smtp.your-email.com',
		ssl: true,
	});
	
	const onFinish = (values: Message) => {
		console.log('Success:', values);
		client.send(values, () => {
			console.log('sent');
		});
	};

	return (
		<Section className={styles.ContactSectionWrapper}>
			<Form
				name="feedback"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				autoComplete="off"
				onFinish={onFinish}
			>
				<Form.Item
					label="Имя"
					name="name"
					rules={[
						{
							required: true,
							message: 'Пожалуйста, введите ваше имя!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Телефон"
					name="phone"
					rules={[
						{
							required: true,
							message: 'Пожалуйста, введите ваш номер телефона!',
						},
						() => ({
							validator(_, value: string) {
								if (/^\+?(\d[\d\-\\+\\(\\) ]{5,}\d$)/.test(value)) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error(
										'Пожалуйста, введите действительный номер телефона!'
									)
								);
							},
						}),
					]}
				>
					<Input/>
				</Form.Item>
				<Form.Item
					label="Комментарий"
					name="comment"
					rules={[
						{
							required: false,
						},
					]}
				>
					<TextArea rows={4} />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</Section>
	);
};

export default ContactSection;
