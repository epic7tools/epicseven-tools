import {createSelector} from 'reselect';
import {statsById} from '../../core/constants/stats';
import getGearStats from './getGearStats';

export default createSelector(
	getGearStats,
	stats => {
		const flattened = [];
		Object.entries(stats).forEach(piece => {
			Object.entries(piece[1]).forEach(line => {
				const stat = line[1];
				if (stat.stat && stat.value) {
					flattened.push({
						...stat,
						stat: statsById[stat.stat],
					});
				}
			});
		});
		return flattened;
	}
);
