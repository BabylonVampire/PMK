import styles from './HeroSection.module.scss';
import { Carousel } from 'antd';

const contentStyle_1: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(http://gafurov-prod-test.ru/assets/slide_1.jpg)`,
};
const contentStyle_2: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(http://gafurov-prod-test.ru/assets/slide_2.jpg)`,
};

const HeroSection = () => {
	return (
		<section className={`${styles.heroSection} heroSection`}>
			<Carousel autoplay>
				<div>
					<div style={contentStyle_1} className={styles.slide} />
				</div>
				<div>
					<div style={contentStyle_2} className={styles.slide} />
				</div>
			</Carousel>
		</section>
	);
};

export default HeroSection;
