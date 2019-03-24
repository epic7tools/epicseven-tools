import loadingHeroInfo from '../actions/basic/loadingHeroInfo';
import loadingHeroInfoComplete from '../actions/basic/loadingHeroInfoComplete';
import selectHero from '../actions/basic/selectHero';
import setAwakening from '../actions/basic/setAwakening';
import setLevel from '../actions/basic/setLevel';
import statsInitialState from './heroStatsReducer';

const initialState = {
	id: '',
	loading: false,
	level: 5,
	awakening: 0,
	stats: statsInitialState,
};

export default (state = initialState, action) => {
	const newState = {
		...state,
		stats: statsInitialState(state.stats, action),
	};

	switch (action.type) {
		case loadingHeroInfo.toString():
			return {
				...newState,
				loading: true,
			};
		case loadingHeroInfoComplete.toString():
			return {
				...newState,
				loading: true,
			};
		case selectHero.toString():
			return {
				...newState,
				id: action.payload,
			};
		case setAwakening.toString():
			return {
				...newState,
				awakening: action.payload.stars === state.awakening ? 0 : action.payload.stars,
			};
		case setLevel.toString(): {
			const level = action.payload.stars;
			const awakening = Math.min(level, state.awakening);
			return {
				...newState,
				level,
				awakening,
			};
		}
		default:
			return state;
	}
};
