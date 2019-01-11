import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import GearStatInput from '../GearStatInput';

const style = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
	},
});

const GearInput = ({className, classes, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<Typography variant="h5">Weapon</Typography>

		<TextField select>
			<MenuItem>Attack</MenuItem>
			<MenuItem>Attack%</MenuItem>
		</TextField>
		<GearStatInput percentage />
	</Paper>
);

export default withStyles(style)(GearInput);
