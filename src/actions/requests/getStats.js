import {GET_STATS, GET_STATS_FAILURE, GET_STATS_SUCCESS} from '../../actionTypes';
import stat from '../../schemas/stat';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([stat], {
		endpoint: `${API_URL}/stats`,
		types: [GET_STATS, GET_STATS_SUCCESS, GET_STATS_FAILURE],
	});
