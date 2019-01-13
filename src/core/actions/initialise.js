import beginLoading from './beginLoading';
import loadingFailed from './loadingFailed';
import loadingSuccess from './loadingSuccess';
import getArtifacts from './requests/getArtifacts';
import getHeroes from './requests/getHeroes';
import getResources from './requests/getResources';
import getStatusEffects from './requests/getStatusEffects';

const callApi = async (dispatch, action) =>
	dispatch(action).then(x => {
		if (x.error) {
			throw x;
		}
		return Promise.resolve(x);
	});

const makeApiCalls = async dispatch =>
	Promise.all([
		callApi(dispatch, getHeroes()),
		callApi(dispatch, getArtifacts()),
		callApi(dispatch, getStatusEffects()),
		callApi(dispatch, getResources()),
	]);

export default () => dispatch => {
	dispatch(beginLoading());
	return makeApiCalls(dispatch)
		.then(() => dispatch(loadingSuccess()))
		.catch(e => dispatch(loadingFailed(e)));
};
