import {REQUEST_ACTION_PREFIX} from 'core/constants/requestActionTypes';
import merge from 'lodash.merge';

export default (state = {}, action) =>
	action.type.startsWith(REQUEST_ACTION_PREFIX) && action.payload && action.payload.entities
		? merge({}, action.payload.entities, state)
		: state;
