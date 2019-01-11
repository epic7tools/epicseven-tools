import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import BasicSelect from '../BasicSelect';
import classNames from 'classnames';

const style = {
	root: {
		minWidth: 200,
	},
};

const GearStatSelect = ({className, classes, dispatch, ...other}) => {
	return <BasicSelect className={classNames(classes.root, className)} margin="dense" {...other} />;
};

export default withStyles(style)(GearStatSelect);
