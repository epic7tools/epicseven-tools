import equipmentTypes from 'core/constants/equipmentTypes';
import {statsById} from 'core/constants/stats';

export default () =>
	equipmentTypes.map(type => ({
		...type,
		stats: {
			main: type.stats.main.map(id => statsById[id]),
			sub: type.stats.sub.map(id => statsById[id]),
		},
	}));
