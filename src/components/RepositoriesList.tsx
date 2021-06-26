import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();

	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchRepositories(term);
		// 윗 줄은 이것과 같다 === dispatch(actionCreators.searchRepositories(term));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3> /* if error true show h3, if null, nth*/}
			{loading && <h3>Loading.....</h3>}
			{
				!error && !loading && data.map((name) => <div key={name}>{name}</div>)
				/* if no err, no loading, show data*/
			}
		</div>
	);
};

export default RepositoriesList;
