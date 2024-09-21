import styles from './ContactSection.module.scss';
import FeedbackForm from './FeedbackForm/FeedbackForm';

const ContactSection = () => {
	return (
		<div className={styles.contactSection}>
			<div className={styles.innerBox}>
				<div className={styles.contactBox}>
					<h2 className={styles.heading}>Свяжитесь с нами</h2>
					<p className={styles.description}>
						Оставьте заявку через сайт или свяжитесь с нами в
						мессенджере:
					</p>
					<p className={styles.email}>pmkrazvitie@yandex.ru</p>
					<p className={styles.phone}>+7 (993) 615 77-47</p>
					<div className={styles.links}>
						<a
							className={styles.outLink}
							href="https://wa.me/message/HSJOUB5NAG3FD1"
						>
							<img
								src={`${
									import.meta.env.VITE_PATH_TO_PORTFOLIO
								}waBwIcon.svg`}
								height="30px"
								alt=""
							/>
						</a>
						<a
							className={styles.outLink}
							href="https://t.me/arsenykrym"
						>
							<img
								src={`${
									import.meta.env.VITE_PATH_TO_PORTFOLIO
								}tgBwIcon.svg`}
								height="30px"
								alt=""
							/>
						</a>
					</div>
				</div>
				<div className={styles.feedbackForm}>
					<p className={styles.feedbackFormHeading}>
						Мы свяжемся с вами в ближайшее время!
					</p>
					<FeedbackForm />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
