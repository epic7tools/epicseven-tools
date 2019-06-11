import {
	FETCH_HEROES,
	FETCH_HEROES_FAILURE,
	FETCH_HEROES_SUCCESS,
} from 'core/constants/requestActionTypes';
import hero from 'core/schemas/hero';
import {API_URL} from 'core/util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest(
		{
			endpoint: `${API_URL}/heroes`,
			types: [FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_FAILURE],
		},
		[hero]
	);
