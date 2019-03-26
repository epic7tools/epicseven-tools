import fetchHero from '../../core/actions/requests/fetchHero';
import getAwakenedStars from '../selectors/getAwakenedStars';
import getGearForEquipReq from '../selectors/getGearForEquipReq';
import getStars from '../selectors/getStars';
import selectHero from './basic/selectHero';
import fetchHeroBaseStats from './requests/fetchHeroBaseStats';
import fetchHeroEquippedStats from './requests/fetchHeroEquippedStats';
import update from './update';

export default id => (dispatch, getState) => {
	const state = getState();
	const stars = getStars(state);
	const awakening = getAwakenedStars(state);
	const test = getGearForEquipReq(state);
	//todo: add fetchHeroBaseStats(id), fetchHeroEquippedStats(id)
	update(
		[
			fetchHero(id),
			fetchHeroBaseStats(id, stars, awakening),
			fetchHeroEquippedStats(id, {
				id,
				stars,
				level: 0,
				awakening,
				...test,
			}),
		],
		[selectHero(id)]
	)(dispatch);
};
