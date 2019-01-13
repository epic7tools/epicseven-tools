import {createSelector} from 'reselect';
import {hpPerc} from '../constants/equipmentStats';
import {stats} from '../constants/stats';
import getGearStatsFlattened from './getGearStatsFlattened';

export default createSelector(
	getGearStatsFlattened,
	(state, hero) => hero,
	(statModifiers, hero) => {
		const baseStats = hero.stats.max;
		const gearStats = {};
		stats.forEach(stat => (gearStats[stat.id] = 0));

		statModifiers.push({
			stat: hpPerc,
			value: 15,
		});
		statModifiers.push({
			stat: hpPerc,
			value: 15,
		});
		statModifiers.push({
			stat: hpPerc,
			value: 15,
		});

		statModifiers.map(x => {
			console.log('x', x);
			if (x.stat.extends) {
				gearStats[x.stat.extends] += (baseStats[x.stat.extends] / 100.0) * Number(x.value);
			} else {
				gearStats[x.stat.id] += Number(x.value);
			}
		});

		console.log(gearStats);
		return gearStats;
	}
);
