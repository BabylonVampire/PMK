import { FC } from 'react';
import styles from './CompanyMembersSection.module.scss';
import MemberCard from './MemberCard/MemberCard';
import { Col, Row } from 'antd';
import Section from '@/components/Section/Section';

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
		<Section className={styles.companyMembers} heading="asd">
			<Row className={styles.membersBox}>
				{members.map((member) => {
					return (
						<Col span={8} className={styles.column}>
							<MemberCard member={member} />
						</Col>
					);
				})}
			</Row>
		</Section>
	);
};

export default CompanyMembersSection;
