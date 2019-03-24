export default async (dispatch, action) => {
	console.log('trying to call an api: ', action);
	return dispatch(action).then(x => {
		if (x.error) {
			throw x;
		}
		return Promise.resolve(x);
	});
};
