import { FC } from 'react';
import styles from './CompanyMembersPage.module.scss';
import { members } from '@/db';
import Member from './components/Member/Member';

interface ICompanyMembersPageProps {}

const CompanyMembersPage: FC<ICompanyMembersPageProps> = () => {
	return (
		<main className={styles.CompanyMembersPageWrapper}>
			{members.map((member) => {
				return <Member member={member} />;
			})}
		</main>
	);
};

export default CompanyMembersPage;
