import {atkPerc, ca, chc, chd, defPerc, dmg, eff, efr, hpPerc, ls, spdPerc} from './stats';

export const attack = Object.freeze({
	id: 'attack',
	label: 'Attack Set',
	stat: atkPerc.id,
	value: 0.35,
	required: 4,
});

export const critical = Object.freeze({
	id: 'critical',
	label: 'Critical Set',
	stat: chc.id,
	value: 0.12,
	required: 2,
});

export const health = Object.freeze({
	id: 'health',
	label: 'Health Set',
	stat: hpPerc.id,
	value: 0.15,
	required: 2,
});

export const lifesteal = Object.freeze({
	id: 'lifesteal',
	label: 'Lifesteal Set',
	stat: ls.id,
	value: 0.2,
	required: 4,
});

export const hit = Object.freeze({
	id: 'hit',
	label: 'Hit Set',
	stat: eff.id,
	value: 0.2,
	required: 2,
});

export const speed = Object.freeze({
	id: 'speed',
	label: 'Speed Set',
	stat: spdPerc.id,
	value: 0.25,
	required: 4,
});

export const destruction = Object.freeze({
	id: 'destruction',
	label: 'Destruction Set',
	stat: chd.id,
	value: 0.4,
	required: 4,
});

export const counter = Object.freeze({
	id: 'counter',
	label: 'Counter Set',
	stat: ca.id,
	value: 0.2,
	required: 4,
});

export const resist = Object.freeze({
	id: 'resist',
	label: 'Resist Set',
	stat: efr.id,
	value: 0.2,
	required: 2,
});

export const defense = Object.freeze({
	id: 'defense',
	label: 'Defense Set',
	stat: defPerc.id,
	value: 0.15,
	required: 2,
});

export const rage = Object.freeze({
	id: 'rage',
	label: 'Rage Set',
	stat: dmg.id,
	value: 0.3,
	required: 4,
});

export const immunity = Object.freeze({
	id: 'immunity',
	label: 'Immunity Set',
	required: 2,
});

export const gearSets = Object.freeze([
	attack,
	critical,
	destruction,
	speed,
	health,
	defense,
	lifesteal,
	hit,
	resist,
	counter,
	rage,
	immunity,
]);

export const gearSetsById = Object.freeze({
	attack,
	critical,
	destruction,
	speed,
	health,
	defense,
	lifesteal,
	hit,
	resist,
	counter,
	rage,
	immunity,
});

export default gearSets;
