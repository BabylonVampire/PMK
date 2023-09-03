import { FC } from 'react';
import styles from './ProjectsSection.module.scss';
import Section from '@/components/Section/Section';
import Divider from '@/components/Divider/Divider';
import CallUsButton from '@/components/CallUsButton/CallUsButton';
import { IArticle } from '@/types';

interface IProjectsSectionProps {
	project: IArticle;
}

const ProjectsSection: FC<IProjectsSectionProps> = ({ project }) => {
	return (
		<Section sectionClassName={styles.ProjectsSectionWrapper}>
			<div className={styles.ProjectsSectionContainer}>
				<h3 className={styles.title}>{project.title}</h3>
				<Divider />
				<div className={styles.content}>
					<div className={styles.descriptionContainer}>
						{project.content
							.filter((el) => el.type === 'text')
							.map((el) => {
								return (
									<p className={styles.description}>
										{el.value}
									</p>
								);
							})}
						<div className={styles.btnBox}>
							<CallUsButton />
						</div>
					</div>
					<img
						className={styles.preview}
						src={project.preview}
						alt={project.title}
					/>
				</div>
			</div>
		</Section>
	);
};

export default ProjectsSection;
