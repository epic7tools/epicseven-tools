import InputAdornment from '@material-ui/core/InputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import React from 'react';

const style = {
	root: {
		width: 80,
	},
};

const GearStatValueInput = ({className, classes, percentage, ...props}) => {
	const endAdornment = percentage ? <InputAdornment position="end">%</InputAdornment> : null;

	return (
		<TextField
			className={classNames(classes.root, className)}
			margin="dense"
			type="number"
			variant="outlined"
			InputProps={{
				endAdornment,
			}}
			{...props}
		/>
	);
};

export default withStyles(style)(GearStatValueInput);
