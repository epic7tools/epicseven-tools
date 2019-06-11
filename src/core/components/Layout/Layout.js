import {makeStyles} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Main from '../Main';

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
