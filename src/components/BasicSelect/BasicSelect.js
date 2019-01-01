import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import * as PropTypes from 'prop-types';
import React from 'react';
import * as propTypes from './propTypes';

const BasicSelect = ({items, itemProps, iconProps, avatarProps, textProps, ...other}) => (
	<TextField select fullWidth {...other}>
		{items.map(item => (
			<MenuItem key={item.value} value={item.value} {...itemProps}>
				{item.icon && <ListItemIcon {...iconProps}>{item.icon}</ListItemIcon>}
				{item.avatar && <ListItemAvatar {...avatarProps}>{item.avatar}</ListItemAvatar>}
				<ListItemText primary={item.label} secondary={item.secondary} {...textProps} />
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
