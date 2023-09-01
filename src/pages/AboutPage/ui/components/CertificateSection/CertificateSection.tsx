import { FC } from 'react';
import styles from './CertificateSection.module.scss';
import Section from '@/components/Section/Section';
import { certificates } from '@/db';
import { Image } from 'antd';
import Divider from '@/components/Divider/Divider';

interface ICertificateSectionProps {}

const CertificateSection: FC<ICertificateSectionProps> = () => {
	return (
		<Section
			heading="Наши сертификаты"
			sectionClassName={styles.CertificateSectionWrapper}
			className={styles.CertificatesContainer}
		>
			<Divider />
			<div className={styles.images}>
				{certificates.map((certificate) => {
					return (
						<div className={styles.imageWrapper}>
							<Image
								key={certificate.id}
								width={300}
								src={certificate.img}
							/>
						</div>
					);
				})}
			</div>
		</Section>
	);
};

export default CertificateSection;
