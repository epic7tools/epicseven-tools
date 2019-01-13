import React from 'react';
import BasicSelect from '../../../core/components/BasicSelect';

const HeroSelect = ({dispatch, ...other}) => {
	return <BasicSelect label="Select a hero" fullWidth {...other} />;
};

export default HeroSelect;
