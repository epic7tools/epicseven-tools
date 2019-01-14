import {createSelector} from 'reselect';
import {baseStats as stats} from '../../core/constants/stats';
import getGearStatsFlattened from './getGearStatsFlattened';

export default createSelector(
	getGearStatsFlattened,
	(state, hero) => hero,
	(statModifiers, hero) => {
		const gearStats = {};
		const baseStats = hero.stats.max;

		stats.filter(stat => !('extends' in stat)).forEach(stat => (gearStats[stat.id] = 0));

		statModifiers.forEach(stat => {
			if (stat.stat.extends) {
				gearStats[stat.stat.extends] += baseStats[stat.stat.extends] * (Number(stat.value) / 100);
			} else {
				gearStats[stat.stat.id] += Number(stat.value);
			}
		});

		return gearStats;
	}
);
