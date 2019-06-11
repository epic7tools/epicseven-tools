import {makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import BasicSelect from 'core/components/BasicSelect';
import React from 'react';

const useStyles = makeStyles({
	root: {
		minWidth: 200,
	},
});

const GearStatSelect = ({className, ...props}) => {
	const classes = useStyles();
	return <BasicSelect className={classNames(classes.root, className)} margin="dense" {...props} />;
};

export default GearStatSelect;
