import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import HeroSelect from '../HeroSelect';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appBarSpacer: theme.mixins.toolbar,
});

const Main = ({classes}) => (
	<main className={classes.root}>
		<div className={classes.appBarSpacer} />
		<HeroSelect />
	</main>
);

export default withStyles(styles)(Main);
