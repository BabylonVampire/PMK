import './App.scss';
import Layout from './Layout/Layout';
import AppRouter from './providers/router/AppRouter';

const App = () => {
	return (
		<main className="app">
			<Layout>
				<AppRouter/>
			</Layout>
		</main>
	);
};

export default App;
