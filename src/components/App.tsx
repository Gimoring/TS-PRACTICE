import { Provider } from 'react-redux'; //리덕스 스토어에 접근하기 위해서 필요해용
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search For a Package</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
};

export default App;
