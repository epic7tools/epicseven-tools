import beginLoading from './beginLoading';
import loadingFailed from './loadingFailed';
import loadingSuccess from './loadingSuccess';
import getHeroes from './requests/getHeroes';

const callApi = async (dispatch, action) =>
	dispatch(action).then(x => {
		if (x.error) {
			throw x;
		}
		return Promise.resolve(x);
	});

const makeApiCalls = async dispatch => Promise.all([callApi(dispatch, getHeroes())]);

export default () => dispatch => {
	dispatch(beginLoading());
	return makeApiCalls(dispatch)
		.then(() => dispatch(loadingSuccess()))
		.catch(e => dispatch(loadingFailed(e)));
};
