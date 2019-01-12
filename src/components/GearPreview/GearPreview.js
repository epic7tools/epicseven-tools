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
		return this.setState({selectedHero: event.target.value});
	};

	handleStatChange = piece => change => {
		console.log(change);
	};

	render() {
		const {classes, className, ...props} = this.props;
		const {selectedHero} = this.state;

		const equipmentInputs = equipmentTypes.map(piece => (
			<GearInput
				key={piece.id}
				name={piece.id}
				label={piece.label}
				stats={piece.stats}
				defaultStat={piece.stats.main.length === 1 ? piece.stats.main[0].id : null}
				onChange={this.handleStatChange(piece.id)}
			/>
		));

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
