import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiToolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import React from 'react';
import AwakeningSelect from '../AwakeningSelect';
import ClearSnapshotButton from '../ClearSnapshotButton';
import LevelSelect from '../LevelSelect';
import NewHeroSelect from '../NewHeroSelect';
import SnapshotButton from '../SnapshotButton';

const style = theme => ({
	root: {
		background: theme.palette.primary,
	},
	toolbar: {
		display: 'flex',
		padding: 0,
	},
	heroSelect: {
		flexGrow: 1,
		fontSize: '1.25em',
		marginRight: theme.spacing.unit * 2,
		minHeight: 64,
	},
	input: {
		minHeight: 64,
		padding: 0,
		fontSize: 'inherit',
		paddingLeft: theme.spacing.unit * 2,
	},
	divider: {
		width: 1,
		height: 36,
		margin: 4,
	},
	button: {
		display: 'flex',
		alignItems: 'baseline',
	},
	buttonIcon: {
		marginRight: theme.spacing.unit,
	},
});

const handleHeroChange = onHeroChange => ({value}) => {
	if (onHeroChange) {
		onHeroChange(value);
	}
};

const Toolbar = ({className, classes, onHeroChange, hero, totalStats, ...props}) => (
	<AppBar className={classNames(classes.root, className)} position="static" {...props}>
		<MuiToolbar className={classes.toolbar}>
			<NewHeroSelect
				onChange={handleHeroChange(onHeroChange)}
				getInputProps={() => ({
					disableUnderline: true,
					fullWidth: true,
					classes: {
						input: classes.input,
					},
				})}
				getRootProps={() => ({
					className: classes.heroSelect,
				})}
			/>
			<AwakeningSelect align="center" />
			<Divider className={classes.divider} />
			<LevelSelect align="center" />
			<Divider className={classes.divider} />
			<SnapshotButton stats={totalStats} />
			<ClearSnapshotButton />
		</MuiToolbar>
	</AppBar>
);

export default withStyles(style)(Toolbar);
