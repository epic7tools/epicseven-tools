import fetchHero from '../../core/actions/requests/fetchHero';
import selectHero from './basic/selectHero';
import update from './update';

export default id => dispatch => {
	//todo: add fetchHeroBaseStats(id), fetchHeroEquippedStats(id)
	update([fetchHero(id)], [selectHero(id)])(dispatch);
};
