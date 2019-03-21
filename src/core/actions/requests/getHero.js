import {GET_HERO, GET_HERO_FAILURE, GET_HERO_SUCCESS} from '../../constants/actionTypes';
import hero from '../../schemas/hero';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default id =>
	createGetRequest(hero, {
		endpoint: `${API_URL}/heroes/${id}`,
		types: [GET_HERO, GET_HERO_SUCCESS, GET_HERO_FAILURE],
	});
