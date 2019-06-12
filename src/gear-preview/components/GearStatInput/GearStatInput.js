import {makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import {statsById} from 'core/constants/stats';
import GearStatSelect from 'gear-preview/components/GearStatSelect';
import GearStatValueInput from 'gear-preview/components/GearStatValueInput';
import * as PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *:not(:last-child)': {
			marginRight: theme.spacing(1),
		},
	},
}));

const GearStatInput = ({className, label, stats, defaultStat, onChange, values, ...props}) => {
	const classes = useStyles();
	const handleChange = event => {
		if (onChange) {
			onChange({
				event: event.type,
				line: props.name,
				name: event.target.name,
				value: event.target.value,
			});
		}
	};

	const disabled = Boolean(defaultStat);
	const percentage = values.stat && statsById[values.stat].percentage;

	return (
		<div className={classNames(classes.root, className)} {...props}>
			<GearStatSelect
				name="stat"
				disabled={disabled}
				onChange={handleChange}
				label={label}
				stats={stats}
				value={values.stat}
			/>
			<GearStatValueInput
				name="value"
				onBlur={handleChange}
				onChange={handleChange}
				percentage={percentage}
				value={values.currentValue}
			/>
		</div>
	);
};

GearStatInput.propTypes = {
	className: PropTypes.any,
	label: PropTypes.any,
	name: PropTypes.any,
};

export default GearStatInput;
