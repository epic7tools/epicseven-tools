import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import formatValueText from './formatValueText';

const style = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	value: {},
	diff: {
		marginLeft: theme.spacing.unit / 2,
	},
	greater: {
		color: lightGreen['A700'],
	},
	lesser: {
		color: red['500'],
	},
});

const StatValue = ({classes, className, value, diff, percentage, ...props}) => {
	const sign = diff < 0 ? '-' : '+';
	return (
		<div className={classNames(classes.root, className)} {...props}>
			<Typography className={classes.value} variant="inherit">
				{formatValueText(value, percentage)}
			</Typography>
			{diff !== undefined && diff !== 0 && (
				<Typography
					className={classNames(classes.diff, {
						[classes.greater]: diff > 0,
						[classes.lesser]: diff < 0,
					})}
					variant="inherit"
				>
					{`(${sign}${formatValueText(diff, percentage)})`}
				</Typography>
			)}
		</div>
	);
};

export default withStyles(style)(StatValue);
