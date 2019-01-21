import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, {Component} from 'react';
import GearInput from '../GearInput';
import HeroSelect from '../HeroSelect';
import HeroView from '../HeroView';
import SnapshotIcon from '@material-ui/icons/CameraRollOutlined';

const style = theme => ({
	root: {
		justifyContent: 'center',
		flexDirection: 'column',
	},
	top: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 600,
	},
	heroSelect: {
		padding: theme.spacing.unit,
	},
	saveButtonPaper: {},
	saveButton: {},
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
				onChange={this.handleGearChange}
			/>
		));

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<Paper className={classes.top}>
					<HeroSelect
						margin="dense"
						className={classes.heroSelect}
						value={hero}
						onChange={this.handleHeroChange}
					/>
					<Button className={classes.saveButton}>
						<SnapshotIcon />
						Snapshot
					</Button>
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
