import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import GearSetSelect from 'gear-preview/components/GearSetSelect';
import GearStatInput from 'gear-preview/components/GearStatInput';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2),
		minWidth: 340,
	},
}));

const GearInput = ({
	className,
	label,
	name,
	stats,
	onChange,
	onGearsetChange,
	values,
	...props
}) => {
	const classes = useStyles();
	return (
		<Paper className={classNames(classes.root, className)} {...props}>
			<Typography variant="h5">{label}</Typography>
			<GearSetSelect name="set" onChange={onGearsetChange} value={values.set} />
			<GearStatInput
				stats={stats.main}
				label="Main Stat"
				name="main"
				onChange={onChange}
				values={values.main}
			/>
			<GearStatInput
				name="sub1"
				label="Sub Stat #1"
				stats={stats.sub}
				onChange={onChange}
				values={values.sub1}
			/>
			<GearStatInput
				name="sub2"
				label="Sub Stat #2"
				stats={stats.sub}
				onChange={onChange}
				values={values.sub2}
			/>
			<GearStatInput
				name="sub3"
				label="Sub Stat #3"
				stats={stats.sub}
				onChange={onChange}
				values={values.sub3}
			/>
			<GearStatInput
				name="sub4"
				label="Sub Stat #4"
				stats={stats.sub}
				onChange={onChange}
				values={values.sub4}
			/>
		</Paper>
	);
};

export default GearInput;
