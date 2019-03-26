import {createSelector} from 'reselect';
import getAwakenedStars from './getAwakenedStars';
import getGearForEquipReq from './getGearForEquipReq';
import getHeroId from './getHeroId';
import getStagedAwakenedStars from './getStagedAwakenedStars';
import getStagedHeroId from './getStagedHeroId';
import getStagedStars from './getStagedStars';
import getStars from './getStars';

export default createSelector(
	getHeroId,
	getStagedHeroId,
	getStars,
	getStagedStars,
	getAwakenedStars,
	getStagedAwakenedStars,
	getGearForEquipReq,
	(heroId, stagedHeroId, stars, stagedStars, awakening, stagedAwakening, gear) => ({
		id: stagedHeroId ? stagedHeroId : heroId,
		stars: stagedStars ? stagedStars : stars,
		awakening: stagedAwakening ? stagedAwakening : awakening,
		gear,
	})
);
