import {makeStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import HeroStat from './HeroStat';

const useStyles = makeStyles({
	root: {},
	row: {
		'&:last-child > *': {
			borderBottom: '0',
		},
	},
});

const HeroStats = ({className, stats, ...props}) => {
	const classes = useStyles();
	return (
		<Table padding="dense" className={classNames(classes.root, className)} {...props}>
			<TableHead className={classes.tableHead}>
				<TableRow>
					<TableCell />
					<TableCell align="right">Base</TableCell>
					<TableCell align="right">Gear</TableCell>
					<TableCell align="right">Total</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{stats.map(stat => (
					<HeroStat key={stat.id} className={classes.row} {...stat} />
				))}
			</TableBody>
		</Table>
	);
};

HeroStats.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			base: PropTypes.number,
			gear: PropTypes.number,
			percentage: PropTypes.bool.isRequired,
		})
	),
};

HeroStats.defaultProps = {
	stats: [],
};

export default HeroStats;
