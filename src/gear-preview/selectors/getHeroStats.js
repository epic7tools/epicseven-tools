import {createSelector} from 'reselect';
import getHeroBaseStats from './getHeroBaseStats';
import getHeroEquippedStats from './getHeroEquippedStats';
import getHeroSnapshotStats from './getHeroSnapshotStats';

export default createSelector(
	getHeroBaseStats,
	getHeroEquippedStats,
	getHeroSnapshotStats,
	(base, equipped, snapshot) => {} // make this look like what's returned from getSelectedHeroStats
);
