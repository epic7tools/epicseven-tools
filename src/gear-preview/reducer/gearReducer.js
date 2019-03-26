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
			currentValue: '',
		},
		stat2: {
			stat: hp.id,
			currentValue: '',
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
			// if we have the old stat value in the action, we would know which line to remove, and
			// could therefore store it as a basic stat->value map (the same format required by the api)
			return merge({}, state, {
				[piece]: {
					[line]: {
						[name]: value,
					},
				},
			});
		}
		case changeGearSet.toString(): {
			const {piece, set} = action.payload;
			return merge({}, state, {
				[piece]: {set},
			});
		}
		default:
			return state;
	}
};
