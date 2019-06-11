import Refresh from '@material-ui/icons/Refresh';
import ToolbarButton from 'core/components/ToolbarButton';
import makeSnapshot from 'gear-preview/actions/basic/makeSnapshot';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const ClearSnapshotButton = props => {
	const dispatch = useDispatch();
	const onClick = useCallback(() => dispatch(makeSnapshot({})), [dispatch]);
	return (
		<ToolbarButton tooltip="Clear Snapshot" onClick={onClick} {...props}>
			<Refresh />
		</ToolbarButton>
	);
};

export default ClearSnapshotButton;
