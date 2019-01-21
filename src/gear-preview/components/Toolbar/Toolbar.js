import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiToolbar from '@material-ui/core/Toolbar';
import CloudDownload from '@material-ui/icons/CloudDownload';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Save from '@material-ui/icons/Save';
import classNames from 'classnames';
import React from 'react';
import AwakeningSelect from '../AwakeningSelect';
import HeroToolbarInput from '../HeroToolbarInput';
import LevelSelect from '../LevelSelect';

const style = theme => ({
	root: {
		background: theme.palette.primary,
	},
	toolbar: {
		display: 'flex',
	},
	heroSelect: {
		flexGrow: 1,
		fontSize: '1.25em',
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

const handleHeroChange = onHeroChange => event => {
	if (onHeroChange) {
		onHeroChange(event.target.value);
	}
};

const Toolbar = ({
	className,
	classes,
	onSnapshot,
	onImport,
	onExport,
	onHeroChange,
	onAwakeningChange,
	onLevelChange,
	...props
}) => (
	<AppBar className={classNames(classes.root, className)} position="static" {...props}>
		<MuiToolbar className={classes.toolbar}>
			<HeroToolbarInput className={classes.heroSelect} onChange={handleHeroChange(onHeroChange)} />
			<Divider className={classes.divider} />
			<AwakeningSelect />
			<Divider className={classes.divider} />
			<LevelSelect />
			<Divider className={classes.divider} />
			<IconButton onClick={onSnapshot}>
				<Save />
			</IconButton>
			<IconButton onClick={onExport}>
				<CloudDownload />
			</IconButton>
			<IconButton onClick={onImport}>
				<CloudUpload />
			</IconButton>
		</MuiToolbar>
	</AppBar>
);

export default withStyles(style)(Toolbar);
