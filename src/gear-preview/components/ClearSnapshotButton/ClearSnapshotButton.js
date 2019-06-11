import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Refresh from '@material-ui/icons/Refresh';
import React from 'react';

const ClearSnapshotButton = props => (
	<Tooltip enterDelay={500} title="Clear Snapshot">
		<IconButton {...props}>
			<Refresh />
		</IconButton>
	</Tooltip>
);

export default ClearSnapshotButton;
