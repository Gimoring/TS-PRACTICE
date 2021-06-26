import axios from 'axios';
import { Dispatch } from 'react';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
	// 비동기를 사용하기위해 여기서는 thunk를 씁니다.

	return async (dispatch: Dispatch<Action>) => {
		// 10번 줄을 해줘야 타입스크립트가 dispatch를 제대로 알아먹어요.
		// 타입스크립트한테 우리는 여기 있는 이 dispatch함수는
		// Action의 타입에 정의한 적합한 인자로만 부를 수 있다고 해주는거에요.
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});

		try {
			const { data } = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				}
			);

			const names = data.objects.map((result: any) => {
				return result.package.name;
			});

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names, // <-- 예1) 'names'라고 하면 오류나요. Action의 SUCCESS는 payload가 문자열배열이에요.
			});
		} catch (err) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message,
			});
		}
	};
};
