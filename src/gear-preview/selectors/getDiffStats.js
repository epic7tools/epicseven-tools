import mergeWith from 'lodash.mergewith';
import {createSelector} from 'reselect';
import getSnapshotStats from './getSnapshotStats';
import getHeroTotalStats from './getTotalStats';

export default createSelector(
	getHeroTotalStats,
	getSnapshotStats,
	(total, snapshot) => mergeWith({...total}, snapshot, (t, s) => t - s)
);
