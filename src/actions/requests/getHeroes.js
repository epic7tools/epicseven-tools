import {RSAA} from 'redux-api-middleware';
import {GET_HEROES, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from '../../actionTypes';
import hero from '../../schemas/hero';
import {API_URL} from '../../util/env';
import normalizePayload from '../../util/normalizePayload';

export default () => ({
	[RSAA]: {
		endpoint: `${API_URL}/heroes`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		types: [
			GET_HEROES,
			{
				type: GET_HEROES_SUCCESS,
				payload: normalizePayload([hero]),
			},
			GET_HEROES_FAILURE,
		],
	},
});
