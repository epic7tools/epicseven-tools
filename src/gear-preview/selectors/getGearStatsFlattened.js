import {createSelector} from 'reselect';
import {equipmentStatsById} from '../../core/constants/equipmentStats';
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
						stat: equipmentStatsById[stat.stat],
					});
				}
			});
		});
		return flattened;
	}
);
