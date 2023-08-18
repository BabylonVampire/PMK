import { FC } from 'react';
import styles from './MemberCard.module.scss';

interface IMemberCardProps {
	member: {
		photo: string;
		name: string;
		post: string;
		description: string;
	};
}

const MemberCard: FC<IMemberCardProps> = ({ member }) => {
	return (
		<div className="memberCard">
			<div className={styles.member}>
				<div className={styles.memberBox}>
					<div
						className={styles.memberPhoto}
						style={{
							backgroundImage: `url(${member.photo})`,
						}}
					/>
					<div className={styles.memberName}>{member.name}</div>
					<div className={styles.memberPost}>{member.post}</div>
					<div className={styles.memberDescription}>
						{member.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MemberCard;
