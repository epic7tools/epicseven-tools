import BasicSelect from 'core/components/BasicSelect';
import React from 'react';

const handleChange = onChange => event => {
	if (onChange) {
		onChange(event.target.value);
	}
};

const GearSetSelect = ({onChange, ...other}) => {
	return (
		<BasicSelect
			label="Select a gearset"
			margin="dense"
			fullWidth
			onChange={handleChange(onChange)}
			{...other}
		/>
	);
};

export default GearSetSelect;
