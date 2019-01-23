import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import HeroStat from './HeroStat';

const style = {
	root: {},
	row: {
		'&:last-child > *': {
			borderBottom: '0',
		},
	},
};

const HeroStats = ({classes, className, stats, ...props}) => (
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
				<HeroStat
					key={stat.id}
					name={stat.label}
					base={stat.base}
					gear={stat.gear}
					percentage={stat.percentage}
					className={classes.row}
				/>
			))}
		</TableBody>
	</Table>
);

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

export default withStyles(style)(HeroStats);
