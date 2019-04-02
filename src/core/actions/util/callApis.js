import callApi from './callApi';

export default actions => dispatch => Promise.all(actions.map(action => callApi(dispatch, action)));
