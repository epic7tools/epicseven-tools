import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {atk, hp} from 'core/constants/stats';
import GearStatInput from 'gear-preview/components/GearStatInput';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2),
		minWidth: 340,
	},
}));

const ArtifactInput = ({className, name, onChange, values, ...props}) => {
	const classes = useStyles();
	return (
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
};

export default ArtifactInput;
