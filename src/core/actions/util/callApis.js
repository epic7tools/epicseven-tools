import callApi from './callApi';

export default async actions => dispatch => {
	return Promise.all(actions.map(action => callApi(dispatch, action)));
};
