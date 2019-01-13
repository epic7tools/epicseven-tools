import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, {Component} from 'react';
import GearInput from '../GearInput';
import HeroSelect from '../HeroSelect';
import HeroView from '../HeroView';

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
	handleHeroChange = event => {
		if (this.props.onHeroChange) {
			this.props.onHeroChange(event.target.value);
		}
	};

	handleGearChange = change => {
		if (this.props.onGearChange) {
			this.props.onGearChange(change);
		}
	};

	render() {
		const {classes, className, equipment, onHeroChange, onGearChange, hero, ...props} = this.props;

		const equipmentInputs = equipment.map(piece => (
			<GearInput
				key={piece.id}
				name={piece.id}
				label={piece.label}
				stats={piece.stats}
				defaultStat={piece.stats.main.length === 1 ? piece.stats.main[0].id : null}
				onChange={this.handleGearChange}
			/>
		));

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<Paper className={classes.selection}>
					<HeroSelect value={hero} onChange={this.handleHeroChange} />
				</Paper>
				<div className={classes.main}>
					{hero && <HeroView className={classes.heroview} id={hero} />}
					<div className={classes.equipment}>{equipmentInputs}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(GearPreview);
