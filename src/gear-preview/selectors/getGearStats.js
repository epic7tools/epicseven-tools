import {createSelector} from 'reselect';
import mergeWith from 'lodash.mergewith';
import getBaseStats from './getBaseStats';
import getTotalStats from './getTotalStats';

export default createSelector(
	getBaseStats,
	getTotalStats,
	(base, equipped) => mergeWith(equipped, base, (e, b) => e - b)
);
