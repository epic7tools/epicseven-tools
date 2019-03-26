import mergeWith from 'lodash.mergewith';
import {createSelector} from 'reselect';
import getBaseStats from './getBaseStats';
import getTotalStats from './getTotalStats';

export default createSelector(
	getBaseStats,
	getTotalStats,
	(base, total) => {
		return mergeWith({...total}, base, (t, b) => t - b);
	}
);
