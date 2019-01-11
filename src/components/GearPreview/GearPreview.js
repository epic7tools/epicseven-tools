import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import React, {Component} from 'react';
import equipmentTypes from '../../constants/equipmentTypes';
import GearInput from '../GearInput/GearInput';
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
	state = {
		value: '',
	};

	handleChange = event => {
		return this.setState({value: event.target.value});
	};

	render() {
		const {classes, className, ...props} = this.props;

		const equipmentInputs = equipmentTypes.map(x => (
			<GearInput key={x.id} name={x.id} label={x.label} />
		));

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<Paper className={classes.selection}>
					<HeroSelect value={this.state.value} onChange={this.handleChange} />
				</Paper>
				<div className={classes.main}>
					{this.state.value && <HeroView className={classes.heroview} id={this.state.value} />}

					<div className={classes.equipment}>{equipmentInputs}</div>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(GearPreview);
