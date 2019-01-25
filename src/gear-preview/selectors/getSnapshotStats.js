import isEmpty from 'lodash.isempty';
import {createSelector} from 'reselect';
import getSelectedHeroAwakenedStats from './getSelectedHeroAwakenedStats';
import getSnapshot from './getSnapshot';

export default createSelector(
	getSnapshot,
	getSelectedHeroAwakenedStats,
	(snapshot, baseStats) => (isEmpty(snapshot) ? baseStats : snapshot)
);
