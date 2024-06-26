import { FC, useEffect, useRef, useState } from 'react';
import styles from './MainFavorsCarousel.module.scss';
import { ICard } from '@/types';
import Card from './Card/Card';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './MainFavorsCarousel.module.scss';
import Section from '@/components/Section/Section';

interface IMainFavorsCarouselProps {
	cards: ICard[];
}

const MainFavorsCarousel: FC<IMainFavorsCarouselProps> = ({ cards }) => {
	const [index, setIndex] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);
	const [count, setCount] = useState(1);
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (width < 1000) {
			setCount(1);
		} else if (width < 1400) {
			setCount(2);
		} else {
			setCount(3);
		}
	}, [width]);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.style.transition =
				'transform 0.25s ease-in-out';
			carouselRef.current.style.transform = `translateX(${
				(cards.length / 2 +
					(count % 2 === 0 ? 0 : 0.5) -
					Math.round(count / 2)) *
					320 -
				index * 320
			}px)`;
		}
	}, [index, count, cards.length]);

	const handlePrev = () => {
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(cards.length - count);
		}
	};

	const handleNext = () => {
		if (index < cards.length - count) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};

	return (
		<Section
			className={`${styles.carouselBox} carouselBox`}
			heading="Наши услуги"
		>
			<AiOutlineArrowLeft
				onClick={handlePrev}
				className={styles.button}
			/>
			<div className={styles.carousel}>
				<div className={styles.cards} ref={carouselRef}>
					{cards.map((card) => (
						<Card card={card} key={`card${cards.indexOf(card)}`} />
					))}
				</div>
				<div className={styles.buttonBox}></div>
			</div>
			<AiOutlineArrowRight
				onClick={handleNext}
				className={styles.button}
			/>
		</Section>
	);
};

export default MainFavorsCarousel;
