import { FC } from 'react';
import styles from './CompanyMembersSection.module.scss';
import MemberCard from './MemberCard/MemberCard';
import { Col, Row } from 'antd';

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
			{/* <div className={styles.membersBox}> */}
			<Row className={styles.membersBox}>
				{members.map((member) => {
					return (
						<Col span={8}>
							<MemberCard member={member} />
						</Col>
					);
				})}
			</Row>
			{/* </div> */}
		</section>
	);
};

export default CompanyMembersSection;
