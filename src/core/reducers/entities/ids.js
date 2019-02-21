import {
	GET_ARTIFACTS_SUCCESS,
	GET_HEROES_SUCCESS,
	GET_ITEMS_SUCCESS,
	GET_STATUS_EFFECTS_SUCCESS,
} from '../../constants/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_HEROES_SUCCESS:
			return {
				...state,
				heroes: [...action.payload.result.filter(id => id !== '_HERO_TEMPLATE')],
			};
		case GET_ARTIFACTS_SUCCESS:
			return {
				...state,
				artifacts: [...action.payload.result],
			};
		case GET_STATUS_EFFECTS_SUCCESS:
			return {
				...state,
				statusEffects: [...action.payload.result],
			};
		case GET_ITEMS_SUCCESS:
			return {
				...state,
				items: [...action.payload.result],
			};
		default:
			return state;
	}
};
