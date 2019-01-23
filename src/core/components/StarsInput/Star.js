import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

const style = {
	root: {
		padding: 1,
		color: 'inherit',
	},
	disabled: {},
};

const Star = ({classes, className, disabled, filled, IconProps, ...props}) => {
	const Component = disabled ? 'div' : IconButton;
	const Icon = filled ? StarIcon : StarBorderIcon;

	return (
		<Component
			className={classNames(
				classes.root,
				{
					[classes.disabled]: disabled,
				},
				className
			)}
			{...props}
		>
			<Icon {...IconProps} />
		</Component>
	);
};

Star.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	disabled: PropTypes.bool,
	filled: PropTypes.bool,
	IconProps: PropTypes.object,
};

Star.defaultProps = {
	disabled: false,
	filled: false,
};

export default withStyles(style)(Star);
