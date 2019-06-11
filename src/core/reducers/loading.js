import load from 'core/actions/basic/load';
import loadFailure from 'core/actions/basic/loadFailure';
import loadSuccess from 'core/actions/basic/loadSuccess';

const initialState = {
	inProgress: true,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case load.toString():
			return initialState;
		case loadSuccess.toString():
			return {
				inProgress: false,
				error: false,
			};
		case loadFailure.toString():
			return {
				inProgress: false,
				error: true,
			};
		default:
			return state;
	}
};
