import React, {Component} from 'react';
import BasicSelect from '../BasicSelect';

export default class HeroSelect extends Component {
	state = {
		value: '',
	};

	handleChange = event => {
		return this.setState({value: event.target.value});
	};

	render() {
		const {dispatch, ...other} = this.props;
		return <BasicSelect onChange={this.handleChange} value={this.state.value} {...other} />;
	}
}
