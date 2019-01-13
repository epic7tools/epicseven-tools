import {CHANGE_GEAR, SELECT_HERO} from '../constants/actionTypes';
import merge from 'lodash.merge';

const initialState = {
	gear: {
		weapon: {
			main: {
				stat: 'atk',
				value: 142,
			},
			sub1: {
				stat: 'hp%',
				value: 7,
			},
			sub2: {
				stat: 'atk%',
				value: 18,
			},
			sub3: {
				stat: 'chc',
				value: 7,
			},
			sub4: {
				stat: 'efr',
				value: 5,
			},
		},
		helmet: {
			main: {
				stat: 'hp',
				value: 734,
			},
			sub1: {
				stat: 'hp%',
				value: 12,
			},
			sub2: {
				stat: 'def%',
				value: 9,
			},
			sub3: {
				stat: 'spd',
				value: 5,
			},
			sub4: {
				stat: 'efr',
				value: 9,
			},
		},
		armor: {
			main: {
				stat: 'def',
				value: 72,
			},
			sub1: {
				stat: 'hp%',
				value: 7,
			},
			sub2: {
				stat: 'def%',
				value: 9,
			},
			sub3: {
				stat: 'efr',
				value: 22,
			},
			sub4: {
				stat: 'eff',
				value: 5,
			},
		},
		necklace: {
			main: {
				stat: 'chc',
				value: 8,
			},
			sub1: {
				stat: 'chd',
				value: 5,
			},
			sub2: {
				stat: 'hp%',
				value: 5,
			},
		},
		ring: {
			main: {
				stat: 'hp%',
				value: 25,
			},
			sub1: {
				stat: 'atk',
				value: 13,
			},
			sub2: {
				stat: 'chd',
				value: 7,
			},
			sub3: {
				stat: 'eff',
				value: 4,
			},
			sub4: {
				stat: 'efr',
				value: 5,
			},
		},
		boots: {
			main: {
				stat: 'def%',
				value: 22,
			},
			sub1: {
				stat: 'hp%',
				value: 10,
			},
			sub2: {
				stat: 'spd',
				value: 4,
			},
			sub3: {
				stat: 'chc',
				value: 2,
			},
			sub4: {
				stat: 'atk',
				value: 12,
			},
		},
	},
};

export default (state = initialState, action) => {
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
