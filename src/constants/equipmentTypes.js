import {atk, def, hp, chc, chd, spd, eff, efr} from '../constants/stats';
import {atkPerc, hpPerc, defPerc} from './equipmentStats';

const weapon = {
	id: 'weapon',
	name: 'Weapon',
	possibleStats: {
		main: [atk.id],
		sub: [atkPerc.id, hp.id, hpPerc.id, chc.id, chd.id, spd, eff, efr],
	},
};

const helmet = {
	id: 'helmet',
	name: 'Helmet',
	possibleStats: {
		main: [hp.id],
		sub: [atk.id, atkPerc.id, hpPerc.id, def.id, defPerc.id, chc.id, chd.id, spd, eff, efr],
	},
};

const armor = {
	id: 'armor',
	name: 'Armor',
	possibleStats: {
		main: [def.id],
		sub: [hp.id, hpPerc.id, defPerc.id, chc.id, chd.id, spd.id, eff.id, efr.id],
	},
};

export const necklace = {
	id: 'necklace',
	name: 'Necklace',
	possibleStats: {
		main: [atk.id, atkPerc.id, hp.id, hpPerc.id, def.id, defPerc.id, chc.id, chd.id],
		sub: [atk.id, atkPerc.id, hp.id, hpPerc.id, def.id, defPerc.id, chc.id, chd.id, spd, eff, efr],
	},
};

export const ring = {
	id: 'ring',
	name: 'Ring',
	possibleStats: {
		main: [atk.id, atkPerc.id, hp.id, hpPerc.id, def.id, defPerc.id, eff, efr],
		sub: [atk.id, atkPerc.id, hp.id, hpPerc.id, def.id, defPerc.id, chc.id, chd.id, spd, eff, efr],
	},
};

export const boots = {
	id: 'boots',
	name: 'Boots',
	possibleStats: {
		main: [atk.id, atkPerc.id, hp.id, hpPerc.id, def.id, defPerc.id, spd.id],
		sub: [
			atk.id,
			atkPerc.id,
			hp.id,
			hpPerc.id,
			def.id,
			defPerc.id,
			chc.id,
			chd.id,
			spd.id,
			eff.id,
			efr.id,
		],
	},
};
