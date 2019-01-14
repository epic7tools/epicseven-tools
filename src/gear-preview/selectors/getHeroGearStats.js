import {createSelector} from 'reselect';
import {baseStats as stats} from '../../core/constants/stats';
import getCompleteGearSets from './getCompleteGearSets';
import getGearStatsFlattened from './getGearStatsFlattened';

export default createSelector(
	(state, hero) => hero,
	getGearStatsFlattened,
	getCompleteGearSets,
	(hero, statModifiers, sets) => {
		const gearStats = {};
		const baseStats = hero.stats.max;

		stats.filter(stat => !('extends' in stat)).forEach(stat => (gearStats[stat.id] = 0));

		const calculateStats = x => {
			if (x.stat.extends) {
				gearStats[x.stat.extends] += baseStats[x.stat.extends] * (Number(x.value) / 100);
			} else {
				gearStats[x.stat.id] += Number(x.value);
			}
		};

		statModifiers.forEach(calculateStats);
		sets.forEach(calculateStats);

		return gearStats;
	}
);
