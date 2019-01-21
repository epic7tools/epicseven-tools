import {createSelector} from 'reselect';
import {statsById} from '../../core/constants/stats';
import getSelectedHeroAwakenings from './getSelectedHeroAwakenings';
import getSelectedHeroBaseStats from './getSelectedHeroBaseStats';

// handles deprecated "3%" style strings
const getIncrease = value => {
	if (typeof value !== 'string') {
		return value;
	}
	return value.endsWith('%') ? parseFloat(value) / 100 : parseInt(value);
};

export default createSelector(
	getSelectedHeroBaseStats,
	getSelectedHeroAwakenings,
	(baseStats, awakenings) => {
		const newBaseStats = {
			...baseStats,
		};
		awakenings.forEach(awakening => {
			awakening.statsIncrease.forEach(increase => {
				Object.entries(increase).forEach(i => {
					const stat = i[0];
					const value = getIncrease(i[1]);
					// handling some bad data with empty keys
					if (stat) {
						if (value < 1) {
							newBaseStats[stat] += statsById[stat].percentage
								? value * 100
								: baseStats[stat] * value;
						} else {
							newBaseStats[stat] += value;
						}
					}
				});
			});
		});

		return newBaseStats;
	}
);
