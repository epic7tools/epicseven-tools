import React from 'react';
import BasicSelect from '../BasicSelect';

const HeroSelect = ({dispatch, ...other}) => {
	return <BasicSelect label="Select a hero" variant="outlined" fullWidth {...other} />;
};

export default HeroSelect;
