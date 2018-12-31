import merge from 'lodash.merge';

export default (state = {}, action) => {
	return action.payload && action.payload.entities ? merge({}, action.payload.entities, state) : state;
}