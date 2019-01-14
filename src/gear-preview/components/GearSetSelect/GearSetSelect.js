import React from 'react';
import BasicSelect from '../../../core/components/BasicSelect';

const GearSetSelect = ({dispatch, ...other}) => {
	return <BasicSelect label="Select a gearset" margin="dense" fullWidth {...other} />;
};

export default GearSetSelect;
