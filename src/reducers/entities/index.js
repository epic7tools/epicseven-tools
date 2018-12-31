import {combineReducers} from 'redux';
import byId from './byId';
import ids from './ids';

export default combineReducers({
	byId,
	ids,
});