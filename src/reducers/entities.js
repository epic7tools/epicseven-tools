import {GET_HEROES_SUCCESS} from '../actionTypes';

const initialState = {
	heroes: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_HEROES_SUCCESS:
			return {
				...state,
				heroes: [...action.payload],
			};
		default:
			return state;
	}
};
