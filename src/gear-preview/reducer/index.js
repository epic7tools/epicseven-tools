import {combineReducers} from 'redux';
import gearReducer from './gearReducer';
import heroReducer from './heroReducer';

export default combineReducers({
	gear: gearReducer,
	hero: heroReducer,
});
