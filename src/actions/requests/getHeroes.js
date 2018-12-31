import {RSAA} from 'redux-api-middleware';
import {GET_HEROES, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from '../../actionTypes';
import {API_URL} from '../../util/env';

export default () => ({
	[RSAA]: {
		endpoint: `${API_URL}/heroes`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		types: [GET_HEROES, GET_HEROES_SUCCESS, GET_HEROES_FAILURE],
	},
});
