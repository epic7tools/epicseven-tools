import {createSelector} from 'reselect';
import getHeroTotalStats from './getHeroTotalStats';
import getSnapshotStats from './getSnapshotStats';

export default createSelector(
	getHeroTotalStats,
	getSnapshotStats,
	(total, snapshot) => {
		const diff = {};
		Object.keys(total).forEach(stat => {
			diff[stat] = total[stat] - snapshot[stat];
		});
		return diff;
	}
);
