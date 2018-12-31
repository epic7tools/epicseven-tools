import {RSAA} from 'redux-api-middleware';
import {
	ACTION_SEPARATOR,
	FAILURE_ACTION_SUFFIX,
	REQUEST_ACTION_PREFIX,
	REQUEST_ACTION_SUFFIX,
	SUCCESS_ACTION_SUFFIX,
} from '../../constants';
import {API_URL} from '../../util/env';
import normalizePayload from '../../util/normalizePayload';

const actionType = (action, suffix) =>
	[REQUEST_ACTION_PREFIX, action, suffix].join(ACTION_SEPARATOR);

export default (name, schema) => {
	const action = `GET_${name.toUpperCase()}`;
	return {
		[RSAA]: {
			endpoint: `${API_URL}/${name}`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			types: [
				actionType(action, REQUEST_ACTION_SUFFIX),
				{
					type: actionType(action, SUCCESS_ACTION_SUFFIX),
					payload: normalizePayload(schema),
				},
				actionType(action, FAILURE_ACTION_SUFFIX),
			],
		},
	};
};
