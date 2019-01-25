import {createSelector} from 'reselect';
import {baseStats as stats} from '../../core/constants/stats';
import getHeroGearStats from './getHeroGearStats';
import getSelectedHeroAwakenedStats from './getSelectedHeroAwakenedStats';

export default createSelector(
	getSelectedHeroAwakenedStats,
	getHeroGearStats,
	(baseStats, gearStats) => {
		const totalStats = {};
		stats.forEach(stat => {
			totalStats[stat.id] = baseStats[stat.id] + gearStats[stat.id];
		});
		return totalStats;
	}
);
