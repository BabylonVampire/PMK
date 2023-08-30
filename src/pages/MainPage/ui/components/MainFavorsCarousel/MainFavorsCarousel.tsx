import { FC } from 'react'
import styles from './MainFavorsCarousel.module.scss'
import { ICard } from '@/types'
import Card from './Card/Card'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
 
interface IMainFavorsCarouselProps {
	cards: ICard[]
}
 
const MainFavorsCarousel: FC<IMainFavorsCarouselProps> = ({cards}) => {
	return (
		<section className={styles.FavorsCarouselWrapper}>
			<ArrowLeftOutlined className={styles.arrow}/>
			<div className={styles.cardsContainer}>
			{cards.map(card => {
				return (
					<Card card={card}/>
				)
			})}
			</div>
			<ArrowRightOutlined className={styles.arrow}/>
		</section>
	)
}
 
export default MainFavorsCarousel