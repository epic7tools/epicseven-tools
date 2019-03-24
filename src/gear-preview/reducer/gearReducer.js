import merge from 'lodash.merge';
import {atk, def, hp} from '../../core/constants/stats';
import changeGear from '../actions/basic/changeGear';
import changeGearSet from '../actions/basic/changeGearSet';

const defaultGearStat = {
	stat: '',
	currentValue: '',
};

const initialGearPiece = {
	set: '',
	main: defaultGearStat,
	sub1: defaultGearStat,
	sub2: defaultGearStat,
	sub3: defaultGearStat,
	sub4: defaultGearStat,
};

const initialState = {
	artifact: {
		stat1: {
			stat: atk.id,
		},
		stat2: {
			stat: hp.id,
		},
	},
	weapon: merge({}, initialGearPiece, {
		main: {
			stat: atk.id,
		},
	}),
	helmet: merge({}, initialGearPiece, {
		main: {
			stat: hp.id,
		},
	}),
	armor: merge({}, initialGearPiece, {
		main: {
			stat: def.id,
		},
	}),
	necklace: initialGearPiece,
	ring: initialGearPiece,
	boots: initialGearPiece,
};

export default (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};
