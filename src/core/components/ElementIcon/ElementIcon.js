import React from 'react';
import dark from './assets/dark.png';
import earth from './assets/earth.png';
import fire from './assets/fire.png';
import ice from './assets/ice.png';
import light from './assets/light.png';

const variants = {dark, light, fire, ice, earth};

export default ({variant, ...props}) => <img src={variants[variant]} alt={variant} {...props} />;
