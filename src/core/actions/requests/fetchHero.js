import {
	FETCH_HERO,
	FETCH_HERO_FAILURE,
	FETCH_HERO_SUCCESS,
} from '../../constants/requestActionTypes';
import hero from '../../schemas/hero';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default id =>
	createGetRequest(hero, {
		endpoint: `${API_URL}/heroes/${id}`,
		types: [FETCH_HERO, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE],
	});
