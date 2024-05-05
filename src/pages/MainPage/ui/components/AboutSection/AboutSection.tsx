import Divider from '@/components/Divider/Divider';
import Section from '@/components/Section/Section';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
	return (
		<Section
			className={`${styles.aboutSection} aboutSection`}
			style={{ paddingTop: '0' }}
		>
			<div className={styles.innerContainer}>
				<div className={`${styles.pictureBox} aboutSectionPic`}>
					<div className={styles.picture}></div>
				</div>
				<div className={styles.textBox}>
					<div className={styles.heading}>
						Приятно познакомиться!
						<br />
						Мы - ПМК РАЗВИТИЕ
					</div>
					<Divider />
					<div className={styles.description}>
						Проектно-монтажная компания «Развитие» - команда
						инженеров, готовых оказать комплексную помощь при вводе
						объекта в эксплуатацию. За нашей спиной огромный опыт
						взаимодействия с сетевыми, ресурсоснабжающими,
						эксплуатирующими и подобными организациями. Именно этим
						опытом мы готовы поделиться с нашими клиентами, чтобы
						помочь решить вам абсолютно любой вопрос. На сегодняшний
						день компания выполняет разработку архитектурных и
						инженерных проектов, монтаж инженерных сетей по проекту,
						занимается согласованиями проектной документации в
						соответствующих инстанциях, оказывает комплекс услуг по
						получению и выполнению технических условий.
					</div>
				</div>
			</div>
		</Section>
	);
};

export default AboutSection;
