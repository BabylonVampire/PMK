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
			{blocks.map((block) => (
				<Block block={block}/>
			))}
			{/* <div className={styles.galleryLeft}>
				<Block
					block={{
						id: 1,
						title: 'asd',
						description: 'asd',
						image: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					}}
				/>
				<Block
					block={{
						id: 3,
						title: 'asd',
						description: 'asd',
						image: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					}}
				/>
			</div>
			<div className={styles.galleryRight}>
				<Block
					block={{
						id: 2,
						title: 'asd',
						description: 'asd',
						image: 'https://sun9-76.userapi.com/impg/K_6EG6wRcrM2OGKN69LC_4GBAWYIk0YjljEPSw/Aic60Xo5KTc.jpg?size=1600x900&quality=96&sign=0ab0c4a0ee9f617a260ccb0bf5a96b3b&type=album',
					}}
				/>
			</div> */}
		</div>
	);
};

export default ServiceBlocksSection;
