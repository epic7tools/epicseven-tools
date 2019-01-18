import getSelectedHero from './getSelectedHero';
import {createSelector} from 'reselect';
import getSelectedLevel from './getSelectedLevel';

export default createSelector(
	getSelectedHero,
	getSelectedLevel,
	(hero, lvl) => hero.stats[lvl]
);
