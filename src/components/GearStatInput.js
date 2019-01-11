import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';

const style = {
	root: {},
};

const GearStatInput = ({className, classes, ...props}) => (
	<div className={classNames(classes.root, className)} {...props} />
);

export default withStyles(style)(GearStatInput);
