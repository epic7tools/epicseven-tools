import {makeStyles} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	alignCenter: {
		alignItems: 'center',
	},
	alignLeft: {
		alignItems: 'flex-start',
	},
	alignRight: {
		alignItems: 'flex-end',
	},
	label: {
		textAlign: 'center',
	},
	stars: {
		display: 'flex',
		alignItems: 'flex-start',
	},
});

const handleStarChange = (func, disabled, stars) => () => {
	if (!disabled) {
		func({stars});
	}
};

const StarsInput = ({
	align,
	className,
	InputProps,
	label,
	maximum,
	minimum,
	onChange,
	value,
	...props
}) => {
	const classes = useStyles();
	const stars = [];
	for (let i = 0; i < maximum; i++) {
		const disabled = !Boolean(onChange) || i + 1 < minimum;
		stars.push(
			<Star
				key={i}
				filled={i < value}
				disabled={disabled}
				onClick={handleStarChange(onChange, disabled, i + 1)}
			/>
		);
	}

	return (
		<Typography
			component="span"
			className={classNames(
				classes.root,
				{
					[classes.alignCenter]: align === 'center',
					[classes.alignLeft]: align === 'left',
					[classes.alignRight]: align === 'right',
				},
				className
			)}
		>
			<InputBase type="hidden" value={value} {...InputProps} />
			{label && (
				<InputLabel shrink className={classes.label}>
					{label}
				</InputLabel>
			)}
			<div className={classes.stars} {...props}>
				{stars}
			</div>
		</Typography>
	);
};

StarsInput.propTypes = {
	className: PropTypes.string,
	InputProps: PropTypes.object,
	label: PropTypes.node,
	maximum: PropTypes.number.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.number,
	align: PropTypes.oneOf(['center', 'left', 'right']),
};

StarsInput.defaultProps = {
	value: 0,
	minimum: 0,
	align: 'left',
};

export default StarsInput;
