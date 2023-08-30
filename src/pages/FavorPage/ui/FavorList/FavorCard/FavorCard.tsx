import { FC } from 'react'
import styles from './FavorCard.module.scss'
import { IFavor } from '@/types'
 
interface IFavorCardProps {
	favor: IFavor
}
 
const FavorCard: FC<IFavorCardProps> = ({favor}) => {
	return (
		<div className={styles.FavorCardWrapper}>
			<h4 className={styles.title}>{favor.name}</h4>
			<p className={styles.price}>{favor.price}</p>
			<p className={styles.time}>{favor.time}</p>
			<ul className={styles.descriptionList}>
				{favor.description.map(item => {
					return(
						<li className={styles.descriptionItem}>{item.text}</li>
					)
				})}
			</ul>
			<button className={styles.infoBtn}>Больше информации</button>
		</div>
	)
}
 
export default FavorCard