import changeGear from './basic/changeGear';
import update from './update';

export default payload => dispatch => {
	dispatch(changeGear(payload));
	dispatch(update(2));
};
