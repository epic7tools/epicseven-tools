import {gearSets} from '../constants/gearSets';
import {statsById} from '../constants/stats';

export default () =>
	gearSets.map(set => ({
		...set,
		stat: statsById[set.stat],
	}));
