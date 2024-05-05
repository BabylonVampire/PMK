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
				<h3 className={styles.title}>Чем мы занимаемся</h3>
				<Divider />
				<div className={styles.content}>
					<div className={styles.descriptionContainer}>
						<p className={styles.description}>
							Проектно-монтажная компания «Развитие» - команда
							инженеров, готовых оказать комплексную помощь при
							вводе объекта в эксплуатацию. За нашей спиной
							огромный опыт взаимодействия с сетевыми,
							ресурсоснабжающими, эксплуатирующими и подобными
							организациями. Именно этим опытом мы готовы
							поделиться с нашими клиентами, чтобы помочь решить
							вам абсолютно любой вопрос. На сегодняшний день
							компания выполняет разработку архитектурных и
							инженерных проектов, монтаж инженерных сетей по
							проекту, занимается согласованиями проектной
							документации в соответствующих инстанциях, оказывает
							комплекс услуг по получению и выполнению технических
							условий.
						</p>
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
