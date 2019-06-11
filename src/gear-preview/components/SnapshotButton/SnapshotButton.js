import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Save from '@material-ui/icons/Save';
import React from 'react';

const SnapshotButton = props => (
	<Tooltip enterDelay={500} title="Snapshot Gear">
		<IconButton {...props}>
			<Save />
		</IconButton>
	</Tooltip>
);

export default SnapshotButton;
