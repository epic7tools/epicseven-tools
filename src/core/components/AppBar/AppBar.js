import MuiAppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/es/Tab/Tab';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {Link} from 'react-router-dom';

const styles = theme => ({
	root: {
		background: theme.palette.primary.dark,
	},
	menuButton: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	grow: {
		flexGrow: 1,
	},
	tabs: {
		alignSelf: 'stretch',
	},
	tabsContainer: {
		height: '100%',
	},
});

const AppBar = ({classes, location, staticContext, ...props}) => (
	<MuiAppBar className={classes.root} position="absolute" {...props}>
		<Toolbar className={classes.toolbar} disableGutters>
			<IconButton className={classes.menuButton} color="inherit">
				<MenuIcon />
			</IconButton>
			<Typography className={classes.grow} variant="h6" color="inherit" noWrap>
				Epic Seven Tools
			</Typography>
			<Tabs
				className={classes.tabs}
				value={location.pathname}
				classes={{flexContainer: classes.tabsContainer}}
			>
				<Tab value="/gear-preview" to="/gear-preview" label="Gear Preview" component={Link} />
				<Tab value="/data" to="/data" label="Data" component={Link} />
			</Tabs>
		</Toolbar>
	</MuiAppBar>
);

export default withStyles(styles)(AppBar);
