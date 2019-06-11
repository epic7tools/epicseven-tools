import {makeStyles} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			marginBottom: theme.spacing(2),
		},
	},
	progress: {},
	text: {},
}));

const loadingText = 'Loading application...';
const errorText = "Couldn't load the app. Try refreshing your browser.";

const LoadingScreen = ({className, error, ...props}) => {
	const classes = useStyles();
	return (
		<div className={classNames(classes.root, className)} {...props}>
			{!error && <LinearProgress className="progress" />}
			<Typography variant="h4" className="text" align="center">
				{error ? errorText : loadingText}
			</Typography>
		</div>
	);
};

export default LoadingScreen;
