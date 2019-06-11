import {makeStyles} from '@material-ui/core';
import LoadingScreen from 'core/components/LoadingScreen';
import GearPreview from 'gear-preview/components/GearPreview';
import * as PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	content: {},
	appBarSpacer: theme.mixins.toolbar,
}));

const Main = ({isLoading, ...props}) => {
	const classes = useStyles();
	return (
		<main className={classes.root} {...props}>
			<div className={classes.appBarSpacer} />
			<div className={classes.content}>{isLoading ? <LoadingScreen /> : <GearPreview />}</div>
		</main>
	);
};

Main.propTypes = {isLoading: PropTypes.bool.isRequired};

export default Main;
