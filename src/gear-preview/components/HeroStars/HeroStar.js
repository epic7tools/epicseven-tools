import IconButton from '@material-ui/core/es/IconButton/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import React from 'react';

const style = {
	root: {
		padding: 1,
	},
};

const HeroStar = ({awakened, className, classes, component, IconProps, ...props}) => {
	const Icon = awakened ? Star : StarBorder;
	const Component = component ? component : IconButton;

	return (
		<Component className={classes.root} {...props}>
			<Icon {...IconProps} />
		</Component>
	);
};

export default withStyles(style)(HeroStar);
