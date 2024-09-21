import CallUsButton from '@/components/CallUsButton/CallUsButton';
import styles from './HeroSection.module.scss';
import { Carousel } from 'antd';

const contentStyle_1: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(${
		import.meta.env.VITE_PATH_TO_PORTFOLIO
	}/slide_1.jpg)`,
};
const contentStyle_2: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(${
		import.meta.env.VITE_PATH_TO_PORTFOLIO
	}/slide_3.jpg)`,
};
const contentStyle_3: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(${
		import.meta.env.VITE_PATH_TO_PORTFOLIO
	}/slide_4.jpg)`,
};

const HeroSection = () => {
	return (
		<section className={`${styles.heroSection} heroSection`}>
			<Carousel autoplay>
				<div className={styles.slideWrapper}>
					<div className={styles.frontBox}>
						<div className={styles.contentBox}>
							<p className={styles.title}>
								Подключим электричество под ключ
							</p>
							<div className={styles.description}>
								Возьмем на себя весь процесс по подключению
								электроэнергии на ваш объект с нуля. Работаем со
								всеми сетевыми организациями и мощностями любой
								величины.
							</div>
							<CallUsButton />
						</div>
					</div>
					<div style={contentStyle_1} className={styles.slide} />
				</div>
				<div className={styles.slideWrapper}>
					<div className={styles.frontBox}>
						<div className={styles.contentBox}>
							<p className={styles.title}>
								Проектирование инженерных систем
							</p>
							<div className={styles.description}>
								Проектируем наружные и внутренние сети:
								электроснабжение, водоснабжение и канализация,
								вентиляция и кондиционирование, отопление,
								слаботочные сети. Являемся членами СРО и имеем
								право на подготовку проектной документации в
								отношении объектов капитального строительства.
							</div>
							<CallUsButton />
						</div>
					</div>
					<div style={contentStyle_2} className={styles.slide} />
				</div>
				<div className={styles.slideWrapper}>
					<div className={styles.frontBox}>
						<div className={styles.contentBox}>
							<p className={styles.title}>
								Заключим прямой договор с АО «Мосэнергосбыт»
							</p>
							<div className={styles.description}>
								Поможем сэкономить деньги и время при заключении
								прямого договора с ресурсоснабжающей
								организацией. Всегда укладываемся в необходимые
								сроки и стоимость.
							</div>
							<CallUsButton />
						</div>
					</div>
					<div style={contentStyle_3} className={styles.slide} />
				</div>
			</Carousel>
		</section>
	);
};

export default HeroSection;
