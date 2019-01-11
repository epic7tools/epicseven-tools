import React from 'react';
import BasicSelect from '../BasicSelect';

const HeroSelect = ({dispatch, ...other}) => {
	return <BasicSelect label="Select a hero" fullWidth {...other} />;
};

export default HeroSelect;
