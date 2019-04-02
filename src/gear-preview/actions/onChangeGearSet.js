import changeGearSet from './basic/changeGearSet';
import update from './update';

export default payload => dispatch => {
	dispatch(changeGearSet(payload));
	dispatch(update(2));
};
