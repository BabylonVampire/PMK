import { FC, useEffect, useState } from 'react';
import styles from './MainFavorsCarousel.module.scss';
import { ICard } from '@/types';
import Card from './Card/Card';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface IMainFavorsCarouselProps {
	cards: ICard[];
}

const MainFavorsCarousel: FC<IMainFavorsCarouselProps> = ({ cards }) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [visibleCards, setVisibleCards] = useState<number>(3);

	const getVisibleCards = (windowWidth: number) => {
		if (windowWidth >= 1600) {
			return 5;
		}
		if (windowWidth >= 1200 && windowWidth < 1400) {
			return 4;
		}
		if (windowWidth >= 1000 && windowWidth < 1200) {
			return 3;
		}
		if (windowWidth >= 768 && windowWidth < 1000) {
			return 2;
		}
		if (windowWidth < 768) {
			return 1;
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			const newVisibleCards = getVisibleCards(windowWidth);
			if (newVisibleCards) {
				setVisibleCards(newVisibleCards);
			}
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const nextSlide = () => {
		if (currentSlide === cards.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(cards.length - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};
	return (
		<section className={styles.FavorsCarouselWrapper}>
			<ArrowLeftOutlined className={styles.arrow} onClick={prevSlide} />
			<div className={styles.cardsContainer}>
				{/* {cards.map(card => {
				return (
					<Card card={card}/>
				)
			})} */}
				{Array.from({ length: visibleCards }, (_, i) => (
					<Card
						card={
							cards[
								(currentSlide -
									Math.floor(visibleCards / 2) +
									i +
									cards.length) %
									cards.length
							]
						}
					/>
				))}
			</div>
			<ArrowRightOutlined className={styles.arrow} onClick={nextSlide} />
		</section>
	);
};

export default MainFavorsCarousel;
