import ImageButtonBase from 'core/components/ImageButtonBase';
import * as PropTypes from 'prop-types';
import React from 'react';
import knight from './assets/knight.png';
import mage from './assets/mage.png';
import material from './assets/material.png';
import ranger from './assets/ranger.png';
import soulWeaver from './assets/soul-weaver.png';
import thief from './assets/thief.png';
import warrior from './assets/warrior.png';

const variants = {
	knight: {
		label: 'Knight',
		icon: knight,
	},
	mage: {
		label: 'Mage',
		icon: mage,
	},
	material: {
		label: 'Material',
		icon: material,
	},
	ranger: {
		label: 'Ranger',
		icon: ranger,
	},
	'soul-weaver': {
		label: 'Soul Weaver',
		icon: soulWeaver,
	},
	thief: {
		label: 'Thief',
		icon: thief,
	},
	warrior: {
		label: 'Warrior',
		icon: warrior,
	},
};

const ClassButton = ({variant, ...props}) => (
	<ImageButtonBase src={variants[variant].icon} label={variants[variant].label} {...props} />
);

ClassButton.propTypes = {
	variant: PropTypes.oneOf([
		'knight',
		'mage',
		'material',
		'ranger',
		'soul-weaver',
		'thief',
		'warrior',
	]),
};

export default ClassButton;
