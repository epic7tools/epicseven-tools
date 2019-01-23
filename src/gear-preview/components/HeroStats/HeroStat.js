import withStyles from '@material-ui/core/styles/withStyles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import StatValue from './StatValue';

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
				<StatValue value={base} percentage={percentage} />
			</TableCell>
			<TableCell className={classes.gear} align="right">
				<StatValue value={gear} percentage={percentage} />
			</TableCell>
			<TableCell className={classes.total} align="right">
				<StatValue value={base + gear} percentage={percentage} />
			</TableCell>
		</TableRow>
	);
};

HeroStat.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	base: PropTypes.number,
	gear: PropTypes.number,
	percentage: PropTypes.bool,
};

HeroStat.defaultProps = {
	base: 0,
	gear: 0,
	percentage: false,
};

export default withStyles(style)(HeroStat);
