import getGearSets from './getGearSets';
import {createSelector} from 'reselect';

export default createSelector(
	getGearSets,
	sets => {
		const counts = {};
		const setsById = {};

		// count how many of each set we've got
		sets.forEach(set => {
			if (!(set.id in counts)) {
				counts[set.id] = 1;
				setsById[set.id] = set;
			} else {
				counts[set.id]++;
			}
		});

		const completedSets = [];
		Object.keys(counts).forEach(setId => {
			const set = setsById[setId];
			const count = counts[setId];
			const effectCount = Math.floor(count / set.required);
			for (let i = 0; i < effectCount; i++) {
				completedSets.push(set);
			}
		});
		return completedSets;
	}
);
