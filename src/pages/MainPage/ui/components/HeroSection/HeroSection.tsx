import { FC } from 'react';
import styles from './HeroSection.module.scss';
import { Carousel } from 'antd';
import Section from '@/components/Section/Section';

interface IHeroSectionProps {}

const contentStyle_1: React.CSSProperties = {
	height: 'calc(var(--index) * 25)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_1.jpg)`,
};
const contentStyle_2: React.CSSProperties = {
	height: 'calc(var(--index) * 25)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_2.jpg)`,
};
const contentStyle_3: React.CSSProperties = {
	height: 'calc(var(--index) * 25)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_3.jpg)`,
};
const contentStyle_4: React.CSSProperties = {
	height: 'calc(var(--index) * 25)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundImage: `url(/src/assets/images/slide_4.jpeg)`,
};

const HeroSection: FC<IHeroSectionProps> = ({}) => {
	return (
		<Section className={styles.heroSection}>
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
		</Section>
	);
};

export default HeroSection;
