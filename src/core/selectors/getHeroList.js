import {createSelector} from 'reselect';
import getHeroes from './getHeroes';

export default createSelector(
	getHeroes,
	heroes =>
		heroes.map(hero => ({
			label: hero.name,
			value: hero._id,
		}))
);
