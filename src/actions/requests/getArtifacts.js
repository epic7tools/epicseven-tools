import {GET_ARTIFACTS, GET_ARTIFACTS_FAILURE, GET_ARTIFACTS_SUCCESS} from '../../actionTypes';
import artifact from '../../schemas/artifact';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([artifact], {
		endpoint: `${API_URL}/artifacts`,
		types: [GET_ARTIFACTS, GET_ARTIFACTS_SUCCESS, GET_ARTIFACTS_FAILURE],
	});
