import getGearStats from './getGearStats';
import getSelectedHero from './getSelectedHero';
import {createSelector} from 'reselect';

export default createSelector(
	getSelectedHero,
	getGearStats,
	(hero, gear) => hero
);
