import {CHANGE_GEAR, SELECT_HERO} from '../constants/actionTypes';
import merge from 'lodash.merge';

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_HERO:
			return {
				...state,
				hero: action.payload,
			};
		case CHANGE_GEAR:
			return {
				...state,
				gear: merge({}, state.gear, action.payload),
			};
		default:
			return state;
	}
};
