import {
	FETCH_HERO,
	FETCH_HERO_FAILURE,
	FETCH_HERO_SUCCESS,
} from '../../../core/constants/requestActionTypes';
import hero from '../../../core/schemas/hero';
import {API_URL} from '../../../core/util/env';
import createGetRequest from '../../../core/actions/requests/createGetRequest';

export default id =>
	createGetRequest(hero, {
		endpoint: `${API_URL}/heroes/${id}`,
		types: [FETCH_HERO, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE],
	});
