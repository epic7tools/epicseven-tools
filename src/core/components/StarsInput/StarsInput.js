import InputBase from '@material-ui/core/InputBase/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const style = {
	root: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	label: {
		textAlign: 'center',
	},
	stars: {
		display: 'flex',
		alignItems: 'flex-start',
	},
};

const handleStarChange = (func, disabled, stars) => () => {
	if (!disabled) {
		func({stars});
	}
};

const StarsInput = ({
	classes,
	className,
	InputProps,
	label,
	maximum,
	minimum,
	onChange,
	value,
	...props
}) => {
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
		<div className={classNames(classes.root, className)}>
			<InputBase type="hidden" value={value} {...InputProps} />
			{label && <InputLabel shrink>{label}</InputLabel>}
			<div className={classes.stars} {...props}>
				{stars}
			</div>
		</div>
	);
};

StarsInput.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	InputProps: PropTypes.object,
	label: PropTypes.node,
	maximum: PropTypes.number.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.number,
};

StarsInput.defaultProps = {
	value: 0,
	minimum: 0,
};

export default withStyles(style)(StarsInput);
