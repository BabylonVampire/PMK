import { FC } from 'react'
import styles from './FavorList.module.scss'
import { IFavor } from '@/types'
import FavorCard from './FavorCard/FavorCard'
 
interface IFavorListProps {
	favors: IFavor[]
}
 
const FavorList: FC<IFavorListProps> = ({favors}) => {
	return (
		<section className={styles.FavorListWrapper}>
			{favors.map(favor => {
				return(
					<FavorCard favor={favor}/>
				)
			})}
		</section>
	)
}
 
export default FavorList