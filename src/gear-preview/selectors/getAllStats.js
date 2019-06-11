import {baseStats as stats} from 'core/constants/stats';
import {createSelector} from 'reselect';
import getBaseStats from './getBaseStats';
import getDiffStats from './getDiffStats';
import getGearStats from './getGearStats';
import getTotalStats from './getTotalStats';

export default createSelector(
	getBaseStats,
	getGearStats,
	getTotalStats,
	getDiffStats,
	(base, gear, total, diff) =>
		stats.map(stat => ({
			id: stat.id,
			label: stat.label,
			percentage: stat.percentage,
			base: base[stat.id] || 0,
			gear: gear[stat.id] || 0,
			total: total[stat.id] || 0,
			diff: diff[stat.id] || 0,
		}))
);
