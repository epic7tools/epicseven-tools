import {makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import MuiToolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import HeroSelect from 'core/components/HeroSelect';
import AwakeningSelect from 'gear-preview/components/AwakeningSelect';
import ClearSnapshotButton from 'gear-preview/components/ClearSnapshotButton';
import LevelSelect from 'gear-preview/components/LevelSelect';
import SnapshotButton from 'gear-preview/components/SnapshotButton';
import React from 'react';

const useStyles = makeStyles(theme => ({
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
		marginRight: theme.spacing(2),
		minHeight: 64,
	},
	input: {
		minHeight: 64,
		padding: 0,
		fontSize: 'inherit',
		paddingLeft: theme.spacing(2),
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
		marginRight: theme.spacing(),
	},
}));

const handleHeroChange = onHeroChange => change => {
	if (onHeroChange) {
		onHeroChange(change ? change.value : null);
	}
};

const Toolbar = ({className, onHeroChange, hero, isHeroLoading, ...props}) => {
	const classes = useStyles();
	return (
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
				<SnapshotButton />
				<ClearSnapshotButton />
			</MuiToolbar>
		</AppBar>
	);
};

export default Toolbar;
