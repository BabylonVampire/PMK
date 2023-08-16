import { FC } from 'react';
import styles from './CompanyMembersSection.module.scss';
import MemberCard from './MemberCard/MemberCard';

interface ICompanyMembersSectionProps {
	members: {
		photo: string;
		name: string;
		post: string;
		description: string;
	}[];
}

const CompanyMembersSection: FC<ICompanyMembersSectionProps> = ({
	members,
}) => {
	return (
		<section className={styles.companyMembers}>
			<div className={styles.membersBox}>
				{members.map((member) => {
					return <MemberCard member={member} />;
				})}
			</div>
		</section>
	);
};

export default CompanyMembersSection;
