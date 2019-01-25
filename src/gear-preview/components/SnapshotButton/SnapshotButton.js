import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Save from '@material-ui/icons/Save';
import classNames from 'classnames';
import React from 'react';

const style = {
	root: {},
	tooltip: {},
	icon: {},
};

const SnapshotButton = ({classes, className, ...props}) => (
	<Tooltip className={classes.tooltip} enterDelay={500} title="Snapshot Gear">
		<IconButton className={classNames(classes.root, className)} {...props}>
			<Save className={classes.icon} />
		</IconButton>
	</Tooltip>
);

export default withStyles(style)(SnapshotButton);
