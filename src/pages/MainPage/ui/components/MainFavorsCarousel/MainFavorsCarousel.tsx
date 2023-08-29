import { FC } from 'react'
import styles from './MainFavorsCarousel.module.scss'
import { ICard } from '@/types'
import Card from './Card/Card'
 
interface IMainFavorsCarouselProps {
	cards: ICard[]
}
 
const MainFavorsCarousel: FC<IMainFavorsCarouselProps> = ({cards}) => {
	return (
		<div className={styles.FavorsCarouselWrapper}>
			{cards.map(card => {
				return (
					<Card card={card}/>
				)
			})}
		</div>
	)
}
 
export default MainFavorsCarousel