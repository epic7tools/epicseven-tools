export const atk = Object.freeze({
	id: 'atk',
	label: 'Attack',
	percentage: false,
	gearLine: true,
});

export const hp = Object.freeze({
	id: 'hp',
	label: 'Health',
	percentage: false,
	gearLine: true,
});

export const def = Object.freeze({
	id: 'def',
	label: 'Defense',
	percentage: false,
	gearLine: true,
});

export const spd = Object.freeze({
	id: 'spd',
	label: 'Speed',
	percentage: false,
	gearLine: true,
});

export const chc = Object.freeze({
	id: 'chc',
	label: 'Critical Hit Chance',
	percentage: true,
	gearLine: true,
});

export const chd = Object.freeze({
	id: 'chd',
	label: 'Critical Hit Damage',
	percentage: true,
	gearLine: true,
});

export const eff = Object.freeze({
	id: 'eff',
	label: 'Effectiveness',
	percentage: true,
	gearLine: true,
});

export const efr = Object.freeze({
	id: 'efr',
	label: 'Effect Resistance',
	percentage: true,
	gearLine: true,
});

export const dac = Object.freeze({
	id: 'dac',
	label: 'Dual Attack Chance',
	percentage: true,
	gearLine: false,
});

export const ls = Object.freeze({
	id: 'ls',
	label: 'Lifesteal',
	percentage: true,
	gearLine: false,
});

export const ca = Object.freeze({
	id: 'ca',
	label: 'Counterattack',
	percentage: true,
	gearLine: false,
});

export const dmg = Object.freeze({
	id: 'dmg',
	label: 'Damage',
	percentage: true,
	gearLine: false,
});

export const atkPerc = Object.freeze({
	id: 'atk%',
	label: 'Attack%',
	percentage: true,
	extends: 'atk',
	gearLine: true,
});

export const hpPerc = Object.freeze({
	id: 'hp%',
	label: 'Health%',
	percentage: true,
	extends: 'hp',
	gearLine: true,
});

export const defPerc = Object.freeze({
	id: 'def%',
	label: 'Defense%',
	percentage: true,
	extends: 'def',
	gearLine: true,
});

export const spdPerc = Object.freeze({
	id: 'spd%',
	label: 'Speed%',
	percentage: true,
	extends: 'spd',
	gearLine: false,
});

export const stats = Object.freeze([
	atk,
	atkPerc,
	hp,
	hpPerc,
	def,
	defPerc,
	spd,
	spdPerc,
	chc,
	chd,
	eff,
	efr,
	dac,
	ls,
	ca,
	dmg,
]);

export const statsById = Object.freeze({
	atk,
	hp,
	def,
	spd,
	chc,
	chd,
	eff,
	efr,
	dac,
	ls,
	ca,
	dmg,
	'atk%': atkPerc,
	'hp%': hpPerc,
	'def%': defPerc,
	'spd%': spdPerc,
});

export const baseStats = Object.freeze(stats.filter(stat => !('extends' in stat)));
export const gearLines = Object.freeze(stats.filter(stat => stat.gearLine));

export default stats;
