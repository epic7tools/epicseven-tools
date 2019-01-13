import {atk, chc, chd, def, eff, efr, hp, spd} from './stats';
import equipmentStats, {atkPerc, defPerc} from './equipmentStats';

const equipmentStatIds = equipmentStats.map(stat => stat.id);

const statsExcept = statFilter => equipmentStatIds.filter(stat => !statFilter.includes(stat));

export const weapon = {
	id: 'weapon',
	label: 'Weapon',
	stats: {
		main: [atk.id],
		sub: statsExcept([atk.id, def.id, defPerc.id]),
	},
};

export const helmet = {
	id: 'helmet',
	label: 'Helmet',
	stats: {
		main: [hp.id],
		sub: statsExcept([hp.id]),
	},
};

export const armor = {
	id: 'armor',
	label: 'Armor',
	stats: {
		main: [def.id],
		sub: statsExcept([def.id, atk.id, atkPerc.id]),
	},
};

export const necklace = {
	id: 'necklace',
	label: 'Necklace',
	stats: {
		main: statsExcept([eff.id, efr.id, spd.id]),
		sub: equipmentStatIds,
	},
};

export const ring = {
	id: 'ring',
	label: 'Ring',
	stats: {
		main: statsExcept([chc.id, chd.id, spd.id]),
		sub: equipmentStatIds,
	},
};

export const boots = {
	id: 'boots',
	label: 'Boots',
	stats: {
		main: statsExcept([chc.id, chd.id, eff.id, efr.id]),
		sub: equipmentStatIds,
	},
};

export const equipmentTypesById = {
	weapon,
	helmet,
	armor,
	necklace,
	ring,
	boots,
};

export const equipmentTypes = [weapon, helmet, armor, necklace, ring, boots];

export default equipmentTypes;
