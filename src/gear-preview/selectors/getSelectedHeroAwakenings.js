import {createSelector} from 'reselect';
import getAwakenedStars from './getAwakenedStars';
import getSelectedHero from './getSelectedHero';

export default createSelector(
	getSelectedHero,
	getAwakenedStars,
	(hero, stars) => hero.awakening.filter(awakening => awakening.rank <= stars)
);
