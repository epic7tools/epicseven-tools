import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';
import Refresh from '@material-ui/icons/Refresh';
import classNames from 'classnames';
import React from 'react';

const style = {
	root: {},
	tooltip: {},
	icon: {},
};

const ClearSnapshotButton = ({classes, className, ...props}) => (
	<Tooltip className={classes.tooltip} enterDelay={500} title="Clear Snapshot">
		<IconButton className={classNames(classes.root, className)} {...props}>
			<Refresh className={classes.icon} />
		</IconButton>
	</Tooltip>
);

export default withStyles(style)(ClearSnapshotButton);
