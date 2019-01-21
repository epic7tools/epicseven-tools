import InputBase from '@material-ui/core/InputBase';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import classNames from 'classnames';

const style = {
	root: {},
};

const HeroToolbarInput = ({className, classes, ...props}) => (
	<InputBase
		className={classNames(classes.root, className)}
		placeholder="Select a hero"
		{...props}
	/>
);

export default withStyles(style)(HeroToolbarInput);
