import React from 'react';
import knight from './assets/knight.png';
import mage from './assets/mage.png';
import material from './assets/material.png';
import ranger from './assets/ranger.png';
import soulWeaver from './assets/soul-weaver.png';
import thief from './assets/thief.png';
import warrior from './assets/warrior.png';

const variants = {
	knight,
	mage,
	material,
	ranger,
	'soul-weaver': soulWeaver,
	thief,
	warrior,
};

export default ({variant, ...props}) => <img src={variants[variant]} alt={variant} {...props} />;
