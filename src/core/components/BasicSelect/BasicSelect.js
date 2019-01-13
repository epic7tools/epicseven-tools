import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import * as PropTypes from 'prop-types';
import React from 'react';
import * as propTypes from './propTypes';

const BasicSelect = ({items, itemProps, ...other}) => (
	<TextField select variant="outlined" {...other}>
		{items.map(item => (
			<MenuItem key={item.value} value={item.value} dense {...itemProps}>
				{item.label}
			</MenuItem>
		))}
	</TextField>
);

BasicSelect.defaultProps = {
	items: [],
};

BasicSelect.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape(propTypes.item)),
	itemProps: PropTypes.object,
};

export default BasicSelect;
