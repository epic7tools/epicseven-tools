import getSelectedHeroAwakenedStats from './getSelectedHeroAwakenedStats';
import getSnapshot from './getSnapshot';

export default createSelector(
	getSnapshot,
	getSelectedHeroAwakenedStats,
	(snapshot, baseStats) => (snapshot ? snapshot : baseStats)
);
