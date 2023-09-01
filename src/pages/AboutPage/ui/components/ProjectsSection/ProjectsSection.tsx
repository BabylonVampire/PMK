import { FC, useEffect, useState } from 'react';
import styles from './ProjectsSection.module.scss';
import Section from '@/components/Section/Section';
import { projects } from '@/db';
import { IArticle } from '@/types';
import Divider from '@/components/Divider/Divider';
import CallUsButton from '@/components/CallUsButton/CallUsButton';

interface IProjectsSectionProps {}

const ProjectsSection: FC<IProjectsSectionProps> = () => {
	return (
		<Section sectionClassName={styles.ProjectsSectionWrapper}>
			<div className={styles.ProjectsSectionContainer}>
				<h3 className={styles.title}>{projects.title}</h3>
				<Divider />
				<div className={styles.content}>
					<div className={styles.descriptionContainer}>
						{projects.content
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
						src={projects.preview}
						alt={projects.title}
					/>
				</div>
			</div>
		</Section>
	);
};

export default ProjectsSection;
