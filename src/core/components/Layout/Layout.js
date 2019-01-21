import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Main from '../Main';

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		minHeight: '100vh',
	},
};

const Layout = ({classes}) => (
	<div className={classes.root}>
		<CssBaseline />
		<AppBar />
		<Main className={classes.main} />
		<Footer />
	</div>
);

export default withStyles(styles)(Layout);
