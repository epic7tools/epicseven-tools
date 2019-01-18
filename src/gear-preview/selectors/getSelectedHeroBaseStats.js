import getSelectedHero from './getSelectedHero';
import {createSelector} from 'reselect';

// this selector will eventually take the level we've requested & use those stats
export default createSelector(
	getSelectedHero,
	hero => {
		console.log('hero', hero);
		return hero.stats.max6;
	}
);
