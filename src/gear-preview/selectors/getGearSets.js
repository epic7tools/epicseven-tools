import {createSelector} from 'reselect';
import {gearSetsById} from '../../core/constants/gearSets';
import {statsById} from '../../core/constants/stats';
import getGearStats from './getGearStats';

export default createSelector(
	getGearStats,
	stats => {
		const flattened = [];
		Object.entries(stats).forEach(([piece, {set}]) => {
			if (set) {
				const fullSet = gearSetsById[set];
				flattened.push({
					...fullSet,
					stat: fullSet.stat ? statsById[fullSet.stat] : undefined,
				});
			}
		});
		return flattened;
	}
);
