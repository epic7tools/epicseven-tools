export const atk = Object.freeze({
	id: 'atk',
	label: 'Attack',
	percentage: false,
});

export const hp = Object.freeze({
	id: 'hp',
	label: 'Health',
	percentage: false,
});

export const def = Object.freeze({
	id: 'def',
	label: 'Defense',
	percentage: false,
});

export const spd = Object.freeze({
	id: 'spd',
	label: 'Speed',
	percentage: false,
});

export const chc = Object.freeze({
	id: 'chc',
	label: 'Critical Hit Chance',
	percentage: true,
});

export const chd = Object.freeze({
	id: 'chd',
	label: 'Critical Hit Damage',
	percentage: true,
});

export const eff = Object.freeze({
	id: 'eff',
	label: 'Effectiveness',
	percentage: true,
});

export const efr = Object.freeze({
	id: 'efr',
	label: 'Effect Resistance',
	percentage: true,
});

export const dac = Object.freeze({
	id: 'dac',
	label: 'Dual Attack Chance',
	percentage: true,
});

export const stats = Object.freeze([atk, hp, def, spd, chc, chd, eff, efr, dac]);
export const statsById = Object.freeze({atk, hp, def, spd, chc, chd, eff, efr, dac});

export default stats;
