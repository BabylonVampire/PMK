import { FC } from 'react';
import styles from './CertificateSection.module.scss';
import Section from '@/components/Section/Section';
import { certificates } from '@/db';
import { Image } from 'antd';

interface ICertificateSectionProps {}

const CertificateSection: FC<ICertificateSectionProps> = () => {
	return (
		<Section
			heading="Наши сертификаты"
			sectionClassName={styles.CertificateSectionWrapper}
			className={styles.CertificatesContainer}
		>
			{certificates.map((certificate) => {
				return <Image key={certificate.id} width={200} src={certificate.img} />;
			})}
		</Section>
	);
};

export default CertificateSection;
