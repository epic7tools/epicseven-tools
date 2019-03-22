import load from '../actions/basic/load';
import loadFailure from '../actions/basic/loadFailure';
import loadSuccess from '../actions/basic/loadSuccess';

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
