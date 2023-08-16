import './App.scss';
import Layout from './Layout/Layout';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
	return (
		<main className="app">
			<Layout>
				<MainPage />
			</Layout>
		</main>
	);
};

export default App;
