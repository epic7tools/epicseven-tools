import ImageButtonBase from 'core/components/ImageButtonBase';
import * as PropTypes from 'prop-types';
import React from 'react';
import aquarius from './assets/aquarius.png';
import aries from './assets/aries.png';
import cancer from './assets/cancer.png';
import gemini from './assets/gemini.png';
import leo from './assets/leo.png';
import libra from './assets/libra.png';
import pisces from './assets/pisces.png';
import taurus from './assets/taurus.png';
import virgo from './assets/virgo.png';

const variants = {
	capricorn: {
		label: 'Capricorn',
	},
	virgo: {
		label: 'Virgo',
		icon: virgo,
	},
	libra: {
		label: 'Libra',
		icon: libra,
	},
	gemini: {
		label: 'Gemini',
		icon: gemini,
	},
	pisces: {
		label: 'Pisces',
		icon: pisces,
	},
	leo: {
		label: 'Leo',
		icon: leo,
	},
	cancer: {
		label: 'Cancer',
		icon: cancer,
	},
	sagittarius: {
		label: 'Sagittarius',
	},
	aquarius: {
		label: 'Aquarius',
		icon: aquarius,
	},
	aries: {
		label: 'Aries',
		icon: aries,
	},
	taurus: {
		label: 'Taurus',
		icon: taurus,
	},
	scorpio: {
		label: 'Scorpio',
	},
};

const ZodiacButton = ({variant, ...props}) => (
	<ImageButtonBase src={variants[variant].icon} label={variants[variant].label} {...props} />
);

ZodiacButton.propTypes = {
	variant: PropTypes.oneOf([
		'capricorn',
		'virgo',
		'libra',
		'gemini',
		'pisces',
		'leo',
		'cancer',
		'sagittarius',
		'aquarius',
		'aries',
		'taurus',
		'scorpio',
	]),
};

export default ZodiacButton;
