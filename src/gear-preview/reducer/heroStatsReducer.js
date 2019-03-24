import makeSnapshot from '../actions/basic/makeSnapshot';
import selectHero from '../actions/basic/selectHero';
import {
	FETCH_HERO_EQUIPPED_STATS_SUCCESS,
	FETCH_HERO_STATS_SUCCESS,
} from '../constants/requestActionTypes';

export const initialState = {
	base: {},
	equipped: {},
	snapshot: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_HERO_STATS_SUCCESS:
			return {
				...state,
				base: action.payload,
			};
		case FETCH_HERO_EQUIPPED_STATS_SUCCESS: {
			return {
				...state,
				equipped: action.payload,
			};
		}
		case makeSnapshot.toString(): {
			return {
				...state,
				snapshot: action.payload,
			};
		}
		case selectHero.toString(): {
			return {
				...state,
				snapshot: {},
			};
		}
		default:
			return state;
	}
};
