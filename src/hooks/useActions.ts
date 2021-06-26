import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
	const dispatch = useDispatch();
	// action creators를 자동으로 설정해준다.
	//
	return bindActionCreators(actionCreators, dispatch);
	// { searchRepositories: dispatch(searchRepositories)} 이런식으로 리턴해준다.
};
