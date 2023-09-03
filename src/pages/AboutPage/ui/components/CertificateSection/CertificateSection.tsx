import { FC } from 'react';
import { Image } from 'antd';
import styles from './CertificateSection.module.scss';
import Section from '@/components/Section/Section';
import Divider from '@/components/Divider/Divider';
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
