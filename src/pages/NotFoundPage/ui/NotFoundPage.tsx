import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
	return (
		<main className={styles.NotFoundPageWrapper}>
			<div className={styles.innerBox}>
				<div className={styles.title}>
					404
					<br />
					Страница не найдена
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;
