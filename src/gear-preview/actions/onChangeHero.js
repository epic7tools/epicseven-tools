import selectHero from './basic/selectHero';
import update from './update';

export default id => dispatch => {
	dispatch(selectHero(id));

	// change this to 0 if we need more info from /hero/{id} endpoint
	dispatch(update(1));
};
