import merge from 'lodash.merge';
import {atk, def, hp} from '../../core/constants/stats';
import {CHANGE_GEAR, CHANGE_GEARSET, SELECT_HERO, SET_AWAKENING} from '../constants/actionTypes';

const defaultLine = {
	stat: '',
	currentValue: '',
};

const initialStats = {
	set: '',
	main: defaultLine,
	sub1: defaultLine,
	sub2: defaultLine,
	sub3: defaultLine,
	sub4: defaultLine,
	awakenedStars: 0,
};

const initialState = {
	gear: {
		weapon: merge({}, initialStats, {
			main: {
				stat: atk.id,
			},
		}),
		helmet: merge({}, initialStats, {
			main: {
				stat: hp.id,
			},
		}),
		armor: merge({}, initialStats, {
			main: {
				stat: def.id,
			},
		}),
		necklace: initialStats,
		ring: initialStats,
		boots: initialStats,
	},
	hero: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_HERO:
			return {
				...state,
				hero: action.payload,
			};
		case CHANGE_GEAR: {
			const {event, piece, line, name: nameProp, value} = action.payload;
			const name = event !== 'blur' && nameProp === 'value' ? 'currentValue' : nameProp;
			return {
				...state,
				gear: merge({}, state.gear, {
					[piece]: {
						[line]: {
							[name]: value,
						},
					},
				}),
			};
		}
		case CHANGE_GEARSET: {
			const {piece, set} = action.payload;
			return {
				...state,
				gear: merge({}, state.gear, {
					[piece]: {set},
				}),
			};
		}
		case SET_AWAKENING:
			return {
				...state,
				awakenedStars: action.payload.stars === state.awakenedStars ? 0 : action.payload.stars,
			};
		default:
			return state;
	}
};
