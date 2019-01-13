import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import GearStatInput from '../GearStatInput';

const style = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
		minWidth: 340,
	},
});

const GearInput = ({className, classes, label, name, stats, defaultStat, onChange, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<Typography variant="h5">{label}</Typography>
		<GearStatInput
			stats={stats.main}
			defaultStat={defaultStat}
			label="Main Stat"
			name="main"
			onChange={onChange}
		/>
		<GearStatInput name="sub1" label="Sub Stat #1" stats={stats.sub} onChange={onChange} />
		<GearStatInput name="sub2" label="Sub Stat #2" stats={stats.sub} onChange={onChange} />
		<GearStatInput name="sub3" label="Sub Stat #3" stats={stats.sub} onChange={onChange} />
		<GearStatInput name="sub4" label="Sub Stat #4" stats={stats.sub} onChange={onChange} />
	</Paper>
);

export default withStyles(style)(GearInput);
