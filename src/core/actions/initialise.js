import beginLoading from './beginLoading';
import loadingFailed from './loadingFailed';
import loadingSuccess from './loadingSuccess';
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
	dispatch(beginLoading());
	return makeApiCalls(dispatch, getState)
		.then(() => dispatch(loadingSuccess()))
		.catch(e => dispatch(loadingFailed(e)));
};
