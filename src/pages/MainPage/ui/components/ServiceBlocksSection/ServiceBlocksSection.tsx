import { FC } from 'react';
import styles from './ServiceBlocksSection.module.scss';
import Block from './Block/Block';
import { IBlock } from '@/types';

interface IServiceBlocksSectionProps {
	blocks: IBlock[];
}

const ServiceBlocksSection: FC<IServiceBlocksSectionProps> = ({ blocks }) => {
	return (
		<div className={styles.serviceBlocks} id="serviceBlocks">
			<div className={styles.galleryLeft}>{blocks.filter((block) => block.id % 2 === 1).map((block) => {
				return <Block block={block} />
			})}</div>
			<div className={styles.galleryRight}>{blocks.filter((block) => block.id % 2 === 0).map((block) => {
				return <Block block={block} />
			})}</div>
		</div>
	);
};

export default ServiceBlocksSection;
