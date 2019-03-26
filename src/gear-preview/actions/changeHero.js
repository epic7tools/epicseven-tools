import selectHero from './basic/selectHero';
import update from './update';

export default id => dispatch => {
	dispatch(selectHero(id));
	dispatch(update(1));
};
