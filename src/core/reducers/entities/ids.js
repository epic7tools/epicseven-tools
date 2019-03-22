import {FETCH_HEROES_SUCCESS} from '../../constants/requestActionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_HEROES_SUCCESS:
			return {
				...state,
				heroes: [...action.payload.result.filter(id => id !== '_HERO_TEMPLATE')],
			};
		default:
			return state;
	}
};
