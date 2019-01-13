import withStyles from '@material-ui/core/styles/withStyles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

const style = theme => ({
	root: {},
	name: {},
	base: {},
	gear: {},
	total: {
		fontWeight: theme.typography.fontWeightMedium,
	},
});

const HeroStat = ({className, classes, name, base, gear, percentage, ...props}) => {
	return (
		<TableRow className={classNames(classes.root, className)} {...props}>
			<TableCell className={classes.name} component="th" scope="row">
				{name}
			</TableCell>
			<TableCell className={classes.base} align="right">
				{base}
				{percentage && '%'}
			</TableCell>
			<TableCell className={classes.gear} align="right">
				{gear > 0 && Math.round(gear)}
				{gear > 0 && percentage && '%'}
			</TableCell>
			<TableCell className={classes.total} align="right">
				{Math.round(base + gear)}
				{percentage && '%'}
			</TableCell>
		</TableRow>
	);
};

HeroStat.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	base: PropTypes.number.isRequired,
	gear: PropTypes.number,
	percentage: PropTypes.bool,
};

HeroStat.defaultProps = {
	gear: 0,
	percentage: false,
};

export default withStyles(style)(HeroStat);
