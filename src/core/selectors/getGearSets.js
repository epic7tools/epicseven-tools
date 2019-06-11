import {gearSets} from 'core/constants/gearSets';
import {statsById} from 'core/constants/stats';

export default () =>
	gearSets.map(set => ({
		...set,
		stat: statsById[set.stat],
	}));
