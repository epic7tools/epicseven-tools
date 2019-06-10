import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import GearSetSelect from '../GearSetSelect';
import GearStatInput from '../GearStatInput';

const style = theme => ({
	root: {
		padding: theme.spacing(2),
		minWidth: 340,
	},
});

const GearInput = ({
	className,
	classes,
	label,
	name,
	stats,
	onChange,
	onGearsetChange,
	values,
	...props
}) => (
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

export default withStyles(style)(GearInput);
