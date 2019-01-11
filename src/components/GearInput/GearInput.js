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

const GearInput = ({className, classes, label, name, stats, defaultStat, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<Typography variant="h5">{label}</Typography>
		<GearStatInput
			stats={stats.main}
			defaultStat={defaultStat}
			label="Main Stat"
			name={`${name}_main`}
		/>
		<GearStatInput stats={stats.sub} label="Sub Stat #1" name={`${name}_sub1`} />
		<GearStatInput stats={stats.sub} label="Sub Stat #2" name={`${name}_sub2`} />
		<GearStatInput stats={stats.sub} label="Sub Stat #3" name={`${name}_sub3`} />
		<GearStatInput stats={stats.sub} label="Sub Stat #4" name={`${name}_sub4`} />
	</Paper>
);

export default withStyles(style)(GearInput);
