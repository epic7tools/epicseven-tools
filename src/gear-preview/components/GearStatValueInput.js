import {makeStyles} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles({
	root: {
		width: 100,
	},
});

const GearStatValueInput = ({className, percentage, ...props}) => {
	const classes = useStyles();
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

export default GearStatValueInput;
