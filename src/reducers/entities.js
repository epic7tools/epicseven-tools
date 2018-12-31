import {GET_HEROES_SUCCESS} from '../actionTypes';
import merge from 'lodash.merge';

const initialState = {
	byId: {},
	heroes: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_HEROES_SUCCESS: {
			return {
				...state,
				byId: merge({}, action.payload.entities, state.byId),
				heroes: [...action.payload.result.filter(id => id !== '_HERO_TEMPLATE')],
			};
		}
		default:
			return state;
	}
};
