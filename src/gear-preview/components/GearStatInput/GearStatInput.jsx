import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import {equipmentStatsById} from '../../../core/constants/equipmentStats';
import GearStatSelect from '../GearStatSelect';
import GearStatValueInput from '../GearStatValueInput';

const style = theme => ({
	root: {
		'& > *:not(:last-child)': {
			marginRight: theme.spacing.unit,
		},
	},
});

class GearStatInput extends Component {
	state = {
		stat: this.props.defaultStat || '',
		value: 0,
	};

	// if we have a default stat we need to emit an onChange
	// event since we can never select it
	componentDidMount() {
		if (this.props.defaultStat) {
			this.handleChange(this.props.name, 'stat', this.props.defaultStat);
		}
	}

	handleChange = (piece, name, value) => {
		if (this.props.onChange) {
			this.props.onChange({[piece]: {[name]: value}});
		}
	};

	handleChangeEvent = event => {
		this.setState({[event.target.name]: event.target.value});
		if (this.props.onChange) {
			this.props.onChange({[this.props.name]: {[event.target.name]: event.target.value}});
		}
	};
	render() {
		const {className, classes, label, stats, defaultStat, onChange, ...props} = this.props;

		const disabled = Boolean(defaultStat);
		const percentage = this.state.stat && equipmentStatsById[this.state.stat].percentage;

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<GearStatSelect
					name="stat"
					disabled={disabled}
					onChange={this.handleChangeEvent}
					label={label}
					stats={stats}
					SelectProps={{
						value: this.state.stat,
					}}
					value={this.state.stat}
				/>
				<GearStatValueInput name="value" onBlur={this.handleChangeEvent} percentage={percentage} />
			</div>
		);
	}
}

GearStatInput.propTypes = {
	className: PropTypes.any,
	classes: PropTypes.any,
	label: PropTypes.any,
	name: PropTypes.any,
};

export default withStyles(style)(GearStatInput);
