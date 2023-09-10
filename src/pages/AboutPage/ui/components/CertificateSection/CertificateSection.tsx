import { FC } from 'react';
import { Image } from 'antd';
import styles from './CertificateSection.module.scss';
import Section from '@/components/Section/Section';
import { ICertificate } from '@/types';

interface ICertificateSectionProps {
	certificates: ICertificate[];
}

const CertificateSection: FC<ICertificateSectionProps> = ({ certificates }) => {
	return (
		<Section
			heading="Наши сертификаты"
			sectionClassName={styles.CertificateSectionWrapper}
			className={styles.CertificatesContainer}
		>
			<div className={styles.description}>Лалала</div>
			<div className={styles.images}>
				{certificates.map((certificate) => {
					return (
						<div
							className={styles.imageWrapper}
							key={`certificate${certificates.indexOf(
								certificate
							)}`}
						>
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
