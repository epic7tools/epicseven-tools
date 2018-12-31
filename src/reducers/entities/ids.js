import {
	GET_ARTIFACTS_SUCCESS,
	GET_EQUIPMENT_STATS,
	GET_EQUIPMENT_TYPES,
	GET_EQUIPMENT_TYPES_SUCCESS,
	GET_HEROES_SUCCESS,
	GET_RESOURCES_SUCCESS,
	GET_STATS,
	GET_STATS_SUCCESS,
	GET_STATUS_EFFECTS_SUCCESS,
} from '../../actionTypes';

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
		case GET_RESOURCES_SUCCESS:
			return {
				...state,
				resources: [...action.payload.result],
			};
		case GET_STATS_SUCCESS:
			return {
				...state,
				stats: [...action.payload.result],
			};
		case GET_EQUIPMENT_TYPES_SUCCESS:
			return {
				...state,
				equipmentTypes: [...action.payload.result],
			};
		default:
			return state;
	}
};
