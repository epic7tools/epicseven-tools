import load from './basic/load';
import loadFailure from './basic/loadFailure';
import loadSuccess from './basic/loadSuccess';
import fetchHero from './requests/fetchHero';
import fetchHeroes from './requests/fetchHeroes';
import callApis from './util/callApis';

const makeApiCalls = async state => {
	const actions = [fetchHeroes()];
	if (state.gearPreview.hero) {
		actions.push(fetchHero(state.gearPreview.hero));
	}
	return callApis(actions);
};

export default () => (dispatch, getState) => {
	dispatch(load());
	return makeApiCalls(getState())
		.then(() => dispatch(loadSuccess()))
		.catch(e => dispatch(loadFailure(e)));
};
