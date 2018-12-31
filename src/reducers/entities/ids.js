import {REQUEST_ACTION_PREFIX, SUCCESS_ACTION_SUFFIX} from '../../constants';

export default (state={}, action) => {
 switch(action.type) {
	 case `${REQUEST_ACTION_PREFIX}/GET_HEROES/${SUCCESS_ACTION_SUFFIX}`:
		 return {
			 ...state,
			 heroes: [...action.payload.result.filter(id => id !== '_HERO_TEMPLATE')],
		 };
	 default:
	 	return state;
 }
};