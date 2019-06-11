import {makeStyles} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.primary.dark,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
}));

const AppBar = () => {
	const classes = useStyles();
	return (
		<MuiAppBar className={classes.root} position="absolute">
			<Toolbar>
				<IconButton className={classes.menuButton} color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit" noWrap>
					Epic Seven Tools
				</Typography>
			</Toolbar>
		</MuiAppBar>
	);
};

export default AppBar;
