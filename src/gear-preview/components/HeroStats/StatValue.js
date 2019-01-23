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
	difference: {
		marginLeft: theme.spacing.unit / 2,
	},
	greater: {
		color: lightGreen['A700'],
	},
	lesser: {
		color: red['500'],
	},
});

const StatValue = ({classes, className, value, difference, percentage, ...props}) => {
	const sign = difference < 0 ? '-' : '+';
	return (
		<div className={classNames(classes.root, className)} {...props}>
			<Typography className={classes.value} variant="inherit">
				{formatValueText(value, percentage)}
			</Typography>
			{difference && (
				<Typography
					className={classNames(classes.difference, {
						[classes.greater]: difference > 0,
						[classes.lesser]: difference < 0,
					})}
					variant="inherit"
				>
					{`(${sign}${formatValueText(difference, percentage)})`}
				</Typography>
			)}
		</div>
	);
};

export default withStyles(style)(StatValue);
