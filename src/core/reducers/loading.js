import {LOADING, LOADING_FAILURE, LOADING_SUCCESS} from '../constants/actionTypes';

const initialState = {
	inProgress: true,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return initialState;
		case LOADING_SUCCESS:
			return {
				inProgress: false,
				error: false,
			};
		case LOADING_FAILURE:
			return {
				inProgress: false,
				error: true,
			};
		default:
			return state;
	}
};
