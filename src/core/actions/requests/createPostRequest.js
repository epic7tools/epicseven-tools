import {RSAA} from 'redux-api-middleware';
import createGetRequest from './createGetRequest';

export default (req, schema) => {
	const getReq = createGetRequest(req, schema)[RSAA];
	return {
		[RSAA]: {
			...getReq,
			body: JSON.stringify(req.body),
			method: 'POST',
			headers: {
				...getReq.headers,
				Accept: 'application/json',
			},
		},
	};
};
