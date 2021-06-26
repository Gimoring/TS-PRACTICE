import { ActionType } from './../action-types/index';

// Iactions
interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}

interface SearchREpositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchREpositoriesErrorAction;
