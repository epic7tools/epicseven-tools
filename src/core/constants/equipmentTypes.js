import {atk, chc, chd, def, eff, efr, hp, spd} from './stats';
import stats, {atkPerc, defPerc} from './stats';

const equipmentStatIds = stats.filter(stat => stat.gearLine).map(stat => stat.id);

const statsExcept = statFilter => equipmentStatIds.filter(stat => !statFilter.includes(stat));

export const weapon = Object.freeze({
	id: 'weapon',
	label: 'Weapon',
	stats: {
		main: [atk.id],
		sub: statsExcept([atk.id, def.id, defPerc.id]),
	},
});

export const helmet = Object.freeze({
	id: 'helmet',
	label: 'Helmet',
	stats: {
		main: [hp.id],
		sub: statsExcept([hp.id]),
	},
});

export const armour = Object.freeze({
	id: 'armour',
	label: 'armour',
	stats: {
		main: [def.id],
		sub: statsExcept([def.id, atk.id, atkPerc.id]),
	},
});

export const necklace = Object.freeze({
	id: 'necklace',
	label: 'Necklace',
	stats: {
		main: statsExcept([eff.id, efr.id, spd.id]),
		sub: equipmentStatIds,
	},
});

export const ring = Object.freeze({
	id: 'ring',
	label: 'Ring',
	stats: {
		main: statsExcept([chc.id, chd.id, spd.id]),
		sub: equipmentStatIds,
	},
});

export const boots = Object.freeze({
	id: 'boots',
	label: 'Boots',
	stats: {
		main: statsExcept([chc.id, chd.id, eff.id, efr.id]),
		sub: equipmentStatIds,
	},
});

export const equipmentTypesById = Object.freeze({
	weapon,
	helmet,
	armour,
	necklace,
	ring,
	boots,
});

export const equipmentTypes = Object.freeze([weapon, helmet, armour, necklace, ring, boots]);

export default equipmentTypes;
