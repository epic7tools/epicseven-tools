import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import equipmentStats from '../../constants/equipmentStats';
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
		stat: '',
		value: 0,
	};

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	};
	render() {
		const {className, classes, label, ...props} = this.props;
		return (
			<div className={classNames(classes.root, className)} {...props}>
				<GearStatSelect
					name="stat"
					onChange={this.handleChange}
					label={label}
					stats={equipmentStats}
					SelectProps={{
						value: this.state.stat,
					}}
					value={this.state.stat}
				/>
				<GearStatValueInput onChange={this.handleChange} name="value" percentage />
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
