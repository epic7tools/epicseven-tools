export default async (dispatch, action) =>
	dispatch(action).then(x => {
		if (x.error) {
			throw x;
		}
		return Promise.resolve(x);
	});
