import loadingHeroInfo from '../actions/basic/loadingHeroInfo';
import loadingHeroInfoFail from '../actions/basic/loadingHeroInfoFail';
import loadingHeroInfoSuccess from '../actions/basic/loadingHeroInfoSuccess';
import makeSnapshot from '../actions/basic/makeSnapshot';
import selectHero from '../actions/basic/selectHero';
import setAwakening from '../actions/basic/setAwakening';
import setLevel from '../actions/basic/setLevel';
import {
	FETCH_HERO_BASE_STATS_SUCCESS,
	FETCH_HERO_EQUIPPED_STATS_SUCCESS,
} from '../constants/requestActionTypes';

const initialState = {
	id: '',
	loading: false,
	stars: 5,
	awakening: 0,
	staging: {},
	base: {},
	equipped: {},
	snapshot: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case loadingHeroInfo.toString():
			return {
				...state,
				loading: true,
			};
		case loadingHeroInfoSuccess.toString():
			return {
				...state,
				...state.staging,
				loading: false,
				staging: {},
			};
		case loadingHeroInfoFail.toString():
			return {
				...state,
				loading: false,
				staging: {},
			};

		case makeSnapshot.toString(): {
			return {
				...state,
				snapshot: state.equipped,
			};
		}

		// staging
		case FETCH_HERO_BASE_STATS_SUCCESS:
			return {
				...state,
				staging: {
					...state.staging,
					base: action.payload,
				},
			};
		case FETCH_HERO_EQUIPPED_STATS_SUCCESS: {
			return {
				...state,
				staging: {
					...state.staging,
					equipped: action.payload.stats,
				},
			};
		}
		case selectHero.toString(): {
			if (!action.payload) {
				return {
					...initialState,
					stars: state.stars,
					awakening: state.awakening,
				};
			}

			return {
				...state,
				staging: {
					...state.staging,
					id: action.payload,
					snapshot: {},
				},
			};
		}

		case setAwakening.toString():
			return {
				...state,
				awakening: action.payload.stars === state.awakening ? 0 : action.payload.stars,
			};
		case setLevel.toString(): {
			const stars = action.payload.stars;
			const awakening = Math.min(stars, state.awakening);
			return {
				...state,
				stars,
				awakening,
			};
		}

		default:
			return state;
	}
};
