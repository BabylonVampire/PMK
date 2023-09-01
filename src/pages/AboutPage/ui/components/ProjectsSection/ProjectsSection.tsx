import { FC, useEffect, useState } from 'react';
import styles from './ProjectsSection.module.scss';
import Section from '@/components/Section/Section';
import { projects } from '@/db';
import { IArticle } from '@/types';

interface IProjectsSectionProps {}

const ProjectsSection: FC<IProjectsSectionProps> = () => {
	const [project, setProject] = useState<IArticle>();

	const getOneProject = (projects: IArticle[]): void => {
		setProject(projects[Math.floor(Math.random() * projects.length)]);
	};

	useEffect(() => {
		getOneProject(projects);
	}, []);

	return (
		<Section
			heading="Наши проекты"
			sectionClassName={styles.ProjectsSectionWrapper}
		>
			{project && (
				<div className={styles.ProjectsSectionContainer}>
					<h3 className={styles.title}>{project.title}</h3>
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
						</div>
						<img className={styles.preview} src={project.preview} alt={project.title} />
					</div>
				</div>
			)}
		</Section>
	);
};

export default ProjectsSection;
