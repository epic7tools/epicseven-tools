import {equipmentStatsById} from '../constants/equipmentStats';
import equipmentTypes from '../constants/equipmentTypes';

export default () =>
	equipmentTypes.map(type => ({
		...type,
		stats: {
			main: type.stats.main.map(id => equipmentStatsById[id]),
			sub: type.stats.sub.map(id => equipmentStatsById[id]),
		},
	}));
