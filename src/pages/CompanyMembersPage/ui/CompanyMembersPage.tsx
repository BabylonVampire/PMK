import { FC } from 'react'
import styles from './CompanyMembersPage.module.scss'
import { members } from '@/db'
import CompanyMembersSection from '@/components/CompanyMembersSection/CompanyMembersSection'
 
interface ICompanyMembersPageProps {}
 
const CompanyMembersPage: FC<ICompanyMembersPageProps> = () => {
	return (
		<main className={styles.CompanyMembersPageWrapper}>
			<CompanyMembersSection members={members} heading='Наши сотрудники'/>
		</main>
	)
}
 
export default CompanyMembersPage