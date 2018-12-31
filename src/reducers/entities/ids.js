import {REQUEST_ACTION_PREFIX, SUCCESS_ACTION_SUFFIX} from '../../constants';

export default (state = {}, action) => {
	switch (action.type) {
		case `${REQUEST_ACTION_PREFIX}/GET_HEROES/${SUCCESS_ACTION_SUFFIX}`:
			return {
				...state,
				heroes: [...action.payload.result.filter(id => id !== '_HERO_TEMPLATE')],
			};
		case `${REQUEST_ACTION_PREFIX}/GET_ARTIFACTS/${SUCCESS_ACTION_SUFFIX}`:
			return {
				...state,
				artifacts: [...action.payload.result],
			};
		case `${REQUEST_ACTION_PREFIX}/GET_STATUS-EFFECTS/${SUCCESS_ACTION_SUFFIX}`:
			return {
				...state,
				statusEffects: [...action.payload.result],
			};
		case `${REQUEST_ACTION_PREFIX}/GET_RESOURCES/${SUCCESS_ACTION_SUFFIX}`:
			return {
				...state,
				resources: [...action.payload.result],
			};
		default:
			return state;
	}
};
