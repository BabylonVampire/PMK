import Section from '@/components/Section/Section';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './ProgressBarSection.module.scss';
import { Carousel } from 'antd';

interface IProgressBarSectionProps {
	progressBarSteps: {
		stepText: string;
		text: string;
		icon: React.ReactNode;
	}[];
}

const ProgressBarSection: FC<IProgressBarSectionProps> = ({
	progressBarSteps,
}) => {
	const [currentStep, setStep] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);
	const slider = useRef<any>();

	useEffect(() => {
		let newWidth =
			numOfSteps - 1 === currentStep
				? 100
				: (100 / numOfSteps) * currentStep + 100 / numOfSteps / 2;
		setWidth(newWidth);
	}, [currentStep]);

	const numOfSteps = progressBarSteps.length;
	return (
		<Section className={styles.ProgressBarSection}>
			<Carousel
				className={styles.carouselSection}
				dots={false}
				ref={(ref) => {
					slider.current = ref;
				}}
			>
				{progressBarSteps.map((step) => {
					return (
						<div
							className={styles.slide}
							key={`stepSlide${progressBarSteps.indexOf(step)}`}
						>
							<div className={styles.stepIndex}>
								0{progressBarSteps.indexOf(step) + 1}
							</div>
							<div className={styles.verticalDivider} />
							<div className={styles.stepText}>{step.text}</div>
						</div>
					);
				})}
			</Carousel>

			<div className={styles.innerBox}>
				<div className={styles.progressStaticLine} />
				<div
					className={styles.progressDynamicLine}
					style={{
						width: `${width}%`,
					}}
				/>
				<div className={styles.stepsContainer}>
					{progressBarSteps.map((step) => {
						return (
							<div
								key={`step${progressBarSteps.indexOf(step)}`}
								className={
									currentStep >=
									progressBarSteps.indexOf(step)
										? styles.selectedStep
										: styles.step
								}
								onClick={() => {
									setStep(progressBarSteps.indexOf(step));
									slider.current.goTo(
										progressBarSteps.indexOf(step)
									);
								}}
							>
								<div className={styles.stepBox}>
									<p className={styles.stepText}>
										{step.stepText}
									</p>
									{step.icon}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
};

export default ProgressBarSection;
