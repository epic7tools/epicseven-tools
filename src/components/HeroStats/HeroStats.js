import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import * as PropTypes from 'prop-types';
import React from 'react';
import HeroStat from './HeroStat';

const HeroStats = ({stats, ...props}) => (
	<Table padding="dense" {...props}>
		<TableHead>
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
			base: PropTypes.number.isRequired,
			gear: PropTypes.number.isRequired,
			percentage: PropTypes.string.isRequired,
		})
	),
};

HeroStats.defaultProps = {
	stats: [],
};

export default HeroStats;
