import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiToolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import React from 'react';
import AwakeningSelect from '../AwakeningSelect';
import ClearSnapshotButton from '../ClearSnapshotButton';
import HeroSelect from '../../../core/components/HeroSelect';
import LevelSelect from '../LevelSelect';
import SnapshotButton from '../SnapshotButton';

const style = theme => ({
	root: {
		background: theme.palette.primary,
		zIndex: theme.zIndex.appBar - 1,
	},
	toolbar: {
		display: 'flex',
		padding: 0,
	},
	heroSelect: {
		flexGrow: 1,
		fontSize: theme.typography.pxToRem(16),
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

const handleHeroChange = onHeroChange => change => {
	if (onHeroChange) {
		onHeroChange(change ? change.value : null);
	}
};

const Toolbar = ({className, classes, onHeroChange, hero, totalStats, isHeroLoading, ...props}) => (
	<AppBar className={classNames(classes.root, className)} position="static" {...props}>
		<MuiToolbar className={classes.toolbar}>
			<HeroSelect
				loading={isHeroLoading}
				defaultSelectedItem={hero}
				onChange={handleHeroChange(onHeroChange)}
				getInputProps={() => ({
					placeholder: 'Select a hero',
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
