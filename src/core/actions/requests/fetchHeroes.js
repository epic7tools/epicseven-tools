import {
	FETCH_HEROES,
	FETCH_HEROES_FAILURE,
	FETCH_HEROES_SUCCESS,
} from '../../constants/requestActionTypes';
import hero from '../../schemas/hero';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest(
		{
			endpoint: `${API_URL}/heroes`,
			types: [FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_FAILURE],
		},
		[hero]
	);
