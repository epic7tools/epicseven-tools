import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import {atk, hp} from '../../../core/constants/stats';
import GearStatInput from '../GearStatInput';

const style = theme => ({
	root: {
		padding: theme.spacing(2),
		minWidth: 340,
	},
});

const ArtifactInput = ({className, classes, name, onChange, values, ...props}) => (
	<Paper className={classNames(classes.root, className)} {...props}>
		<Typography variant="h5">Artifact</Typography>
		<GearStatInput
			name="stat1"
			label="Stat #1"
			stats={[atk]}
			onChange={onChange}
			values={values.stat1}
		/>
		<GearStatInput
			name="stat2"
			label="Stat #2"
			stats={[hp]}
			onChange={onChange}
			values={values.stat2}
		/>
	</Paper>
);

export default withStyles(style)(ArtifactInput);
