import merge from 'lodash.merge';
import {atk, def, hp} from '../../core/constants/stats';
import {
	CHANGE_GEAR,
	CHANGE_GEARSET,
	HERO_LOAD,
	HERO_LOAD_FAILURE,
	HERO_LOAD_SUCCESS,
	MAKE_SNAPSHOT,
	SELECT_HERO,
	SET_AWAKENING,
	SET_LEVEL,
} from '../constants/actionTypes';

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
};

const initialState = {
	hero: '',
	loading: false,
	level: 5,
	awakening: 0,
	snapshot: {},
	gear: {
		artifact: {
			stat1: {
				stat: atk.id,
			},
			stat2: {
				stat: hp.id,
			},
		},
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
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_HERO:
			return {
				...state,
				hero: action.payload,
				loading: false,
				snapshot: {},
			};
		case HERO_LOAD:
			return {
				...state,
				loading: true,
			};
		case HERO_LOAD_FAILURE:
		case HERO_LOAD_SUCCESS:
			return {
				...state,
				loading: false,
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
				awakening: action.payload.stars === state.awakening ? 0 : action.payload.stars,
			};
		case SET_LEVEL: {
			const level = action.payload.stars;
			const awakening = Math.min(level, state.awakening);
			return {
				...state,
				level,
				awakening,
			};
		}
		case MAKE_SNAPSHOT: {
			return {
				...state,
				snapshot: action.payload,
			};
		}
		default:
			return state;
	}
};
