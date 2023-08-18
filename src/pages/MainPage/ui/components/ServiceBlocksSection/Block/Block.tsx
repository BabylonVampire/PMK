import { FC } from 'react';
import styles from './Block.module.scss';

interface IBlockProps {
	block: {
		title: string;
		description: string;
		image: string;
		id: number;
	};
}

const Block: FC<IBlockProps> = ({ block }) => {
	return (
		<div className="serviceBlock" id={'' + block.id}>
			<div className={styles.block}>
				<div
					className={styles.blockPic}
					style={{ backgroundImage: `url(${block.image})` }}
				/>
				<div className={styles.blockTextBox}>
					<div className={styles.blockTitle}>{block.title}</div>
					<div className={styles.blockDescription}>
						{block.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Block;
