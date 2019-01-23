import getSelectedHero from './getSelectedHero';
import {createSelector} from 'reselect';
import getSelectedStars from './getSelectedStars';

export default createSelector(
	getSelectedHero,
	getSelectedStars,
	(hero, stars) => hero.stats[`max${stars}`]
);
