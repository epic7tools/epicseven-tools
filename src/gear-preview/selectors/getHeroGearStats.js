import {createSelector} from 'reselect';
import {baseStats as stats} from '../../core/constants/stats';
import getCompleteGearSets from './getCompleteGearSets';
import getGearStatsFlattened from './getGearStatsFlattened';
import getSelectedHero from './getSelectedHero';
import getSelectedHeroAwakenedStats from './getSelectedHeroAwakenedStats';

export default createSelector(
	getSelectedHero,
	getGearStatsFlattened,
	getCompleteGearSets,
	getSelectedHeroAwakenedStats,
	(hero, statModifiers, sets, baseStats) => {
		const gearStats = {};

		stats.forEach(stat => (gearStats[stat.id] = 0));

		const calculateStats = x => {
			if (x.stat.extends) {
				gearStats[x.stat.extends] += baseStats[x.stat.extends] * Number(x.value);
			} else {
				gearStats[x.stat.id] += Number(x.value);
			}
		};

		statModifiers.forEach(calculateStats);
		sets.forEach(calculateStats);

		return gearStats;
	}
);
