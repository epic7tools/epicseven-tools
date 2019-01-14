import {statsById} from '../constants/stats';
import equipmentTypes from '../constants/equipmentTypes';

export default () =>
	equipmentTypes.map(type => ({
		...type,
		stats: {
			main: type.stats.main.map(id => statsById[id]),
			sub: type.stats.sub.map(id => statsById[id]),
		},
	}));
