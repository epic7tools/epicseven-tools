import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';
import equipmentStats from '../../constants/equipmentStats';
import GearStatSelect from '../GearStatSelect';
import GearStatValueInput from '../GearStatValueInput';

const style = theme => ({
	root: {
		'& > *:not(:last-child)': {
			marginRight: theme.spacing.unit,
		},
	},
});

const GearStatInput = ({className, classes, label, name, ...props}) => (
	<div className={classNames(classes.root, className)} {...props}>
		<GearStatSelect label={label} stats={equipmentStats} />
		<GearStatValueInput percentage />
	</div>
);

export default withStyles(style)(GearStatInput);
