import {withStyles} from '@material-ui/core/styles';
import React from 'react';

const styles = {
	root: {},
};

const Main = ({classes}) => <main className={classes.root} />;

export default withStyles(styles)(Main);
