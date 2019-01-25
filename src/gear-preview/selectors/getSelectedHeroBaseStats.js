import {ca, dmg, ls} from '../../core/constants/stats';
import getSelectedHero from './getSelectedHero';
import {createSelector} from 'reselect';
import getSelectedStars from './getSelectedStars';

export default createSelector(
	getSelectedHero,
	getSelectedStars,
	(hero, stars) => ({
		[ls.id]: 0,
		[ca.id]: 0,
		[dmg.id]: 0,
		...hero.stats[`max${stars}`],
	})
);
