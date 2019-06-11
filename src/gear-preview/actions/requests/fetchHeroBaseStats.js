import createGetRequest from 'core/actions/requests/createGetRequest';
import {API_URL} from 'core/util/env';
import {
	FETCH_HERO_BASE_STATS,
	FETCH_HERO_BASE_STATS_FAILURE,
	FETCH_HERO_BASE_STATS_SUCCESS,
} from 'gear-preview/constants/requestActionTypes';
import queryString from 'query-string';

export default (id, stars, awakening) =>
	createGetRequest({
		endpoint: `${API_URL}/heroes/${id}/stats?${queryString.stringify({
			stars,
			awakening,
		})}`,
		types: [FETCH_HERO_BASE_STATS, FETCH_HERO_BASE_STATS_SUCCESS, FETCH_HERO_BASE_STATS_FAILURE],
	});
