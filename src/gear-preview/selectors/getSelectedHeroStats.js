import {createSelector} from 'reselect';
import {baseStats as stats} from '../../core/constants/stats';
import getHeroGearStats from './getHeroGearStats';
import getHeroStatDiff from './getHeroStatDiff';
import getHeroTotalStats from './getHeroTotalStats';
import getSelectedHeroAwakenedStats from './getSelectedHeroAwakenedStats';

export default createSelector(
	getSelectedHeroAwakenedStats,
	getHeroGearStats,
	getHeroTotalStats,
	getHeroStatDiff,
	(base, gear, total, diff) =>
		stats.map(stat => ({
			id: stat.id,
			label: stat.label,
			percentage: stat.percentage,
			base: base[stat.id],
			gear: gear[stat.id],
			total: total[stat.id],
			diff: diff[stat.id],
		}))
);
