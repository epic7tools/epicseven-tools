import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiToolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import React from 'react';
import HeroSelect from '../../../core/components/HeroSelect';
import AwakeningSelect from '../AwakeningSelect';
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
		marginRight: theme.spacing.unit * 2,
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

const Toolbar = ({className, classes, onHeroChange, hero, ...props}) => (
	<AppBar className={classNames(classes.root, className)} position="static" {...props}>
		<MuiToolbar className={classes.toolbar}>
			<HeroSelect
				className={classes.heroSelect}
				onChange={handleHeroChange(onHeroChange)}
				variant="standard"
				value={hero}
			/>
			<AwakeningSelect align="center" />
			<Divider className={classes.divider} />
			<LevelSelect align="center" />
		</MuiToolbar>
	</AppBar>
);

export default withStyles(style)(Toolbar);
