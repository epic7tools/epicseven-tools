import merge from 'lodash.merge';
import {REQUEST_ACTION_PREFIX} from '../../constants/requestActionTypes';

export default (state = {}, action) =>
	action.type.startsWith(REQUEST_ACTION_PREFIX) && action.payload && action.payload.entities
		? merge({}, action.payload.entities, state)
		: state;
