import isEmpty from 'lodash.isempty';
import {createSelector} from 'reselect';
import getBaseStats from './getBaseStats';
import getSnapshot from './getSnapshot';

export default createSelector(
	getSnapshot,
	getBaseStats,
	(snapshot, baseStats) => (isEmpty(snapshot) ? baseStats : snapshot)
);
