import normalizePayload from './normalizePayload';

export default (type, schema) => ({
	type,
	payload: normalizePayload(schema),
});
