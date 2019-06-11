import {makeStyles} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from 'core/components/AppBar';
import Footer from 'core/components/Footer';
import Main from 'core/components/Main';
import React from 'react';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		minHeight: '100vh',
	},
});

const Layout = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar />
			<Main className={classes.main} />
			<Footer />
		</div>
	);
};

export default Layout;
