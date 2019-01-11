import {atk, def, hp, chc, chd, spd, eff, efr} from '../constants/stats';
import equipmentStats from './equipmentStats';
import {atkPerc, defPerc} from './equipmentStats';

const statsExcept = statFilter => equipmentStats.filter(stat => statFilter.includes(stat));

export const weapon = {
	id: 'weapon',
	label: 'Weapon',
	possibleStats: {
		main: [atk.id],
		sub: statsExcept([atk.id, def.id, defPerc.id]),
	},
};

export const helmet = {
	id: 'helmet',
	label: 'Helmet',
	possibleStats: {
		main: [hp.id],
		sub: statsExcept([hp.id]),
	},
};

export const armor = {
	id: 'armor',
	label: 'Armor',
	possibleStats: {
		main: [def.id],
		sub: statsExcept([def.id, atk.id, atkPerc.id]),
	},
};

export const necklace = {
	id: 'necklace',
	label: 'Necklace',
	possibleStats: {
		main: statsExcept([eff.id, efr.id, spd.id]),
		sub: equipmentStats,
	},
};

export const ring = {
	id: 'ring',
	label: 'Ring',
	possibleStats: {
		main: statsExcept([chc.id, chd.id, spd.id]),
		sub: equipmentStats,
	},
};

export const boots = {
	id: 'boots',
	label: 'Boots',
	possibleStats: {
		main: statsExcept([chc.id, chd.id, eff.id, efr.id]),
		sub: equipmentStats,
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
