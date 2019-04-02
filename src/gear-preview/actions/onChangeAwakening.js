import setAwakening from './basic/setAwakening';
import update from './update';

export default awakening => dispatch => {
	dispatch(setAwakening(awakening));
	dispatch(update(1));
};
