import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import GearPreview from '../../../gear-preview';
import Data from '../../../data';
import LoadingScreen from '../LoadingScreen';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	content: {},
	appBarSpacer: theme.mixins.toolbar,
});

const Main = ({classes, isLoading, staticContext, ...props}) => {
	const routes = (
		<Switch>
			<Route path="/data" component={Data} />
			<Route path="/gear-preview" component={GearPreview} />
			<Route render={() => <Redirect to="/gear-preview" />} />
		</Switch>
	);

	return (
		<main className={classes.root} {...props}>
			<div className={classes.appBarSpacer} />
			<div className={classes.content}>{isLoading ? <LoadingScreen /> : routes}</div>
		</main>
	);
};

Main.propTypes = {classes: PropTypes.any, isLoading: PropTypes.bool.isRequired};

export default withStyles(styles)(Main);
