import React from 'react';
import {Component} from 'react';
import MuiDownshift from 'mui-downshift';

class AutoComplete extends Component {
	static defaultProps = {
		items: [],
	};

	state = {
		filteredItems: this.props.items,
	};

	handleStateChange = changes => {
		if (typeof changes.inputValue === 'string') {
			const filteredItems = this.props.items.filter(item =>
				item.label.toLowerCase().includes(changes.inputValue.toLowerCase())
			);
			this.setState({filteredItems});
		}
		if (this.input && this.props.blurOnSelect) {
			this.input.blur();
		}
	};

	render() {
		const {items, ...props} = this.props;
		const {filteredItems} = this.state;
		return (
			<MuiDownshift
				items={filteredItems}
				onStateChange={this.handleStateChange}
				{...props}
				inputRef={node => {
					this.input = node;
				}}
			/>
		);
	}
}

export default AutoComplete;
