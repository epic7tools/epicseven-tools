import {createSelector} from 'reselect';
import {statsById} from '../../core/constants/stats';
import getGearStats from './getGearStats';

export default createSelector(
	getGearStats,
	stats => {
		const flattened = [];
		Object.entries(stats).forEach(piece => {
			Object.entries(piece[1]).forEach(([line, stat]) => {
				if (stat.stat && stat.value) {
					flattened.push({
						...stat,
						// if it's a percentage stat, divide it by 100 to get actual percentage
						value: statsById[stat.stat].percentage ? stat.value / 100 : stat.value,
						stat: statsById[stat.stat],
					});
				}
			});
		});
		return flattened;
	}
);
