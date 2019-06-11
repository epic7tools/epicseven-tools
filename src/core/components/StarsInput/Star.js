import {makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
	root: {
		padding: 1,
		color: 'inherit',
	},
	disabled: {},
});

const Star = ({className, disabled, filled, IconProps, ...props}) => {
	const classes = useStyles();
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
	disabled: PropTypes.bool,
	filled: PropTypes.bool,
	IconProps: PropTypes.object,
};

Star.defaultProps = {
	disabled: false,
	filled: false,
};

export default Star;
