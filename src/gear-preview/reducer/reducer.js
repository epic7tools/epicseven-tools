import merge from 'lodash.merge';
import {equipmentStatsById} from '../../core/constants/equipmentStats';
import {CHANGE_GEAR, SELECT_HERO} from '../constants/actionTypes';

const defaultLine = {
	stat: '',
	currentValue: '',
};

const initialStats = {
	main: defaultLine,
	sub1: defaultLine,
	sub2: defaultLine,
	sub3: defaultLine,
	sub4: defaultLine,
};

const initialState = {
	gear: {
		weapon: merge({}, initialStats, {
			main: {
				stat: equipmentStatsById.atk.id,
			},
		}),
		helmet: merge({}, initialStats, {
			main: {
				stat: equipmentStatsById.hp.id,
			},
		}),
		armor: merge({}, initialStats, {
			main: {
				stat: equipmentStatsById.def.id,
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
		default:
			return state;
	}
};
