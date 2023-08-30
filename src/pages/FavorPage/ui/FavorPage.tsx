import { FC } from 'react'
import styles from './FavorPage.module.scss'
import FavorList from './FavorList/FavorList'
import { favors } from '@/db'
 
interface IFavorPageProps {}
 
const FavorPage: FC<IFavorPageProps> = () => {
	return (
		<main className={styles.FavorPageWrapper}>
			<FavorList favors={favors}/>
		</main>
	)
}
 
export default FavorPage