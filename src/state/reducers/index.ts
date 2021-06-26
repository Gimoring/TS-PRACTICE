// 리듀서 들을 합쳐주는 곳

import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({
	repositories: repositoriesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; //이걸 해줘야 타입을 제대로 알아먹어요
