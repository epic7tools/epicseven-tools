import ImageButtonBase from 'core/components/ImageButtonBase';
import * as PropTypes from 'prop-types';
import React from 'react';
import dark from './assets/dark.png';
import earth from './assets/earth.png';
import fire from './assets/fire.png';
import ice from './assets/ice.png';
import light from './assets/light.png';

const variants = {
	ice: {
		label: 'Ice',
		icon: ice,
	},
	earth: {
		label: 'Earth',
		icon: earth,
	},
	fire: {
		label: 'Fire',
		icon: fire,
	},
	light: {
		label: 'Light',
		icon: light,
	},
	dark: {
		label: 'Dark',
		icon: dark,
	},
};

const ElementButton = ({variant, ...props}) => (
	<ImageButtonBase src={variants[variant].icon} label={variants[variant].label} {...props} />
);

ElementButton.propTypes = {
	variant: PropTypes.oneOf(['ice', 'earth', 'fire', 'light', 'dark']),
};

export default ElementButton;
