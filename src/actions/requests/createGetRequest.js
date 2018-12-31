import {RSAA} from 'redux-api-middleware';
import normalizeType from '../../util/normalizeType';

export default (schema, req) => {
	const types = [...req.types];
	types[1] = normalizeType(types[1], schema);
	return {
		[RSAA]: {
			...req,
			types,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				...req.headers,
			},
		},
	};
};
