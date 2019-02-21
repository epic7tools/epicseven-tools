import {createSelector} from 'reselect';
import {statsById} from '../../core/constants/stats';
import getSelectedHeroAwakenings from './getSelectedHeroAwakenings';
import getSelectedHeroBaseStats from './getSelectedHeroBaseStats';

const isInt = num => num % 1 === 0;

export default createSelector(
	getSelectedHeroBaseStats,
	getSelectedHeroAwakenings,
	(baseStats, awakenings) => {
		const newBaseStats = {
			...baseStats,
		};
		awakenings.forEach(awakening => {
			awakening.statsIncrease.forEach(increase => {
				Object.entries(increase).forEach(([stat, value]) => {
					// handling some bad data with empty keys
					if (stat) {
						// if we are not working with a percentage stat
						// AND the value is not an integer, assume that we are adding
						// a percentage of the base stats
						newBaseStats[stat] +=
							!statsById[stat].percentage && !isInt(value) ? baseStats[stat] * value : value;
					}
				});
			});
		});

		return newBaseStats;
	}
);
