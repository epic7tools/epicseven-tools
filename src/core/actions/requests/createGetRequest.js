import normalizeType from 'core/util/normalizeType';
import {RSAA} from 'redux-api-middleware';

export default (req, schema) => {
	const types = [...req.types];
	if (schema) {
		types[1] = normalizeType(types[1], schema);
	}
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
