import { FC } from 'react';
import styles from './Member.module.scss';
import { IMember } from '@/types';

interface IMemberProps {
	member: IMember;
}

const Member: FC<IMemberProps> = ({ member }) => {
	return (
		<div className={styles.memberBox}>
			<div className={styles.memberInnerBox}>
				<div className={styles.photoAndName}>
					<div
						className={styles.photo}
						style={{ backgroundImage: `url(${member.photo})` }}
					/>
					<div className={styles.name}>{member.name}</div>
					<div className={styles.post}>{member.post}</div>
				</div>
				<div className={styles.descriptionBox}>
					<div className={styles.description}>
						{member.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Member;
