import getHeroId from 'gear-preview/selectors/getHeroId';
import load from './basic/load';
import loadFailure from './basic/loadFailure';
import loadSuccess from './basic/loadSuccess';
import fetchHero from './requests/fetchHero';
import fetchHeroes from './requests/fetchHeroes';
import callApis from './util/callApis';

const makeApiCalls = async (dispatch, state) => {
	const actions = [fetchHeroes()];
	const heroId = getHeroId(state);
	if (heroId) {
		actions.push(fetchHero(heroId));
	}
	return callApis(actions)(dispatch);
};

export default () => (dispatch, getState) => {
	dispatch(load());
	return makeApiCalls(dispatch, getState())
		.then(() => dispatch(loadSuccess()))
		.catch(e => dispatch(loadFailure(e)));
};
