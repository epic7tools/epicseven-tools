import Save from '@material-ui/icons/Save';
import ToolbarButton from 'core/components/ToolbarButton';
import makeSnapshot from 'gear-preview/actions/basic/makeSnapshot';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const SnapshotButton = ({stats, ...props}) => {
	const dispatch = useDispatch();
	const onClick = useCallback(() => dispatch(makeSnapshot(stats)), [dispatch, stats]);
	return (
		<ToolbarButton tooltip="Snapshot Gear" onClick={onClick} {...props}>
			<Save />
		</ToolbarButton>
	);
};

export default SnapshotButton;
