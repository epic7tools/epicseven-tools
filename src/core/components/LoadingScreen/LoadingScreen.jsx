import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React from 'react';

const style = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			marginBottom: theme.spacing(2),
		},
	},
	progress: {},
	text: {},
});

const loadingText = 'Loading application...';
const errorText = "Couldn't load the app. Try refreshing your browser.";

const LoadingScreen = ({className, classes, error, ...props}) => (
	<div className={classNames(classes.root, className)} {...props}>
		{!error && <LinearProgress className="progress" />}
		<Typography variant="h4" className="text" align="center">
			{error ? errorText : loadingText}
		</Typography>
	</div>
);

export default withStyles(style)(LoadingScreen);
