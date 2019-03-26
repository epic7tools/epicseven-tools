import setLevel from './basic/setLevel';
import update from './update';

export default stars => dispatch => {
	dispatch(setLevel(stars));
	dispatch(update(1));
};
