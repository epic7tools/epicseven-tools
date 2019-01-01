import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import AppBar from '../AppBar';
import Main from '../Main';

const styles = {
	root: {
		display: 'flex',
	},
};

const Layout = ({classes}) => (
	<div className={classes.root}>
		<CssBaseline />
		<AppBar />
		<Main />
	</div>
);

export default withStyles(styles)(Layout);
