import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, {Component} from 'react';
import {equipmentStatsById} from '../../constants/equipmentStats';
import equipmentTypes from '../../constants/equipmentTypes';
import GearInput from '../GearInput/GearInput';
import HeroSelect from '../HeroSelect';
import HeroView from '../HeroView';

// todos:
// - default left side equipment to their only value
// - display only available stats for equipment type
// - add and remove % when a percentage stat is selected
// - add changes to redux
// - calculate & display gear stats
// - make it look good

const style = theme => ({
	root: {},
	selection: {
		width: 600,
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: theme.spacing.unit,
	},
	main: {
		display: 'flex',
		alignItems: 'flex-start',
		marginTop: theme.spacing.unit,
	},
	equipment: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing.unit,
		},
	},
	heroview: {
		margin: theme.spacing.unit,
	},
});

class GearPreview extends Component {
	state = {
		selectedHero: '',
	};

	handleChange = event => {
		return this.setState({hero: event.target.value});
	};

	render() {
		const {classes, className, ...props} = this.props;
		const {selectedHero} = this.state;

		const equipmentInputs = equipmentTypes.map(x => {
			const stats = {
				main: x.possibleStats.main.map(id => equipmentStatsById[id]),
				sub: x.possibleStats.sub.map(id => equipmentStatsById[id]),
			};
			const defaultStat = stats.main.length === 1 ? stats.main[0].id : null;
			return (
				<GearInput key={x.id} name={x.id} label={x.label} stats={stats} defaultStat={defaultStat} />
			);
		});

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<Paper className={classes.selection}>
					<HeroSelect value={selectedHero} onChange={this.handleChange} />
				</Paper>
				<div className={classes.main}>
					{selectedHero && <HeroView className={classes.heroview} id={selectedHero} />}
					<div className={classes.equipment}>{equipmentInputs}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(GearPreview);
