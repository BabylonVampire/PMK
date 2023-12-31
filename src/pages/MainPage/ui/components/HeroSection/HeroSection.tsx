import { FC } from 'react';
import styles from './HeroSection.module.scss';
import { Carousel } from 'antd';

interface IHeroSectionProps {}

const contentStyle_1: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_1.jpg)`,
};
const contentStyle_2: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_2.jpg)`,
};
const contentStyle_3: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_3.jpg)`,
};
const contentStyle_4: React.CSSProperties = {
	height: '60vh',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_4.jpeg)`,
};

const HeroSection: FC<IHeroSectionProps> = ({}) => {
	return (
		<section className={`${styles.heroSection} heroSection`}>
			<Carousel autoplay>
				<div>
					<div style={contentStyle_1} className={styles.slide} />
				</div>
				<div>
					<div style={contentStyle_2} className={styles.slide} />
				</div>
				<div>
					<div style={contentStyle_3} className={styles.slide} />
				</div>
				<div>
					<div style={contentStyle_4} className={styles.slide} />
				</div>
			</Carousel>
		</section>
	);
};

export default HeroSection;
