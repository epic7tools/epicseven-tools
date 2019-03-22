import load from './basic/load';
import loadFailure from './basic/loadFailure';
import loadSuccess from './basic/loadSuccess';
import getHero from './requests/getHero';
import getHeroes from './requests/getHeroes';
import callApi from './util/callApi';

const makeApiCalls = async (dispatch, getState) => {
	const apiCalls = [callApi(dispatch, getHeroes())];

	if (getState().gearPreview.hero) {
		apiCalls.push(callApi(dispatch, getHero(getState().gearPreview.hero)));
	}

	return Promise.all(apiCalls);
};

export default () => (dispatch, getState) => {
	dispatch(load());
	return makeApiCalls(dispatch, getState)
		.then(() => dispatch(loadSuccess()))
		.catch(e => dispatch(loadFailure(e)));
};
