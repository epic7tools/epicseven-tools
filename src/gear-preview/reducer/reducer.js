import merge from 'lodash.merge';
import {atk, def, hp} from '../../core/constants/stats';
import changeGear from '../actions/basic/changeGear';
import changeGearSet from '../actions/basic/changeGearSet';
import makeSnapshot from '../actions/basic/makeSnapshot';
import selectHero from '../actions/basic/selectHero';
import selectHeroFailure from '../actions/basic/selectHeroFailure';
import selectHeroSuccess from '../actions/basic/selectHeroSuccess';
import setAwakening from '../actions/basic/setAwakening';
import setLevel from '../actions/basic/setLevel';

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
		case selectHero.toString():
			return {
				...state,
				loading: true,
			};
		case selectHeroSuccess.toString(): {
			console.log('handling hero success');
			return {
				...state,
				hero: action.payload,
				loading: false,
				snapshot: {},
			};
		}
		case selectHeroFailure.toString():
			return {
				...state,
				loading: false,
			};
		case changeGear.toString(): {
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
		case changeGearSet.toString(): {
			const {piece, set} = action.payload;
			return {
				...state,
				gear: merge({}, state.gear, {
					[piece]: {set},
				}),
			};
		}
		case setAwakening.toString():
			return {
				...state,
				awakening: action.payload.stars === state.awakening ? 0 : action.payload.stars,
			};
		case setLevel.toString(): {
			const level = action.payload.stars;
			const awakening = Math.min(level, state.awakening);
			return {
				...state,
				level,
				awakening,
			};
		}
		case makeSnapshot.toString(): {
			return {
				...state,
				snapshot: action.payload,
			};
		}
		default:
			return state;
	}
};
