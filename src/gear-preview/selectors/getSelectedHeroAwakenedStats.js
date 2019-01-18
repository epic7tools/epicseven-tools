import {createSelector} from 'reselect';
import {statsById} from '../../core/constants/stats';
import getSelectedHeroAwakenings from './getSelectedHeroAwakenings';
import getSelectedHeroBaseStats from './getSelectedHeroBaseStats';

// handles deprecated "3%" style strings
const getIncrease = value => (typeof value === 'string' ? parseFloat(value) / 100 : value);

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
					if (value < 1) {
						newBaseStats[stat] += statsById[stat].percentage
							? value * 100
							: baseStats[stat] * value;
					} else {
						newBaseStats[stat] += value;
					}
				});
			});
		});

		return newBaseStats;
	}
);
