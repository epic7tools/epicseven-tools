import MuiAppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const styles = {
	root: {},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

const AppBar = ({classes}) => (
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

export default withStyles(styles)(AppBar);
