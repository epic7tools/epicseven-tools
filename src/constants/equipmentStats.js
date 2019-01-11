import {statsById} from './stats';

export const atkPerc = Object.freeze({
	id: 'atk%',
	label: 'Attack%',
	percentage: true,
	extends: 'atk',
});

export const hpPerc = Object.freeze({
	id: 'hp%',
	label: 'Health%',
	percentage: true,
	extends: 'hp',
});

export const defPerc = Object.freeze({
	id: 'def%',
	label: 'Defense',
	percentage: true,
	extends: 'def',
});

export const equipmentStatsById = Object.freeze({
	...statsById,
	'atk%': atkPerc,
	'hp%': hpPerc,
	'def%': defPerc,
});
